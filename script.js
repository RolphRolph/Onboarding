/* ============ CHECKLIST DATA (6-STEGSMODELLEN) ============ */
const SECTIONS = [
  {
    id: "fas1", 
    title: "Fas 1: Kvalificering & Offert",
    syfte: "Behovsanalys och viktiga filterfrågor som styr resten av onboardingprocessen.",
    groups: [{
      items: [
        { id: "is_new_company", type: "select", label: "Är kunden nystartad?", options: ["Välj...", "Ja", "Nej"] },
        { id: "has_employees", type: "select", label: "Har kunden anställda?", options: ["Välj...", "Ja", "Nej"] },
        { id: "has_international", type: "select", label: "Förekommer utlandshandel?", options: ["Välj...", "Ja", "Nej"] },
        { id: "offer_sent", type: "checkbox", label: "Offert och behovsanalys skickad och godkänd" }
      ]
    }]
  },
  {
    id: "fas2", 
    title: "Fas 2: Kundkännedom (KYC)",
    syfte: "Identifiering, PEP/Sanktionskontroll och riskklassning enligt lagkrav.",
    groups: [{
      items: [
        { id: "kyc_id", type: "checkbox", label: "Identitet och verklig huvudman kontrollerad via säker källa" },
        { id: "kyc_pep", type: "checkbox", label: "PEP- och sanktionskontroll genomförd" },
        { id: "kyc_risk", type: "select", label: "Sammanvägd risknivå", options: ["Välj...", "Låg", "Normal", "Hög"] },
        { 
          id: "kyc_high_risk_action", 
          type: "checkbox", 
          label: "Åtgärder vid förhöjd risk utförda och godkända av beslutsfattare",
          condition: (state) => state.kyc_risk === "Hög" // Visas bara om risken är Hög
        }
      ]
    }]
  },
  {
    id: "fas3", 
    title: "Fas 3: Avtal & Signering",
    syfte: "Tydliggöra uppdraget och säkerställa juridiskt bindande avtal.",
    groups: [{
      items: [
        { id: "agreement_limits", type: "checkbox", label: "Gränsdragning (vad som INTE ingår) är tydligt definierad" },
        { id: "agreement_signed", type: "checkbox", label: "Skriftligt uppdragsavtal och PUB-avtal är undertecknat med BankID" }
      ]
    }]
  },
  {
    id: "fas4", 
    title: "Fas 4: Övertagande & Inhämtning",
    // Hela sektionen döljs om kunden är nystartad
    condition: (state) => state.is_new_company === "Nej",
    syfte: "Övertag från tidigare byrå och kontroll av historiska räkenskaper.",
    groups: [{
      items: [
        { id: "takeover_contact", type: "checkbox", label: "Tidigare byrå kontaktad för etisk prövning och överlämning" },
        { id: "takeover_sie", type: "checkbox", label: "SIE-fil och senaste bokslut mottaget via säker kanal" },
        { id: "takeover_ib", type: "checkbox", label: "Ingående balanser (bank, skattekonto, reskontra) avstämda mot tidigare bokslut" }
      ]
    }]
  },
  {
    id: "fas5", 
    title: "Fas 5: Behörigheter & System",
    syfte: "Uppsättning av tekniska plattformar, integrationer och myndighetsombud.",
    groups: [{
      items: [
        { id: "sys_ombud", type: "checkbox", label: "Redovisningsbyrån är registrerad som deklarationsombud hos Skatteverket" },
        { id: "sys_bank", type: "checkbox", label: "Bankkoppling aktiverad och kontoplan anpassad efter verksamheten" },
        { 
          id: "sys_payroll", 
          type: "checkbox", 
          label: "Lönesystem uppsatt och relevanta behörigheter tilldelade", 
          condition: (state) => state.has_employees === "Ja" // Visas bara om de har anställda
        },
        { 
          id: "sys_intl", 
          type: "checkbox", 
          label: "Utlandskonton och eventuella EU/OSS-momsinställningar aktiverade", 
          condition: (state) => state.has_international === "Ja" // Visas bara vid utlandshandel
        },
        { id: "sys_docs", type: "checkbox", label: "Standardiserad digital mappstruktur skapad och dokumentationsmall upprättad" }
      ]
    }]
  },
  {
    id: "fas6", 
    title: "Fas 6: Start & Uppföljning",
    syfte: "Slutföra onboardingen och säkra kvaliteten på samarbetet.",
    groups: [{
      items: [
        { id: "start_welcome", type: "checkbox", label: "Automatiskt välkomstmejl med viktiga deadlines skickat till kunden" },
        { id: "start_followup", type: "checkbox", label: "Teknisk och kvalitativ uppföljning med kunden genomförd (efter 1-3 månader)" }
      ]
    }]
  }
];

/* ============ STORAGE KEYS ============ */
const CUSTOMERS_KEY = "onboarding-customers-v2";
const ACTIVE_CUSTOMER_KEY = "onboarding-active-customer-v2";
const stateKeyFor = (customerId) => "onboarding-state-v2-" + customerId;

/* ============ APP STATE ============ */
let customers = [];          
let activeCustomerId = null; 
let state = {};              // Platt objekt: { "is_new_company": "Nej", "kyc_id": true, ... }
let view = 'customers';      
let activeId = SECTIONS[0].id;

// Hjälpfunktioner för att räkna ut framsteg baserat på synliga uppgifter
function getVisibleItems(section, currentState) {
  if (section.condition && !section.condition(currentState)) return [];
  let visible = [];
  section.groups.forEach(g => {
    g.items.forEach(item => {
      if (!item.condition || item.condition(currentState)) {
        visible.push(item);
      }
    });
  });
  return visible;
}

function blankState(){
  return {};
}

function ensureState(s){
  if (typeof s !== 'object' || Array.isArray(s) || s === null) return {};
  return s;
}

function sectionCountsOf(s, section){
  const visible = getVisibleItems(section, s);
  const total = visible.length;
  const done = visible.filter(item => {
    const val = s[item.id];
    if (item.type === 'checkbox') return val === true;
    if (item.type === 'select') return val && val !== "Välj...";
    return !!val;
  }).length;
  return { done, total };
}

function sectionPctOf(s, section){
  const c = sectionCountsOf(s, section);
  if(c.total === 0) return 100; // Om sektionen är dold eller tom, räknas den som klar
  return Math.round((c.done / c.total) * 100);
}

function overallPctOf(s){
  let done = 0, total = 0;
  SECTIONS.forEach(sec => {
    if (!sec.condition || sec.condition(s)) { // Räkna bara in synliga sektioner
      const c = sectionCountsOf(s, sec);
      done += c.done; 
      total += c.total;
    }
  });
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

function sectionPct(section){ return sectionPctOf(state, section); }
function sectionCounts(section){ return sectionCountsOf(state, section); }
function overallPct(){ return overallPctOf(state); }

function pctColor(pct){
  const r1=166,g1=59,b1=50; // röd
  const r2=63,g2=122,b2=87; // grön
  const t = Math.max(0, Math.min(100,pct))/100;
  const r = Math.round(r1+(r2-r1)*t);
  const g = Math.round(g1+(g2-g1)*t);
  const b = Math.round(b1+(b2-b1)*t);
  return `rgb(${r},${g},${b})`;
}

/* ============ PERSISTENCE ============ */
function loadCustomers(){
  try{
    const raw = localStorage.getItem(CUSTOMERS_KEY);
    customers = raw ? JSON.parse(raw) : [];
  }catch(e){ customers = []; }
  try{
    activeCustomerId = localStorage.getItem(ACTIVE_CUSTOMER_KEY) || null;
  }catch(e){ activeCustomerId = null; }
}

function saveCustomers(){
  try{
    localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(customers));
    setSaveStatus("Sparat automatiskt");
  }catch(e){
    setSaveStatus("Kunde inte spara just nu");
  }
}

function loadStateFor(customerId){
  let s = blankState();
  try{
    const raw = localStorage.getItem(stateKeyFor(customerId));
    if(raw) s = JSON.parse(raw);
  }catch(e){ }
  return ensureState(s);
}

function saveState(){
  if(!activeCustomerId) return;
  try{
    localStorage.setItem(stateKeyFor(activeCustomerId), JSON.stringify(state));
    setSaveStatus("Sparat automatiskt");
  }catch(e){
    setSaveStatus("Kunde inte spara just nu");
  }
}

function setSaveStatus(text){
  const el = document.getElementById('save-status');
  if(el) el.textContent = text;
}

function getCustomerOverallPct(customerId){
  return overallPctOf(loadStateFor(customerId));
}

/* ============ CUSTOMER ACTIONS ============ */
function makeId(){
  return 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2,7);
}

function addCustomer(name){
  const trimmed = name.trim();
  if(!trimmed) return;
  const customer = { id: makeId(), name: trimmed, createdAt: new Date().toISOString(), lastTab: SECTIONS[0].id };
  customers.push(customer);
  saveCustomers();
  openCustomer(customer.id);
}

function openCustomer(id){
  const c = customers.find(x=>x.id===id);
  if(!c) return;
  activeCustomerId = id;
  try{ localStorage.setItem(ACTIVE_CUSTOMER_KEY, id); }catch(e){}
  state = loadStateFor(id);
  view = 'checklist';
  activeId = c.lastTab || SECTIONS[0].id;
  fullRender();
}

function deleteCustomer(id){
  const c = customers.find(x=>x.id===id);
  if(!c) return;
  if(!confirm(`Ta bort kundprofilen "${c.name}" och all dess checklistdata? Detta går inte att ångra.`)) return;
  customers = customers.filter(x=>x.id!==id);
  try{ localStorage.removeItem(stateKeyFor(id)); }catch(e){}
  saveCustomers();
  if(activeCustomerId===id){
    activeCustomerId = null;
    try{ localStorage.removeItem(ACTIVE_CUSTOMER_KEY); }catch(e){}
    view = 'customers';
  }
  fullRender();
}

function goToCustomerList(){
  view = 'customers';
  fullRender();
}

/* ============ RENDER: SIDEBAR ============ */
const tabsEl = document.getElementById('tabs');
const clientBtn = document.getElementById('client-btn');
const clientNameLabel = document.getElementById('client-name-label');
const checkSvg = `<svg viewBox="0 0 24 24" fill="none"><path d="M4 12.5L9.5 18L20 6" stroke="#F1ECDD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function renderClientButton(){
  const activeCustomer = customers.find(c=>c.id===activeCustomerId);
  if(activeCustomer){
    clientBtn.classList.remove('no-client');
    clientNameLabel.textContent = activeCustomer.name;
  }else{
    clientBtn.classList.add('no-client');
    clientNameLabel.textContent = "Ingen kund vald";
  }
}

function renderSidebar(){
  tabsEl.innerHTML = "";
  const hasActive = !!activeCustomerId;
  tabsEl.classList.toggle('disabled', !hasActive);

  let visibleIndex = 1;
  SECTIONS.forEach((s) => {
    // Dölj sektionen i sidomenyn om villkoret inte är uppfyllt
    if (s.condition && !s.condition(state)) return; 

    const pct = sectionPct(s);
    const c = sectionCounts(s);
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (view==='checklist' && s.id===activeId ? ' active':'');
    btn.dataset.id = s.id;
    btn.innerHTML = `
      <span class="num">${String(visibleIndex).padStart(2,'0')}</span>
      <span class="ring" style="--pct:${pct}; --ringcolor:${pctColor(pct)}"><span>${pct}</span></span>
      <span class="label"><span class="t">${s.title}</span><span class="f">${c.done}/${c.total} klara</span></span>
    `;
    btn.addEventListener('click', ()=>{ if(hasActive) setActive(s.id); });
    tabsEl.appendChild(btn);
    visibleIndex++;
  });

  const op = overallPct();
  let totalAll = 0, doneAll = 0;
  SECTIONS.forEach(s => {
    if (!s.condition || s.condition(state)) {
      const c = sectionCounts(s);
      totalAll += c.total; doneAll += c.done;
    }
  });

  const sBtn = document.createElement('button');
  sBtn.className = 'tab-btn summary-btn' + (view==='checklist' && activeId==='summary' ? ' active':'');
  sBtn.dataset.id = 'summary';
  sBtn.innerHTML = `
    <span class="num">${visibleIndex}</span>
    <span class="ring" style="--pct:${op}; --ringcolor:${pctColor(op)}"><span>${op}</span></span>
    <span class="label"><span class="t">Sammanfattning</span><span class="f">${doneAll}/${totalAll} totalt</span></span>
  `;
  sBtn.addEventListener('click', ()=>{ if(hasActive) setActive('summary'); });
  tabsEl.appendChild(sBtn);

  document.getElementById('reset-btn').disabled = !hasActive;
  renderClientButton();
}

/* ============ RENDER: CHECKLIST PAGES ============ */
function renderSectionPage(section){
  const page = document.createElement('div');
  page.className = 'page';
  page.id = 'page-'+section.id;

  const pct = sectionPct(section);
  const c = sectionCounts(section);

  let groupsHtml = "";
  section.groups.forEach((g) => {
    let headHtml = "";
    if(g.title){
      headHtml = `<div class="group-head">${g.label? `<span class="gnum">${g.label}</span>`:""}<span class="gtitle">${g.title}</span></div>`;
    }
    
    let itemsHtml = "";
    g.items.forEach((item) => {
      // Dölj enskilda uppgifter om deras villkor inte är uppfyllt
      if (item.condition && !item.condition(state)) return;

      const val = state[item.id] || ""; 
      let inputHtml = "";

      if (item.type === "select") {
        const optionsHtml = item.options.map(opt => 
          `<option value="${opt}" ${val === opt ? 'selected' : ''}>${opt}</option>`
        ).join('');
        // Enkel inline-styling för att matcha verktygets utseende något
        inputHtml = `<select data-id="${item.id}" style="margin-right:12px; padding:4px 8px; border-radius:4px; border:1px solid var(--brass); background:white;">${optionsHtml}</select>`;
      } else {
        const checked = val ? 'checked' : '';
        inputHtml = `
          <input type="checkbox" data-id="${item.id}" ${checked}>
          <span class="box">${checkSvg}</span>
        `;
      }

      itemsHtml += `
        <label class="item ${item.type}">
          ${inputHtml}
          <span class="txt">${item.label}</span>
        </label>
      `;
    });

    if (itemsHtml !== "") {
      groupsHtml += `<div class="group">${headHtml}${itemsHtml}</div>`;
    }
  });

  page.innerHTML = `
    <div class="page-eyebrow">Onboarding · Checklista</div>
    <h2>${section.title}</h2>
    <p class="syfte">${section.syfte}</p>
    <div class="progress-wrap" id="progress-${section.id}">
      <div class="progress-top">
        <span class="pct-num">${pct}%</span>
        <span class="frac">${c.done} av ${c.total} punkter avklarade</span>
      </div>
      <div class="bar-track"><div class="bar-fill" style="width:${pct}%; background:${pctColor(pct)}"></div></div>
    </div>
    ${groupsHtml}
  `;
  return page;
}

function renderSummaryPage(){
  const page = document.createElement('div');
  page.className = 'page';
  page.id = 'page-summary';

  const op = overallPct();
  let totalAll = 0, doneAll = 0;
  let rows = "";
  
  SECTIONS.forEach(s => {
    if (s.condition && !s.condition(state)) return; // Visa inte dolda sektioner i sammanfattningen

    const pct = sectionPct(s);
    const c = sectionCounts(s);
    totalAll += c.total; doneAll += c.done;

    rows += `
      <div class="sum-row" data-id="${s.id}">
        <span class="sname">${s.title}</span>
        <span class="sbar"><span class="sbar-fill" style="width:${pct}%; background:${pctColor(pct)}"></span></span>
        <span class="sfrac">${c.done}/${c.total}</span>
      </div>
    `;
  });

  const activeCustomer = customers.find(c=>c.id===activeCustomerId);

  page.innerHTML = `
    <div class="page-eyebrow">Onboarding · Översikt</div>
    <h2>Sammanfattning${activeCustomer ? ' – '+activeCustomer.name : ''}</h2>
    <p class="syfte">Här ser du hur långt onboardingen av kunden har kommit totalt i de aktiva faserna.</p>
    <div class="summary-hero">
      <div class="big-ring" style="--pct:${op}; --ringcolor:${pctColor(op)}"><span class="num">${op}%</span></div>
      <div class="cap">Total färdigställd onboarding</div>
      <div class="sub">${doneAll} av ${totalAll} punkter avklarade över samtliga aktiva faser</div>
    </div>
    <div id="sum-rows">${rows}</div>
  `;
  return page;
}

/* ============ RENDER: CUSTOMERS PAGE ============ */
function renderCustomersPage(){
  const page = document.createElement('div');
  page.className = 'page active';
  page.id = 'page-customers';

  let listHtml = "";
  if(customers.length===0){
    listHtml = `<div class="empty-clients">Inga kunder ännu — lägg till din första kund ovan för att komma igång.</div>`;
  }else{
    const sorted = [...customers].sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt));
    sorted.forEach(c=>{
      const pct = getCustomerOverallPct(c.id);
      const dateStr = new Date(c.createdAt).toLocaleDateString('sv-SE');
      listHtml += `
        <div class="client-card" data-id="${c.id}">
          <span class="cring" style="--pct:${pct}; --ringcolor:${pctColor(pct)}"><span>${pct}%</span></span>
          <span class="cinfo">
            <div class="cname">${c.name}</div>
            <div class="cmeta">Skapad ${dateStr}</div>
          </span>
          <span class="copen">Öppna checklista ›</span>
          <button class="cdel" type="button" data-del="${c.id}">Ta bort</button>
        </div>
      `;
    });
  }

  page.innerHTML = `
    <div class="page-eyebrow">Onboarding · Kunder</div>
    <h2>Kundprofiler</h2>
    <p class="syfte">Lägg till en ny kund för att starta en onboarding, eller öppna en befintlig kundprofil för att fortsätta där du var.</p>
    <form class="add-client-form" id="add-client-form">
      <input type="text" id="new-client-name" placeholder="Kundens namn, t.ex. Acme AB" autocomplete="off">
      <button type="submit">Lägg till kund</button>
    </form>
    <div id="client-list">${listHtml}</div>
  `;
  return page;
}

/* ============ MAIN RENDER ORCHESTRATION ============ */
const mainEl = document.getElementById('main');

function renderMain(){
  mainEl.innerHTML = "";

  if(view==='customers'){
    const page = renderCustomersPage();
    mainEl.appendChild(page);

    document.getElementById('add-client-form').addEventListener('submit', (e)=>{
      e.preventDefault();
      const input = document.getElementById('new-client-name');
      addCustomer(input.value);
      input.value = "";
    });
    mainEl.querySelectorAll('.client-card').forEach(card=>{
      card.addEventListener('click', (e)=>{
        if(e.target.closest('[data-del]')) return;
        openCustomer(card.dataset.id);
      });
    });
    mainEl.querySelectorAll('[data-del]').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        deleteCustomer(btn.dataset.del);
      });
    });
    return;
  }

  // view === 'checklist'
  SECTIONS.forEach(s=>{
    if (s.condition && !s.condition(state)) return; // Rita inte ut dolda sidor alls
    const page = renderSectionPage(s);
    if(s.id===activeId) page.classList.add('active');
    mainEl.appendChild(page);
  });
  
  const summaryPage = renderSummaryPage();
  if(activeId==='summary') summaryPage.classList.add('active');
  mainEl.appendChild(summaryPage);

  mainEl.querySelectorAll('.sum-row').forEach(row=>{
    row.addEventListener('click', ()=> setActive(row.dataset.id));
  });
}

function setActive(id){
  activeId = id;
  const c = customers.find(x=>x.id===activeCustomerId);
  if(c){ c.lastTab = id; saveCustomers(); }
  document.querySelectorAll('.tab-btn').forEach(b=> b.classList.toggle('active', b.dataset.id===id));
  document.querySelectorAll('.page').forEach(p=> p.classList.remove('active'));
  const target = document.getElementById('page-'+id);
  if(target) target.classList.add('active');
  mainEl.scrollTop = 0;
}

function fullRender(){
  // Om vi befinner oss på en flik som plötsligt döljs av logik, hoppa till nästa tillgängliga
  if(view === 'checklist') {
    const currentSection = SECTIONS.find(s => s.id === activeId);
    if (currentSection && currentSection.condition && !currentSection.condition(state)) {
       activeId = SECTIONS.find(s => !s.condition || s.condition(state)).id;
    }
  }

  renderSidebar();
  renderMain();
  if(view==='checklist') setActive(activeId);
}

/* ============ EVENTS ============ */
// Global event listener för alla inputs via Event Delegation
mainEl.addEventListener('change', (e) => {
  if(e.target.matches('input[type="checkbox"], select')) {
    const itemId = e.target.dataset.id;
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    state[itemId] = value;
    saveState();
    
    // Vi gör en fullRender varje gång för att eventuella dolda fält ska visas/döljas direkt
    fullRender(); 
  }
});

clientBtn.addEventListener('click', goToCustomerList);

document.getElementById('reset-btn').addEventListener('click', ()=>{
  if(!activeCustomerId) return;
  const c = customers.find(x=>x.id===activeCustomerId);
  if(!confirm(`Nollställa samtliga bockade punkter och svar för "${c ? c.name : 'kunden'}"? Detta går inte att ångra.`)) return;
  state = blankState();
  saveState();
  fullRender();
});

/* ============ INIT ============ */
(function init(){
  loadCustomers();
  if(activeCustomerId && customers.find(c=>c.id===activeCustomerId)){
    const c = customers.find(c=>c.id===activeCustomerId);
    state = loadStateFor(activeCustomerId);
    view = 'checklist';
    activeId = c.lastTab || SECTIONS[0].id;
  }else{
    activeCustomerId = null;
    view = 'customers';
  }
  fullRender();
})();