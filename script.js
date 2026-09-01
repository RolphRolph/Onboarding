/* ============ CHECKLIST DATA ============
   Fas 1 och 2 har egna formulär. Fas 3–6 använder den befintliga
   checklistmotorn, men med få huvudpunkter och villkorsstyrd visning. */
const SECTIONS = [
  {
    id:"kontakt", title:"Företagsprofil & uppdrag",
    syfte:"Ringa in kunden, uppdragets omfattning och de uppgifter som ska styra resten av onboardingen.",
    groups:[]
  },
  {
    id:"kundkannedom", title:"Kundkännedom & risk",
    syfte:"Säkerställa tillräcklig kundkännedom, bedöma risk och avgöra om kunden kan accepteras.",
    groups:[]
  },
  {
    id:"avtal", title:"Avtal & arbetssätt",
    syfte:"Bestämma hur uppdraget ska genomföras i praktiken och tydliggöra ansvar mellan kunden och byrån.",
    groups:[
      {title:"Uppdrag och villkor", items:[
        {id:"scope", text:"Uppdragets omfattning och gränsdragning är fastställd"},
        {id:"commercial", text:"Pris och kommersiella villkor är fastställda"}
      ]},
      {title:"Ansvar och samarbete", items:[
        {id:"responsibility", text:"Ansvarsfördelningen mellan kunden och byrån är fastställd"},
        {id:"internal", text:"Ansvarig konsult, eventuell ersättare och behov av specialist är hanterade"},
        {id:"communication", text:"Kontaktpersoner och kommunikationskanaler är fastställda"},
        {id:"materialRoutine", text:"Rutin för inskickning av underlag och viktiga deadlines är överenskomna"},
        {id:"approvalRoutine", text:"Attest- och godkännanderutiner är fastställda, om relevant"}
      ]},
      {title:"Administration och avtal", items:[
        {id:"customerCard", text:"Kundkortet är komplett"},
        {id:"agreement", text:"Uppdragsavtal med relevanta villkor och bilagor är upprättat"},
        {id:"agreementSigned", text:"Uppdragsavtalet är signerat och arkiverat"}
      ]}
    ]
  },
  {
    id:"overtag", title:"Övertag & ekonomiskt underlag",
    syfte:"Säkerställa ett korrekt ekonomiskt utgångsläge och en tydlig övergång till den nya byrån.",
    groups:[
      {title:"Övertag från tidigare byrå", items:[
        {id:"previousContact", text:"Tidigare byrå är kontaktad och övertagandet är samordnat", visibleWhen:"previousFirm"},
        {id:"previousIssues", text:"Eventuella problem, tvister, obetalda arvoden eller andra relevanta omständigheter är utredda", visibleWhen:"previousFirm"},
        {id:"ongoingWork", text:"Pågående arbete, perioder och viktiga deadlines är kartlagda", visibleWhen:"previousFirm"},
        {id:"previousAccess", text:"Tidigare behörigheter och fullmakter är identifierade och hanterade", visibleWhen:"previousFirm"}
      ]},
      {title:"Räkenskapsinformation", items:[
        {id:"bookkeepingData", text:"Bokföringsdata/SIE och nödvändiga bokföringsunderlag är mottagna", visibleWhen:"existing"},
        {id:"annualMaterial", text:"Senaste bokslut/årsredovisning och relevanta deklarationer är mottagna", visibleWhen:"existing"},
        {id:"registers", text:"Nödvändiga register och specifikationer är mottagna", visibleWhen:"existing"}
      ]},
      {title:"Ingående läge", items:[
        {id:"openingBalances", text:"Ingående balanser och väsentliga poster är kontrollerade", visibleWhen:"existing"},
        {id:"deviations", text:"Eventuella fel eller avvikelser är dokumenterade och hanterade", visibleWhen:"existing"}
      ]}
    ]
  },
  {
    id:"system", title:"Behörigheter, system & dokumentation",
    syfte:"Göra kundens praktiska arbetsmiljö redo för löpande arbete och bara visa de delar som är relevanta för uppdraget.",
    groups:[
      {title:"Behörigheter", items:[
        {id:"authorityAccess", text:"Nödvändiga myndighets- och ombudsbehörigheter är på plats"},
        {id:"bankSystemAccess", text:"Nödvändiga bank- och systembehörigheter är på plats"},
        {id:"correctAccess", text:"Rätt personer har rätt åtkomst"}
      ]},
      {title:"Systemuppsättning", items:[
        {id:"baseSetup", text:"Grundinställningar och kontoplan är korrekt konfigurerade"},
        {id:"vatSetup", text:"Moms- och skattehantering är korrekt konfigurerad", visibleWhen:"vat"},
        {id:"payrollSetup", text:"Lönesystem och relevanta lönebehörigheter är uppsatta", visibleWhen:"payroll"},
        {id:"paymentFlows", text:"Nödvändiga bank-, faktura- och betalningsflöden är uppsatta", visibleWhen:"bookkeeping"},
        {id:"foreignSetup", text:"Relevant utlandsmoms/OSS eller annan utlandshantering är konfigurerad", visibleWhen:"foreign"},
        {id:"integrations", text:"Nödvändiga integrationer och specialfunktioner är aktiverade och testade"}
      ]},
      {title:"Digital dokumenthantering", items:[
        {id:"documentStructure", text:"Kundens dokumentstruktur är upprättad enligt byråns standard"},
        {id:"documentsSaved", text:"Nödvändiga dokument är sparade på rätt plats"},
        {id:"documentAccess", text:"Åtkomst och delning är korrekt konfigurerade"}
      ]},
      {title:"Funktionstest", items:[
        {id:"systemTest", text:"Väsentliga system, integrationer och automatiska flöden är testade"}
      ]}
    ]
  },
  {
    id:"uppfoljning", title:"Startklar & uppföljning",
    syfte:"Verifiera att kunden är redo för löpande arbete och fånga upp problem efter den första tiden.",
    groups:[
      {title:"Startklar", items:[
        {id:"acceptanceAgreement", text:"Kundaccept och uppdragsavtal är klara", disabledWhen:"startPrerequisites"},
        {id:"openingReady", text:"Nödvändigt underlag och ekonomiskt utgångsläge är kontrollerade", visibleWhen:"existing"},
        {id:"systemsReady", text:"Behörigheter, system och integrationer fungerar"},
        {id:"workReady", text:"Ansvar, arbetsrutiner och kommande deadlines är tydliga"},
        {id:"remaining", text:"Eventuella kvarstående punkter är dokumenterade och har en ansvarig"}
      ]},
      {title:"Uppföljning efter start", items:[
        {id:"customerFollowup", text:"Kunden är kontaktad och övergången fungerar som förväntat"},
        {id:"routineFollowup", text:"Rutiner för kommunikation och inskickning av material fungerar"},
        {id:"technicalFollowup", text:"Behörigheter, integrationer och relevanta systemflöden fungerar"},
        {id:"issuesFollowup", text:"Eventuella problem, saknade uppgifter eller brister är identifierade och hanterade"}
      ]}
    ]
  }
];

/* ============ STORAGE KEYS ============ */
const CUSTOMERS_KEY = "onboarding-customers-v1";
const ACTIVE_CUSTOMER_KEY = "onboarding-active-customer-v1";
const stateKeyFor = (customerId) => "onboarding-state-v1-" + customerId;

/* ============ FAS 1: FÖRETAGSUPPGIFTER OCH UPPDRAGSPROFIL ============
   Fas 1 skiljer sig från övriga steg: användaren matar in grunddata och
   systemet återanvänder samma data för flera regelverksbedömningar.
   Övriga faser fortsätter använda den befintliga checklistmodellen ovan. */
const PHASE1_KEY_PREFIX = "onboarding-phase1-v1-";
const phaseOneKeyFor = (customerId) => PHASE1_KEY_PREFIX + customerId;

/* Intervallen ligger samlade här så att Fas 1-reglerna kan använda samma gränser
   utan att lagra eller visa påhittade exakta belopp. */
const TURNOVER_RANGES = [
  {value:'turnover_upto_1m', label:'Upp till 1 mkr', minExclusive:null, max:1000000},
  {value:'turnover_1m_3m', label:'Över 1 mkr – 3 mkr', minExclusive:1000000, max:3000000},
  {value:'turnover_3m_40m', label:'Över 3 mkr – 40 mkr', minExclusive:3000000, max:40000000},
  {value:'turnover_40m_80m', label:'Över 40 mkr – 80 mkr', minExclusive:40000000, max:80000000},
  {value:'turnover_over_80m', label:'Över 80 mkr', minExclusive:80000000, max:null}
];
const BALANCE_RANGES = [
  {value:'balance_upto_1_5m', label:'Upp till 1,5 mkr', minExclusive:null, max:1500000},
  {value:'balance_1_5m_40m', label:'Över 1,5 mkr – 40 mkr', minExclusive:1500000, max:40000000},
  {value:'balance_over_40m', label:'Över 40 mkr', minExclusive:40000000, max:null}
];
const EMPLOYEE_RANGES = [
  {value:'employees_0_3', label:'0–3', minExclusive:null, max:3},
  {value:'employees_4_50', label:'4–50', minExclusive:3, max:50},
  {value:'employees_over_50', label:'Över 50', minExclusive:50, max:null}
];
const PHASE1_RANGES = {turnover:TURNOVER_RANGES, balance:BALANCE_RANGES, employees:EMPLOYEE_RANGES};

function blankPhaseOne(){
  return {
    companyType: "",                 // "ab" | "sole"
    businessStatus: "",              // "new" | "existing"
    services: [],                     // bookkeeping, vat, payroll, annual, tax, other
    otherService: "",
    // Kompakta registrerings- och styrfrågor som används för att filtrera Fas 3–6.
    vatRegistered: "",                // "yes" | "no"
    employerRegistered: "",           // "yes" | "no"
    fTaxRegistered: "",               // "yes" | "no"
    previousFirm: "",                 // "yes" | "no" (endast befintlig verksamhet)
    foreignActivity: "",              // "yes" | "no"
    latest: { turnover:"", balance:"", employees:"" },
    previous: { turnover:"", balance:"", employees:"" },
    expected: { turnover:"", balance:"", employees:"" },
    choices: { kRule:"", accountingMethod:"", vatPeriod:"" }
  };
}

function ensurePhaseOne(data){
  const base = blankPhaseOne();
  const d = data && typeof data === 'object' ? data : {};
  return {
    ...base,
    ...d,
    services: Array.isArray(d.services) ? d.services : [],
    latest: {...base.latest, ...(d.latest || {})},
    previous: {...base.previous, ...(d.previous || {})},
    expected: {...base.expected, ...(d.expected || {})},
    choices: {...base.choices, ...(d.choices || {})}
  };
}

function loadPhaseOneFor(customerId){
  try{
    const raw = localStorage.getItem(phaseOneKeyFor(customerId));
    return ensurePhaseOne(raw ? JSON.parse(raw) : null);
  }catch(e){
    return blankPhaseOne();
  }
}

function savePhaseOne(){
  if(!activeCustomerId) return;
  try{
    localStorage.setItem(phaseOneKeyFor(activeCustomerId), JSON.stringify(phaseOne));
    setSaveStatus("Sparat automatiskt");
  }catch(e){
    setSaveStatus("Kunde inte spara just nu");
  }
}

function toNumber(value){
  if(value === "" || value === null || value === undefined) return null;
  const n = Number(String(value).replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(n) ? n : null;
}

function formatMoney(value){
  const n = toNumber(value);
  return n === null ? "–" : new Intl.NumberFormat('sv-SE', {maximumFractionDigits:0}).format(n) + " kr";
}

function phaseOneScope(){
  return phaseOne.businessStatus === 'new' ? phaseOne.expected : phaseOne.latest;
}

function getRangeDefinition(type, value){
  return (PHASE1_RANGES[type] || []).find(range => range.value === value) || null;
}

/* Äldre kunder kan ha exakta numeriska värden sparade. De klassificeras vid läsning/användning
   men localStorage skrivs inte om förrän användaren själv ändrar ett dropdown-val. */
function classifyLegacyRangeValue(type, value){
  if(value === '' || value === null || value === undefined) return '';
  if(getRangeDefinition(type, value)) return value;
  const n = toNumber(value);
  if(n === null) return '';
  const match = (PHASE1_RANGES[type] || []).find(range =>
    (range.minExclusive === null || n > range.minExclusive) &&
    (range.max === null || n <= range.max)
  );
  return match ? match.value : '';
}

function hasRangeValue(type, value){
  return !!classifyLegacyRangeValue(type, value);
}

function getRangeLabel(type, value){
  const normalized = classifyLegacyRangeValue(type, value);
  const range = getRangeDefinition(type, normalized);
  return range ? range.label : '';
}

/* Gränserna ligger exakt mellan intervallen. Därför kan varje regel avgöras entydigt
   utan att anta ett exakt belopp inne i intervallet. */
function rangeExceedsThreshold(type, value, threshold){
  const range = getRangeDefinition(type, classifyLegacyRangeValue(type, value));
  if(!range) return null;
  return range.minExclusive !== null && range.minExclusive >= threshold;
}

function hasCompleteHistoricalData(){
  return ['turnover','balance','employees'].every(k => hasRangeValue(k, phaseOne.latest[k]) && hasRangeValue(k, phaseOne.previous[k]));
}

function countExceeded(year, limits){
  return Object.keys(limits).reduce((count, key) => count + (rangeExceedsThreshold(key, year[key], limits[key]) === true ? 1 : 0), 0);
}

/* Separata logikfunktioner enligt Fas 1-prompten. De använder samma grunddata. */
function calculateAuditRequirement(){
  if(phaseOne.companyType !== 'ab') return {status:'na', label:'Inte aktuellt', detail:'Revisionspliktskontrollen visas endast för aktiebolag.'};
  if(phaseOne.businessStatus !== 'existing' || !hasCompleteHistoricalData()){
    return {status:'review', label:'Kan inte slutligt bedömas', detail:'Två kompletta historiska räkenskapsår krävs för den automatiska tvåårsbedömningen.'};
  }
  const limits = {turnover:3000000, balance:1500000, employees:3};
  const a = countExceeded(phaseOne.latest, limits);
  const b = countExceeded(phaseOne.previous, limits);
  const required = a >= 2 && b >= 2;
  return {
    status: required ? 'blocked' : 'possible',
    label: required ? 'Revisionsplikt föreligger' : 'Ingen revisionsplikt utifrån storlekskriterierna',
    detail: `Senaste året: ${a} av 3 gränsvärden överskridna. Föregående året: ${b} av 3.`
  };
}

function calculateLargeCompanyStatus(){
  if(phaseOne.companyType !== 'ab') return {status:'na', label:'Inte aktuellt', detail:'Storleksstödet visas här för aktiebolag.'};
  if(phaseOne.businessStatus !== 'existing' || !hasCompleteHistoricalData()){
    return {status:'review', label:'Kan inte slutligt bedömas', detail:'Två kompletta historiska räkenskapsår krävs för den automatiska tvåårsbedömningen.'};
  }
  const limits = {turnover:80000000, balance:40000000, employees:50};
  const a = countExceeded(phaseOne.latest, limits);
  const b = countExceeded(phaseOne.previous, limits);
  const large = a >= 2 && b >= 2;
  return {
    status: large ? 'blocked' : 'possible',
    label: large ? 'Företaget uppfyller storlekskriterierna för större företag' : 'Företaget uppfyller inte storlekskriterierna för större företag',
    detail: `Senaste året: ${a} av 3 gränsvärden överskridna. Föregående året: ${b} av 3. Detta är stöd för K-regelverksvalet.`
  };
}

function calculateK1Eligibility(){
  if(phaseOne.companyType !== 'sole') return {visible:false, status:'na', label:'Inte aktuellt', detail:'K1-stödet gäller här endast enskild näringsverksamhet.'};
  if(!phaseOne.businessStatus) return {visible:true, status:'review', label:'Kan inte bedömas ännu', detail:'Ange verksamhetens status och nettoomsättning för att få K1-stöd.'};

  if(phaseOne.businessStatus === 'new'){
    const turnover = phaseOne.expected.turnover;
    if(!hasRangeValue('turnover', turnover)) return {visible:true, status:'review', label:'Kan inte bedömas ännu', detail:'Ange förväntad nettoomsättning för att få K1-stöd.'};
    const overThree = rangeExceedsThreshold('turnover', turnover, 3000000);
    return overThree
      ? {visible:true, status:'blocked', label:'Inte möjligt utifrån angiven omsättning', detail:'K1 är inte möjligt utifrån angiven förväntad nettoomsättning över 3 mkr.'}
      : {visible:true, status:'possible', label:'Kan vara möjligt', detail:'Den förväntade nettoomsättningen ligger inom K1:s omsättningsgräns på högst 3 mkr. Övriga förutsättningar behöver också vara uppfyllda.'};
  }

  const latest = phaseOne.latest.turnover;
  const previous = phaseOne.previous.turnover;
  if(!hasRangeValue('turnover', latest) || !hasRangeValue('turnover', previous)){
    return {visible:true, status:'review', label:'Kan inte bedömas ännu', detail:'Ange nettoomsättning för båda räkenskapsåren för att få K1-stöd.'};
  }
  const latestOver = rangeExceedsThreshold('turnover', latest, 3000000);
  const previousOver = rangeExceedsThreshold('turnover', previous, 3000000);
  if(!latestOver && !previousOver){
    return {visible:true, status:'possible', label:'Kan vara möjligt', detail:'Nettoomsättningen ligger på högst 3 mkr under båda angivna räkenskapsåren. Övriga förutsättningar behöver också vara uppfyllda.'};
  }
  if(latestOver !== previousOver){
    return {visible:true, status:'review', label:'Kräver bedömning', detail:'Nettoomsättningen överstiger 3 mkr under ett av de två åren. K1 bygger på att nettoomsättningen normalt uppgår till högst 3 mkr. Ett enstaka överskridande behöver därför bedömas.'};
  }
  return {visible:true, status:'review', label:'Sannolikt inte tillämpligt – kontrollera bedömningen', detail:'Nettoomsättningen överstiger 3 mkr under båda angivna räkenskapsåren.'};
}

function getAvailableKRules(){
  const large = calculateLargeCompanyStatus();
  if(phaseOne.companyType === 'ab'){
    return [
      {value:'K1', state:'disabled', disabled:true, note:'Ej tillämpligt för aktiebolag'},
      {value:'K2', state: large.status === 'blocked' ? 'review' : 'possible', note: large.status === 'blocked' ? 'Kräver ytterligare bedömning utifrån företagets storlek och övriga förutsättningar' : 'Kan vara möjligt'},
      {value:'K3', state:'possible', note:'Kan vara möjligt'}
    ];
  }
  if(phaseOne.companyType === 'sole'){
    const k1 = calculateK1Eligibility();
    return [
      {value:'K1', state:k1.status, disabled:k1.status === 'blocked', note:k1.status === 'possible' ? k1.label : `${k1.label}. ${k1.detail}`},
      {value:'K2', state:'review', note:'Kräver bedömning av tillämplighet'},
      {value:'K3', state:'review', note:'Kräver bedömning av tillämplighet'}
    ];
  }
  return [];
}

function getAvailableAccountingMethods(){
  const turnover = phaseOneScope().turnover;
  if(!hasRangeValue('turnover', turnover)) return {status:'review', message:'Ange nettoomsättning för att få stöd om bokföringsmetod.', options:[{value:'cash',label:'Kontantmetoden',disabled:true},{value:'invoice',label:'Faktureringsmetoden',disabled:false}]};
  const cashPossible = rangeExceedsThreshold('turnover', turnover, 3000000) === false;
  return {
    status: cashPossible ? 'possible' : 'blocked',
    message: cashPossible ? 'Kontantmetoden kan vara möjlig' : 'Kontantmetoden är inte möjlig utifrån angiven nettoomsättning',
    options:[{value:'cash',label:'Kontantmetoden',disabled:!cashPossible},{value:'invoice',label:'Faktureringsmetoden',disabled:false}]
  };
}

function getAvailableVatPeriods(){
  if(!phaseOne.services.includes('vat')) return {visible:false, options:[]};
  const turnover = phaseOneScope().turnover;
  if(!hasRangeValue('turnover', turnover)) return {visible:true, status:'review', message:'Ange nettoomsättning för att se möjliga momsperioder.', options:[]};
  const options = [
    {value:'year', label:'År', disabled:rangeExceedsThreshold('turnover', turnover, 1000000) === true},
    {value:'quarter', label:'Kvartal', disabled:rangeExceedsThreshold('turnover', turnover, 40000000) === true},
    {value:'month', label:'Månad', disabled:false}
  ];
  return {visible:true, status:'possible', message:'Välj bland de perioder som är möjliga utifrån angiven omfattning.', options};
}

function calculateSimplifiedAnnualReportEligibility(){
  if(phaseOne.companyType !== 'sole') return {visible:false};
  const k1 = calculateK1Eligibility();
  return {visible:true, status:k1.status, label:k1.label, detail:k1.detail};
}

function phaseOneCountsOf(data){
  const p = ensurePhaseOne(data);
  const company = !!p.companyType;
  const status = !!p.businessStatus;
  const services = p.services.length > 0;
  const scope = p.businessStatus === 'existing'
    ? ['turnover','balance','employees'].every(k => hasRangeValue(k, p.latest[k]) && hasRangeValue(k, p.previous[k]))
    : ['turnover','balance','employees'].some(k => hasRangeValue(k, p.expected[k]));

  // Registreringar räknas som en kompakt del. Moms/arbetsgivare krävs bara när uppdraget gör dem relevanta.
  const registrationChecks = [!!p.fTaxRegistered];
  if(p.services.includes('vat')) registrationChecks.push(!!p.vatRegistered);
  if(p.services.includes('payroll')) registrationChecks.push(!!p.employerRegistered);
  const registrations = registrationChecks.every(Boolean);

  // Dessa två svar styr framför allt vilka arbetsmoment som visas senare i onboardingen.
  const steering = !!p.foreignActivity && (p.businessStatus !== 'existing' || !!p.previousFirm);

  const checks = [company,status,services,scope,registrations,steering];
  return {done:checks.filter(Boolean).length,total:checks.length};
}
function phaseOneCounts(){ return phaseOneCountsOf(phaseOne); }

function statusIcon(status){
  return status === 'possible' ? '🟢' : status === 'blocked' ? '🔴' : status === 'review' ? '🟡' : '⚪';
}

function safe(text){
  return String(text ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
}

function radioCard(name, value, label, checked){
  return `<label class="choice-card"><input type="radio" name="${name}" data-p1="${name}" value="${value}" ${checked ? 'checked' : ''}><span class="choice-dot"></span><span>${label}</span></label>`;
}

function compactYesNo(name, label, value){
  return `<div class="compact-choice-line"><span>${label}</span><div class="choice-row compact">${radioCard(name,'yes','Ja',value==='yes')}${radioCard(name,'no','Nej',value==='no')}</div></div>`;
}

function rangeOptions(type, value){
  const selected = classifyLegacyRangeValue(type, value);
  return `<option value="">Välj intervall</option>` + (PHASE1_RANGES[type] || []).map(range =>
    `<option value="${range.value}" ${selected===range.value?'selected':''}>${safe(range.label)}</option>`
  ).join('');
}

function rangeField(path, label, type, value){
  return `<label class="field"><span>${label}</span><select data-p1-path="${path}">${rangeOptions(type, value)}</select></label>`;
}

function renderRuleCard(title, result, detailsLabel='Visa beräkning'){
  return `<div class="rule-card status-${result.status}">
    <div class="rule-title">${title}</div>
    <div class="rule-result">${statusIcon(result.status)} <strong>${result.label}</strong></div>
    ${result.detail ? `<details><summary>${detailsLabel}</summary><p>${safe(result.detail)}</p></details>` : ''}
  </div>`;
}

function renderPhaseOnePage(){
  const page = document.createElement('div');
  page.className = 'page';
  page.id = 'page-kontakt';
  const audit = calculateAuditRequirement();
  const large = calculateLargeCompanyStatus();
  const kRules = getAvailableKRules();
  const accounting = getAvailableAccountingMethods();
  const vat = getAvailableVatPeriods();
  const simplified = calculateSimplifiedAnnualReportEligibility();
  const counts = phaseOneCounts();
  const pct = Math.round((counts.done / counts.total) * 100);

  const services = [
    ['bookkeeping','Löpande bokföring'],['vat','Moms'],['payroll','Arbetsgivardeklaration/löneadministration'],
    ['annual','Bokslut/årsredovisning'],['tax','Inkomstdeklaration'],['other','Annat']
  ];

  const historical = `<div class="scope-table">
    <div class="scope-head"></div><div class="scope-head">Senaste räkenskapsår</div><div class="scope-head">Föregående räkenskapsår</div>
    <div class="scope-label">Nettoomsättning</div><select data-p1-path="latest.turnover">${rangeOptions('turnover',phaseOne.latest.turnover)}</select><select data-p1-path="previous.turnover">${rangeOptions('turnover',phaseOne.previous.turnover)}</select>
    <div class="scope-label">Balansomslutning</div><select data-p1-path="latest.balance">${rangeOptions('balance',phaseOne.latest.balance)}</select><select data-p1-path="previous.balance">${rangeOptions('balance',phaseOne.previous.balance)}</select>
    <div class="scope-label">Medelantal anställda</div><select data-p1-path="latest.employees">${rangeOptions('employees',phaseOne.latest.employees)}</select><select data-p1-path="previous.employees">${rangeOptions('employees',phaseOne.previous.employees)}</select>
  </div>`;

  const expected = `<div class="field-grid three">
    ${rangeField('expected.turnover','Förväntad nettoomsättning','turnover',phaseOne.expected.turnover)}
    ${rangeField('expected.balance','Förväntad balansomslutning','balance',phaseOne.expected.balance)}
    ${rangeField('expected.employees','Förväntat antal anställda','employees',phaseOne.expected.employees)}
  </div>`;

  const kHtml = kRules.map(r => {
    const disabled = r.disabled === true || r.state === 'disabled';
    return `<label class="rule-option ${disabled ? 'is-disabled' : ''} status-${r.state}">
      <input type="radio" name="kRule" data-p1-choice="kRule" value="${r.value}" ${phaseOne.choices.kRule===r.value?'checked':''} ${disabled?'disabled':''}>
      <span><strong>${r.value}</strong><small>${statusIcon(r.state)} ${safe(r.note)}</small></span>
    </label>`;
  }).join('');

  const accountingOptions = accounting.options.map(o => `<label class="rule-option ${o.disabled?'is-disabled':''}"><input type="radio" name="accountingMethod" data-p1-choice="accountingMethod" value="${o.value}" ${phaseOne.choices.accountingMethod===o.value?'checked':''} ${o.disabled?'disabled':''}><span><strong>${o.label}</strong></span></label>`).join('');
  const vatOptions = vat.options.map(o => `<label class="rule-option ${o.disabled?'is-disabled':''}"><input type="radio" name="vatPeriod" data-p1-choice="vatPeriod" value="${o.value}" ${phaseOne.choices.vatPeriod===o.value?'checked':''} ${o.disabled?'disabled':''}><span><strong>${o.label}</strong></span></label>`).join('');

  const selectedServices = services.filter(([v])=>phaseOne.services.includes(v)).map(([,l])=>l).join(', ') || '–';
  const kAvailable = kRules.filter(r=>r.state!=='disabled' && !r.disabled).map(r=>r.value).join(' / ') || '–';
  const methodAvailable = accounting.options.filter(o=>!o.disabled).map(o=>o.label).join(' / ') || '–';
  const vatAvailable = vat.visible ? (vat.options.filter(o=>!o.disabled).map(o=>o.label).join(' / ') || 'Kan inte bedömas ännu') : 'Inte aktuellt';

  page.innerHTML = `
    <div class="page-eyebrow">Onboarding · Steg 1 av 6</div>
    <h2>Företagsuppgifter och uppdragsprofil</h2>
    <p class="syfte">Ange ett fåtal grunduppgifter. Verktyget återanvänder dem för att filtrera relevanta alternativ och ge regelverksstöd.</p>
    <div class="progress-wrap"><div class="progress-top"><span class="pct-num">${pct}%</span><span class="frac">${counts.done} av ${counts.total} grunddelar ifyllda</span></div><div class="bar-track"><div class="bar-fill" style="width:${pct}%; background:${pctColor(pct)}"></div></div></div>

    <section class="phase-block"><div class="phase-number">01</div><div><h3>Företagsform <span class="required">Obligatoriskt</span></h3><div class="choice-row">${radioCard('companyType','ab','Aktiebolag',phaseOne.companyType==='ab')}${radioCard('companyType','sole','Enskild näringsverksamhet',phaseOne.companyType==='sole')}</div></div></section>

    <section class="phase-block"><div class="phase-number">02</div><div><h3>Verksamhetens status <span class="required">Obligatoriskt</span></h3><div class="choice-row">${radioCard('businessStatus','new','Nystartad verksamhet',phaseOne.businessStatus==='new')}${radioCard('businessStatus','existing','Befintlig verksamhet',phaseOne.businessStatus==='existing')}</div>${phaseOne.businessStatus ? `<div class="info-box">ⓘ ${phaseOne.businessStatus==='existing'?'Hämta uppgifter från befintliga underlag där det är möjligt, exempelvis senaste årsredovisning eller bokslut.':'Historiska uppgifter saknas. Ange förväntad omfattning om uppgifterna behövs för bedömningen.'}</div>`:''}</div></section>

    <section class="phase-block"><div class="phase-number">03</div><div><h3>Vilka tjänster ska byrån utföra? <span class="required">Minst ett val</span></h3><div class="service-grid">${services.map(([v,l])=>`<label class="service-option"><input type="checkbox" data-p1-service="${v}" ${phaseOne.services.includes(v)?'checked':''}><span class="native-box"></span><span>${l}</span></label>`).join('')}</div>${phaseOne.services.includes('other')?`<label class="field other-field"><span>Beskriv annan tjänst</span><input type="text" data-p1-other value="${safe(phaseOne.otherService)}" placeholder="Annan tjänst"></label>`:''}</div></section>

    <section class="phase-block"><div class="phase-number">04</div><div><h3>Registreringar och styrande uppgifter</h3><p class="block-help">Några få svar används för att dölja sådant som inte är relevant i senare faser.</p>
      <div class="compact-choice-stack">
        ${compactYesNo('fTaxRegistered','F-skatt registrerad?',phaseOne.fTaxRegistered)}
        ${phaseOne.services.includes('vat') ? compactYesNo('vatRegistered','Momsregistrerad?',phaseOne.vatRegistered) : ''}
        ${phaseOne.services.includes('payroll') ? compactYesNo('employerRegistered','Arbetsgivarregistrerad?',phaseOne.employerRegistered) : ''}
        ${phaseOne.businessStatus==='existing' ? compactYesNo('previousFirm','Tidigare redovisningsbyrå?',phaseOne.previousFirm) : ''}
        ${compactYesNo('foreignActivity','Utlandsverksamhet, import eller export?',phaseOne.foreignActivity)}
      </div>
    </div></section>

    <section class="phase-block"><div class="phase-number">05</div><div><h3>Verksamhetens omfattning</h3><p class="block-help">Ange uppgifterna från befintliga underlag där det är möjligt. Uppgifterna används för att bedöma vilka regler och alternativ som kan vara aktuella för kunden.</p>${phaseOne.businessStatus==='existing'?historical:phaseOne.businessStatus==='new'?`${expected}<div class="info-box">ⓘ Ange uppskattad omfattning om den är känd. Uppgifterna används endast som underlag för regelverksstöd och kan behöva uppdateras när faktisk omfattning är känd.</div>`:`<div class="empty-state">Välj först om verksamheten är nystartad eller befintlig.</div>`}</div></section>

    <section class="phase-block rules"><div class="phase-number">06</div><div><h3>Regelverksstöd</h3><p class="block-help">Detta är automatiskt stöd utifrån uppgifterna ovan. Gör bara ett aktivt val där flera alternativ är möjliga.</p>
      ${phaseOne.companyType==='ab'?renderRuleCard('Revisionsplikt',audit):''}
      ${phaseOne.companyType==='ab'?renderRuleCard('Större företag',large):''}
      ${phaseOne.companyType?`<div class="rule-card"><div class="rule-title">K-regelverk</div><div class="rule-options">${kHtml}</div></div>`:''}
      ${phaseOne.businessStatus?`<div class="rule-card status-${accounting.status}"><div class="rule-title">Bokföringsmetod</div><div class="rule-result">${statusIcon(accounting.status)} <strong>${accounting.message}</strong></div><div class="rule-options">${accountingOptions}</div><p class="micro-help">Kontantmetoden kan vara möjlig vid nettoomsättning på högst 3 mkr, under förutsättning att övriga krav är uppfyllda.</p></div>`:''}
      ${vat.visible?`<div class="rule-card status-${vat.status}"><div class="rule-title">Momsperiod</div><div class="rule-result">${statusIcon(vat.status)} <strong>${vat.message}</strong></div>${vatOptions?`<div class="rule-options">${vatOptions}</div>`:''}</div>`:''}
      ${simplified.visible?renderRuleCard('Förenklat årsbokslut',simplified,'Varför krävs bedömning?'):''}
    </div></section>

    <section class="phase-summary"><div class="page-eyebrow">Fas 1 · Sammanfattning</div><h3>Sammanfattning</h3>
      <div class="summary-grid"><span>Företagsform</span><strong>${phaseOne.companyType==='ab'?'Aktiebolag':phaseOne.companyType==='sole'?'Enskild näringsverksamhet':'–'}</strong><span>Verksamhet</span><strong>${phaseOne.businessStatus==='existing'?'Befintlig':phaseOne.businessStatus==='new'?'Nystartad':'–'}</strong><span>Byråns uppdrag</span><strong>${safe(selectedServices)}</strong></div>
      <h4>Regelverksstöd</h4><div class="summary-grid"><span>Revisionsplikt</span><strong>${phaseOne.companyType==='ab'?statusIcon(audit.status)+' '+safe(audit.label):'Inte aktuellt'}</strong><span>Större företag</span><strong>${phaseOne.companyType==='ab'?statusIcon(large.status)+' '+safe(large.label):'Inte aktuellt'}</strong><span>K-regelverk</span><strong>${safe(kAvailable)}</strong><span>Bokföringsmetod</span><strong>${safe(methodAvailable)}</strong><span>Momsperiod</span><strong>${safe(vatAvailable)}</strong></div>
      <h4>Mina val</h4><div class="final-choices"><span>K-regelverk: <strong>${safe(phaseOne.choices.kRule||'Inte valt')}</strong></span><span>Bokföringsmetod: <strong>${phaseOne.choices.accountingMethod==='cash'?'Kontantmetoden':phaseOne.choices.accountingMethod==='invoice'?'Faktureringsmetoden':'Inte valt'}</strong></span>${vat.visible?`<span>Momsperiod: <strong>${phaseOne.choices.vatPeriod==='year'?'År':phaseOne.choices.vatPeriod==='quarter'?'Kvartal':phaseOne.choices.vatPeriod==='month'?'Månad':'Inte valt'}</strong></span>`:''}</div>
    </section>`;
  return page;
}

function setNestedPhaseOne(path, value){
  const parts = path.split('.');
  let target = phaseOne;
  for(let i=0;i<parts.length-1;i++) target = target[parts[i]];
  target[parts[parts.length-1]] = value;
}

function bindPhaseOneEvents(){
  const page = document.getElementById('page-kontakt');
  if(!page) return;
  page.querySelectorAll('[data-p1]').forEach(el=>el.addEventListener('change', ()=>{
    phaseOne[el.dataset.p1] = el.value;
    // Byte av företagsform/status kan göra tidigare slutval ogiltiga; de behålls bara om de fortfarande är valbara.
    savePhaseOne(); renderMain(); renderSidebar();
  }));
  page.querySelectorAll('[data-p1-service]').forEach(el=>el.addEventListener('change', ()=>{
    const v = el.dataset.p1Service;
    phaseOne.services = el.checked ? [...new Set([...phaseOne.services,v])] : phaseOne.services.filter(x=>x!==v);
    if(v==='vat' && !el.checked) phaseOne.choices.vatPeriod = '';
    savePhaseOne(); renderMain(); renderSidebar();
  }));
  page.querySelectorAll('[data-p1-path]').forEach(el=>el.addEventListener('change', ()=>{
    setNestedPhaseOne(el.dataset.p1Path, el.value);
    savePhaseOne(); renderMain(); renderSidebar();
  }));
  page.querySelectorAll('[data-p1-choice]').forEach(el=>el.addEventListener('change', ()=>{
    phaseOne.choices[el.dataset.p1Choice] = el.value;
    savePhaseOne(); renderMain(); renderSidebar();
  }));
  const other = page.querySelector('[data-p1-other]');
  if(other) other.addEventListener('input', ()=>{ phaseOne.otherService = other.value; savePhaseOne(); });
}

/* ============ FAS 2: KUNDKÄNNEDOM OCH RISKBEDÖMNING ============
   Fas 2 använder en kompakt, villkorsstyrd datamodell. Grundkontrollerna
   visas alltid medan följdfrågor bara visas när ett svar gör dem relevanta.
   Övriga faser fortsätter använda den befintliga checklistmodellen. */
const PHASE2_KEY_PREFIX = "onboarding-phase2-v1-";
const phaseTwoKeyFor = (customerId) => PHASE2_KEY_PREFIX + customerId;

function blankPhaseTwo(){
  return {
    identityVerified: false,
    identitySource: "",
    identityDate: "",
    representativeStatus: "",      // "no" | "yes"
    representativeChecked: false,

    beneficialOwnerInvestigated: false,
    beneficialOwnerStatus: "",      // "identified" | "none" | "unknown"
    beneficialOwnerName: "",
    noBeneficialOwnerReason: "",
    alternativeBeneficialOwner: "",
    complexOwnership: "",            // "no" | "yes"

    businessUnderstood: false,
    businessDescription: "",
    revenueModel: "",
    expectedTransactions: "",

    pepCheckCompleted: false,
    pepResult: "",                   // "none" | "hit"
    sanctionsCheckCompleted: false,
    sanctionsResult: "",             // "none" | "hit"
    geographicRisk: "",              // "no" | "yes" | "unsure"

    riskLevel: "",                   // "low" | "normal" | "high"
    riskReason: "",

    enhancedMeasures: {
      additionalInformation: false,
      risksInvestigated: false,
      sourceOfFunds: false,
      approval: false,
      enhancedMonitoring: false
    },

    kycSufficient: "",               // "yes" | "no" | "review"
    remainingInvestigation: "",
    acceptanceDecision: ""           // "accept" | "decline" | "pending"
  };
}

function ensurePhaseTwo(data){
  const base = blankPhaseTwo();
  const d = data && typeof data === 'object' ? data : {};
  return {
    ...base,
    ...d,
    enhancedMeasures: {...base.enhancedMeasures, ...(d.enhancedMeasures || {})}
  };
}

function loadPhaseTwoFor(customerId){
  try{
    const raw = localStorage.getItem(phaseTwoKeyFor(customerId));
    return ensurePhaseTwo(raw ? JSON.parse(raw) : null);
  }catch(e){
    return blankPhaseTwo();
  }
}

function savePhaseTwo(){
  if(!activeCustomerId) return;
  try{
    localStorage.setItem(phaseTwoKeyFor(activeCustomerId), JSON.stringify(phaseTwo));
    setSaveStatus("Sparat automatiskt");
  }catch(e){
    setSaveStatus("Kunde inte spara just nu");
  }
}

/* Riskindikatorerna är stöd för konsulten. De sätter aldrig risknivån automatiskt. */
function getKycRiskIndicators(data = phaseTwo){
  const p = ensurePhaseTwo(data);
  const indicators = [];
  if(p.complexOwnership === 'yes') indicators.push('Komplex ägarstruktur');
  if(p.beneficialOwnerStatus === 'unknown') indicators.push('Verklig huvudman kan inte fastställas');
  if(p.pepResult === 'hit') indicators.push('PEP/RCA-träff eller möjlig träff');
  if(p.sanctionsResult === 'hit') indicators.push('Sanktionsindikator');
  if(p.geographicRisk === 'yes') indicators.push('Geografisk risk');
  if(p.geographicRisk === 'unsure') indicators.push('Geografisk risk behöver bedömas');
  return indicators;
}

function isEnhancedDueDiligenceRequired(data = phaseTwo){
  const p = ensurePhaseTwo(data);
  return p.riskLevel === 'high' || p.pepResult === 'hit';
}

function canAcceptCustomer(data = phaseTwo){
  const p = ensurePhaseTwo(data);
  if(p.kycSufficient !== 'yes') return {allowed:false, reason:'Kundkännedomen måste vara tillräcklig innan kunden kan accepteras.'};
  if(p.sanctionsResult === 'hit') return {allowed:false, reason:'Sanktionskontrollen kräver manuell bedömning innan kunden kan accepteras.'};
  return {allowed:true, reason:''};
}

/* Progressen bygger bara på de viktigaste besluten. Detaljfälten skapar inte extra administration. */
function phaseTwoCountsOf(data){
  const p = ensurePhaseTwo(data);
  const identity = p.identityVerified && !!p.representativeStatus && (p.representativeStatus === 'no' || p.representativeChecked);
  const beneficialOwner = p.beneficialOwnerInvestigated && !!p.beneficialOwnerStatus && !!p.complexOwnership;
  const business = p.businessUnderstood;
  const controls = p.pepCheckCompleted && !!p.pepResult && p.sanctionsCheckCompleted && !!p.sanctionsResult && !!p.geographicRisk;
  const risk = !!p.riskLevel && !!p.riskReason.trim();
  const acceptance = !!p.kycSufficient && !!p.acceptanceDecision && (p.acceptanceDecision !== 'accept' || canAcceptCustomer(p).allowed);
  const checks = [identity, beneficialOwner, business, controls, risk, acceptance];
  return {done:checks.filter(Boolean).length, total:checks.length};
}
function phaseTwoCounts(){ return phaseTwoCountsOf(phaseTwo); }

function kycRadio(name, value, label, current, disabled=false){
  return `<label class="choice-card ${disabled ? 'is-disabled' : ''}">
    <input type="radio" name="p2-${name}" data-p2-field="${name}" value="${value}" ${current===value?'checked':''} ${disabled?'disabled':''}>
    <span class="choice-dot"></span><span>${label}</span>
  </label>`;
}

function kycCheck(field, label, checked){
  return `<label class="service-option kyc-check">
    <input type="checkbox" data-p2-check="${field}" ${checked?'checked':''}>
    <span class="native-box"></span><span>${label}</span>
  </label>`;
}

function kycEnhancedCheck(field, label){
  return `<label class="service-option kyc-check">
    <input type="checkbox" data-p2-enhanced="${field}" ${phaseTwo.enhancedMeasures[field]?'checked':''}>
    <span class="native-box"></span><span>${label}</span>
  </label>`;
}

function kycTextField(field, label, value, placeholder=''){
  return `<label class="field"><span>${label}</span><input type="text" data-p2-text="${field}" value="${safe(value)}" placeholder="${safe(placeholder)}"></label>`;
}

function phaseOneContextForKyc(){
  const services = [
    ['bookkeeping','Löpande bokföring'],['vat','Moms'],['payroll','Lön/AGI'],
    ['annual','Bokslut/årsredovisning'],['tax','Inkomstdeklaration'],['other','Annat']
  ];
  const type = phaseOne.companyType === 'ab' ? 'Aktiebolag' : phaseOne.companyType === 'sole' ? 'Enskild näringsverksamhet' : 'Inte angivet';
  const selectedServices = services.filter(([v])=>phaseOne.services.includes(v)).map(([,l])=>l).join(', ') || 'Inte angivet';
  const scope = phaseOneScope();
  const turnover = getRangeLabel('turnover', scope.turnover);
  return {type, selectedServices, turnover: turnover || 'Inte angivet'};
}

function renderPhaseTwoPage(){
  const page = document.createElement('div');
  page.className = 'page';
  page.id = 'page-kundkannedom';

  const counts = phaseTwoCounts();
  const pct = Math.round((counts.done / counts.total) * 100);
  const indicators = getKycRiskIndicators();
  const enhancedRequired = isEnhancedDueDiligenceRequired();
  const acceptance = canAcceptCustomer();
  const p1 = phaseOneContextForKyc();

  const beneficialOwnerExtra = phaseTwo.beneficialOwnerStatus === 'identified'
    ? `<div class="conditional-block">${kycTextField('beneficialOwnerName','Namn på verklig huvudman',phaseTwo.beneficialOwnerName,'Namn')}</div>`
    : phaseTwo.beneficialOwnerStatus === 'none'
      ? `<div class="conditional-block">${kycTextField('noBeneficialOwnerReason','Kort motivering',phaseTwo.noBeneficialOwnerReason,'Varför bedöms ingen verklig huvudman finnas?')}</div>`
      : phaseTwo.beneficialOwnerStatus === 'unknown'
        ? `<div class="conditional-block"><div class="alert-box warning">🟡 <strong>Ytterligare utredning krävs</strong></div>${kycTextField('alternativeBeneficialOwner','Alternativ verklig huvudman',phaseTwo.alternativeBeneficialOwner,'Namn')}</div>`
        : '';

  const pepFollowup = phaseTwo.pepResult === 'hit'
    ? `<div class="alert-box warning">🟡 <strong>Skärpta åtgärder krävs.</strong> Följdåtgärder visas längre ned.</div>`
    : '';
  const sanctionsFollowup = phaseTwo.sanctionsResult === 'hit'
    ? `<div class="alert-box danger">🔴 <strong>Kräver manuell bedömning innan kundaccept.</strong></div>`
    : '';

  const riskHtml = indicators.length
    ? indicators.map(x=>`<div class="risk-indicator">🟡 ${safe(x)}</div>`).join('')
    : `<div class="risk-clear">🟢 Inga särskilda riskindikatorer identifierade</div>`;

  const acceptanceWarning = !acceptance.allowed && phaseTwo.acceptanceDecision === 'accept'
    ? `<div class="alert-box danger">🔴 <strong>${safe(acceptance.reason)}</strong></div>`
    : (!acceptance.allowed && phaseTwo.kycSufficient
      ? `<div class="alert-box warning">🟡 ${safe(acceptance.reason)}</div>` : '');

  const enhancedHtml = enhancedRequired ? `
    <section class="phase-block kyc-conditional-section"><div class="phase-number">06</div><div>
      <h3>Skärpta åtgärder</h3>
      <p class="block-help">Visa endast det som behöver göras i det här ärendet. Bocka de åtgärder som faktiskt är relevanta.</p>
      <div class="service-grid single">
        ${kycEnhancedCheck('additionalInformation','Ytterligare information har inhämtats')}
        ${kycEnhancedCheck('risksInvestigated','Identifierade risker har utretts')}
        ${kycEnhancedCheck('sourceOfFunds','Medlens/tillgångarnas ursprung har utretts när relevant')}
        ${kycEnhancedCheck('approval','Nödvändigt godkännande har inhämtats')}
        ${kycEnhancedCheck('enhancedMonitoring','Förstärkt uppföljning har planerats när relevant')}
      </div>
    </div></section>` : '';

  page.innerHTML = `
    <div class="page-eyebrow">Onboarding · Steg 2 av 6</div>
    <h2>Kundkännedom</h2>
    <p class="syfte">Bekräfta grundkontrollerna. Verktyget visar följdfrågor och riskstöd bara när något behöver utredas vidare.</p>
    <div class="progress-wrap"><div class="progress-top"><span class="pct-num">${pct}%</span><span class="frac">${counts.done} av ${counts.total} huvuddelar klara</span></div><div class="bar-track"><div class="bar-fill" style="width:${pct}%; background:${pctColor(pct)}"></div></div></div>

    <section class="phase-block"><div class="phase-number">01</div><div>
      <h3>Identitet och behörighet</h3>
      ${kycCheck('identityVerified','Kund och företrädare identifierade och verifierade',phaseTwo.identityVerified)}
      <details class="compact-details"><summary>Visa dokumentation</summary><div class="field-grid two">${kycTextField('identitySource','Källa',phaseTwo.identitySource,'T.ex. registreringsbevis')}${kycTextField('identityDate','Kontrolldatum',phaseTwo.identityDate,'ÅÅÅÅ-MM-DD')}</div></details>
      <div class="mini-question"><strong>Finns ombud/fullmakt?</strong><div class="choice-row compact">${kycRadio('representativeStatus','no','Nej',phaseTwo.representativeStatus)}${kycRadio('representativeStatus','yes','Ja',phaseTwo.representativeStatus)}</div></div>
      ${phaseTwo.representativeStatus==='yes'?`<div class="conditional-block">${kycCheck('representativeChecked','Ombud och behörighet kontrollerade',phaseTwo.representativeChecked)}</div>`:''}
    </div></section>

    <section class="phase-block"><div class="phase-number">02</div><div>
      <h3>Verklig huvudman</h3>
      ${kycCheck('beneficialOwnerInvestigated','Verklig huvudman och ägar-/kontrollstruktur utredd',phaseTwo.beneficialOwnerInvestigated)}
      <div class="mini-question"><strong>Status</strong><div class="choice-row">${kycRadio('beneficialOwnerStatus','identified','Identifierad',phaseTwo.beneficialOwnerStatus)}${kycRadio('beneficialOwnerStatus','none','Ingen finns',phaseTwo.beneficialOwnerStatus)}${kycRadio('beneficialOwnerStatus','unknown','Går inte att fastställa',phaseTwo.beneficialOwnerStatus)}</div></div>
      ${beneficialOwnerExtra}
      <div class="mini-question"><strong>Komplex eller svåröverskådlig ägarstruktur?</strong><div class="choice-row compact">${kycRadio('complexOwnership','no','Nej',phaseTwo.complexOwnership)}${kycRadio('complexOwnership','yes','Ja',phaseTwo.complexOwnership)}</div></div>
      ${phaseTwo.complexOwnership==='yes'?`<div class="alert-box warning">🟡 Komplex ägarstruktur läggs automatiskt till som riskindikator.</div>`:''}
    </div></section>

    <section class="phase-block"><div class="phase-number">03</div><div>
      <h3>Verksamhet och affärsförbindelse</h3>
      ${kycCheck('businessUnderstood','Verksamheten och affärsförbindelsen är tillräckligt förstådda',phaseTwo.businessUnderstood)}
      <div class="phase1-context"><span><small>Företagsform · från Fas 1</small><strong>${safe(p1.type)}</strong></span><span><small>Byråns uppdrag · från Fas 1</small><strong>${safe(p1.selectedServices)}</strong></span><span><small>Omsättning · från Fas 1</small><strong>${safe(p1.turnover)}</strong></span></div>
      <div class="field-grid three kyc-fields">${kycTextField('businessDescription','Verksamhet',phaseTwo.businessDescription,'Kort beskrivning')}${kycTextField('revenueModel','Huvudsakliga intäkter',phaseTwo.revenueModel,'Hur får företaget sina intäkter?')}${kycTextField('expectedTransactions','Normala transaktioner',phaseTwo.expectedTransactions,'Kort beskrivning')}</div>
    </div></section>

    <section class="phase-block"><div class="phase-number">04</div><div>
      <h3>PEP, sanktioner och geografi</h3>
      <div class="kyc-control-row"><div>${kycCheck('pepCheckCompleted','PEP/RCA-kontroll genomförd',phaseTwo.pepCheckCompleted)}</div><div class="choice-row compact">${kycRadio('pepResult','none','Ingen träff',phaseTwo.pepResult)}${kycRadio('pepResult','hit','Träff/möjlig träff',phaseTwo.pepResult)}</div></div>
      ${pepFollowup}
      <div class="kyc-control-row"><div>${kycCheck('sanctionsCheckCompleted','Sanktionskontroll genomförd',phaseTwo.sanctionsCheckCompleted)}</div><div class="choice-row compact">${kycRadio('sanctionsResult','none','Ingen träff',phaseTwo.sanctionsResult)}${kycRadio('sanctionsResult','hit','Möjlig/bekräftad träff',phaseTwo.sanctionsResult)}</div></div>
      ${sanctionsFollowup}
      <div class="mini-question"><strong>Finns relevant koppling till högriskland eller annan tydlig geografisk risk?</strong><div class="choice-row">${kycRadio('geographicRisk','no','Nej',phaseTwo.geographicRisk)}${kycRadio('geographicRisk','yes','Ja',phaseTwo.geographicRisk)}${kycRadio('geographicRisk','unsure','Osäkert',phaseTwo.geographicRisk)}</div></div>
    </div></section>

    <section class="phase-block"><div class="phase-number">05</div><div>
      <h3>Riskbedömning</h3>
      <p class="block-help">Riskindikatorerna är stöd. Du gör alltid den slutliga riskbedömningen.</p>
      <div class="risk-list">${riskHtml}</div>
      <div class="mini-question"><strong>Risknivå</strong><div class="choice-row">${kycRadio('riskLevel','low','Låg',phaseTwo.riskLevel)}${kycRadio('riskLevel','normal','Normal',phaseTwo.riskLevel)}${kycRadio('riskLevel','high','Förhöjd',phaseTwo.riskLevel)}</div></div>
      <div class="kyc-single-field">${kycTextField('riskReason','Kort motivering',phaseTwo.riskReason,'Motivera bedömningen kort')}</div>
    </div></section>

    ${enhancedHtml}

    <section class="phase-block"><div class="phase-number">07</div><div>
      <h3>Kundkännedom och kundaccept</h3>
      <div class="mini-question"><strong>Är kundkännedomen tillräcklig?</strong><div class="choice-row">${kycRadio('kycSufficient','yes','Ja',phaseTwo.kycSufficient)}${kycRadio('kycSufficient','no','Nej',phaseTwo.kycSufficient)}${kycRadio('kycSufficient','review','Ytterligare utredning krävs',phaseTwo.kycSufficient)}</div></div>
      ${phaseTwo.kycSufficient==='review'?`<div class="conditional-block">${kycTextField('remainingInvestigation','Vad återstår?',phaseTwo.remainingInvestigation,'Kort beskrivning')}</div>`:''}
      ${phaseTwo.kycSufficient==='no'?`<div class="alert-box danger">🔴 Kunden kan inte markeras som accepterad innan kundkännedomen är tillräcklig.</div>`:''}
      <div class="mini-question"><strong>Kundaccept</strong><div class="choice-row">${kycRadio('acceptanceDecision','accept','Kunden accepteras',phaseTwo.acceptanceDecision,!acceptance.allowed)}${kycRadio('acceptanceDecision','decline','Kunden accepteras inte',phaseTwo.acceptanceDecision)}${kycRadio('acceptanceDecision','pending','Beslut avvaktar',phaseTwo.acceptanceDecision)}</div></div>
      ${acceptanceWarning}
      ${enhancedRequired && !Object.values(phaseTwo.enhancedMeasures).every(Boolean)?`<div class="alert-box warning">🟡 Skärpta åtgärder är aktuella. Kontrollera att relevanta åtgärder ovan är genomförda innan slutligt beslut.</div>`:''}
    </div></section>

    <section class="phase-summary"><div class="page-eyebrow">Fas 2 · Sammanfattning</div><h3>Sammanfattning</h3>
      <div class="summary-grid">
        <span>Identitet</span><strong>${phaseTwo.identityVerified?'🟢 Verifierad':'⚪ Inte klar'}</strong>
        <span>Verklig huvudman</span><strong>${phaseTwo.beneficialOwnerStatus==='identified'?'🟢 Identifierad':phaseTwo.beneficialOwnerStatus==='none'?'🟢 Ingen identifierad':phaseTwo.beneficialOwnerStatus==='unknown'?'🟡 Ytterligare utredning':'⚪ Inte bedömd'}</strong>
        <span>PEP</span><strong>${phaseTwo.pepResult==='none'?'🟢 Ingen träff':phaseTwo.pepResult==='hit'?'🟡 Träff/möjlig träff':'⚪ Inte klart'}</strong>
        <span>Sanktioner</span><strong>${phaseTwo.sanctionsResult==='none'?'🟢 Ingen träff':phaseTwo.sanctionsResult==='hit'?'🔴 Kräver bedömning':'⚪ Inte klart'}</strong>
        <span>Risknivå</span><strong>${phaseTwo.riskLevel==='low'?'Låg':phaseTwo.riskLevel==='normal'?'Normal':phaseTwo.riskLevel==='high'?'Förhöjd':'–'}</strong>
        <span>Kundkännedom</span><strong>${phaseTwo.kycSufficient==='yes'?'🟢 Tillräcklig':phaseTwo.kycSufficient==='no'?'🔴 Otillräcklig':phaseTwo.kycSufficient==='review'?'🟡 Ytterligare utredning':'–'}</strong>
        <span>Kundaccept</span><strong>${phaseTwo.acceptanceDecision==='accept' && acceptance.allowed?'Accepterad':phaseTwo.acceptanceDecision==='decline'?'Accepteras inte':phaseTwo.acceptanceDecision==='pending'?'Avvaktar':'–'}</strong>
      </div>
    </section>`;

  return page;
}

function bindPhaseTwoEvents(){
  const page = document.getElementById('page-kundkannedom');
  if(!page) return;

  page.querySelectorAll('[data-p2-check]').forEach(el=>el.addEventListener('change', ()=>{
    phaseTwo[el.dataset.p2Check] = el.checked;
    savePhaseTwo(); renderMain(); renderSidebar();
  }));

  page.querySelectorAll('[data-p2-field]').forEach(el=>el.addEventListener('change', ()=>{
    phaseTwo[el.dataset.p2Field] = el.value;
    // Om ett tidigare val gör kundaccept ogiltig tas det gamla acceptbeslutet bort.
    if(phaseTwo.acceptanceDecision === 'accept' && !canAcceptCustomer().allowed) phaseTwo.acceptanceDecision = '';
    savePhaseTwo(); renderMain(); renderSidebar();
  }));

  page.querySelectorAll('[data-p2-text]').forEach(el=>{
    el.addEventListener('input', ()=>{
      phaseTwo[el.dataset.p2Text] = el.value;
      savePhaseTwo();
    });
    // Uppdatera progress/sammanfattning när användaren lämnar fältet, utan att störa skrivandet.
    el.addEventListener('change', ()=>{ renderMain(); renderSidebar(); });
  });

  page.querySelectorAll('[data-p2-enhanced]').forEach(el=>el.addEventListener('change', ()=>{
    phaseTwo.enhancedMeasures[el.dataset.p2Enhanced] = el.checked;
    savePhaseTwo(); renderMain(); renderSidebar();
  }));
}


/* ============ APP STATE ============ */
let customers = [];          // [{id, name, createdAt, lastTab}]
let activeCustomerId = null; // id of the currently open customer, or null
let state = {};              // checklist state för de handlingsorienterade faserna 3–6
let phaseOne = blankPhaseOne(); // strukturerad data för Fas 1
let phaseTwo = blankPhaseTwo(); // strukturerad, villkorsstyrd data för Fas 2
let view = 'customers';      // 'customers' | 'checklist'
let activeId = SECTIONS[0].id;

function flatCount(section){
  return section.groups.reduce((n,g)=>n+g.items.length,0);
}

/* Fas 3–6 har fasta huvudpunkter, men vissa ska bara räknas och visas när
   Fas 1 gör dem relevanta. Indexen ligger ändå kvar så sparad checklistdata
   inte flyttar på sig när ett villkor ändras. */
function isChecklistItemVisible(item, p1=phaseOne){
  if(!item || typeof item === 'string' || !item.visibleWhen) return true;
  switch(item.visibleWhen){
    case 'existing': return p1.businessStatus === 'existing';
    case 'previousFirm': return p1.businessStatus === 'existing' && p1.previousFirm === 'yes';
    case 'vat': return p1.services.includes('vat');
    case 'payroll': return p1.services.includes('payroll');
    case 'bookkeeping': return p1.services.includes('bookkeeping');
    case 'foreign': return p1.foreignActivity === 'yes';
    default: return true;
  }
}
function checklistItemText(item){ return typeof item === 'string' ? item : item.text; }
function visibleFlatIndices(section, p1=phaseOne){
  const indices = [];
  let flatIdx = 0;
  section.groups.forEach(g=>g.items.forEach(item=>{
    if(isChecklistItemVisible(item, p1)) indices.push(flatIdx);
    flatIdx++;
  }));
  return indices;
}
function blankState(){
  const s = {};
  SECTIONS.forEach(sec=>{ s[sec.id] = Array.from({length:flatCount(sec)}, ()=>false); });
  return s;
}
function ensureState(s){
  s = s && typeof s === 'object' ? s : {};
  SECTIONS.forEach(sec=>{
    const n = flatCount(sec);
    if(!Array.isArray(s[sec.id]) || s[sec.id].length!==n){
      const prev = Array.isArray(s[sec.id]) ? s[sec.id] : [];
      s[sec.id] = Array.from({length:n}, (_,i)=> !!prev[i]);
    }
  });
  return s;
}

function sectionPctOf(s, section, p1=phaseOne){
  const arr = (s && s[section.id]) || [];
  const visible = visibleFlatIndices(section, p1);
  if(visible.length===0) return 100;
  const done = visible.filter(i=>!!arr[i]).length;
  return Math.round((done/visible.length)*100);
}
function sectionCountsOf(s, section, p1=phaseOne){
  const arr = (s && s[section.id]) || [];
  const visible = visibleFlatIndices(section, p1);
  const done = visible.filter(i=>!!arr[i]).length;
  return {done, total:visible.length};
}
function overallPctOf(s){
  let done=0, total=0;
  SECTIONS.forEach(sec=>{
    const c = sectionCountsOf(s, sec);
    done+=c.done; total+=c.total;
  });
  return total===0?0:Math.round((done/total)*100);
}
function sectionPct(section){
  if(section.id === 'kontakt'){ const c = phaseOneCounts(); return Math.round((c.done/c.total)*100); }
  if(section.id === 'kundkannedom'){ const c = phaseTwoCounts(); return Math.round((c.done/c.total)*100); }
  return sectionPctOf(state, section);
}
function sectionCounts(section){
  if(section.id === 'kontakt') return phaseOneCounts();
  if(section.id === 'kundkannedom') return phaseTwoCounts();
  return sectionCountsOf(state, section);
}
function overallPct(){
  let done=0,total=0;
  SECTIONS.forEach(sec=>{ const c=sectionCounts(sec); done+=c.done; total+=c.total; });
  return total===0?0:Math.round((done/total)*100);
}

function pctColor(pct){
  const r1=166,g1=59,b1=50; // red
  const r2=63,g2=122,b2=87; // green
  const t = Math.max(0, Math.min(100,pct))/100;
  const r = Math.round(r1+(r2-r1)*t);
  const g = Math.round(g1+(g2-g1)*t);
  const b = Math.round(b1+(b2-b1)*t);
  return `rgb(${r},${g},${b})`;
}

/* ============ PERSISTENCE (localStorage — this file runs standalone in the browser) ============ */
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
  }catch(e){ /* keep blank */ }
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
  const customerState = loadStateFor(customerId);
  const customerPhaseOne = loadPhaseOneFor(customerId);
  const customerPhaseTwo = loadPhaseTwoFor(customerId);
  let done=0,total=0;
  SECTIONS.forEach(sec=>{
    const c = sec.id === 'kontakt' ? phaseOneCountsOf(customerPhaseOne) : sec.id === 'kundkannedom' ? phaseTwoCountsOf(customerPhaseTwo) : sectionCountsOf(customerState, sec, customerPhaseOne);
    done += c.done; total += c.total;
  });
  return total===0 ? 0 : Math.round((done/total)*100);
}

/* ============ CUSTOMER ACTIONS ============ */
function makeId(){
  return 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2,7);
}
function addCustomer(name){
  const trimmed = name.trim();
  if(!trimmed) return false;

  // Namnet normaliseras bara för jämförelsen. Sparat kundnamn behåller användarens skrivsätt efter trimning.
  const normalized = trimmed.replace(/\s+/g, ' ').toLocaleLowerCase('sv-SE');
  const duplicate = customers.some(c => String(c.name ?? '').trim().replace(/\s+/g, ' ').toLocaleLowerCase('sv-SE') === normalized);
  if(duplicate){
    const warning = document.getElementById('duplicate-client-warning');
    if(warning) warning.hidden = false;
    return false;
  }

  const customer = { id: makeId(), name: trimmed, createdAt: new Date().toISOString(), lastTab: SECTIONS[0].id };
  customers.push(customer);
  saveCustomers();
  openCustomer(customer.id);
  return true;
}

function validTabId(id){
  return id === 'summary' || SECTIONS.some(s=>s.id===id) ? id : SECTIONS[0].id;
}
function openCustomer(id){
  const c = customers.find(x=>x.id===id);
  if(!c) return;
  activeCustomerId = id;
  try{ localStorage.setItem(ACTIVE_CUSTOMER_KEY, id); }catch(e){}
  state = loadStateFor(id);
  phaseOne = loadPhaseOneFor(id);
  phaseTwo = loadPhaseTwoFor(id);
  view = 'checklist';
  activeId = validTabId(c.lastTab || SECTIONS[0].id);
  fullRender();
}
function deleteCustomer(id){
  const c = customers.find(x=>x.id===id);
  if(!c) return;
  if(!confirm(`Ta bort kundprofilen "${c.name}" och all dess checklistdata? Detta går inte att ångra.`)) return;
  customers = customers.filter(x=>x.id!==id);
  try{ localStorage.removeItem(stateKeyFor(id)); localStorage.removeItem(phaseOneKeyFor(id)); localStorage.removeItem(phaseTwoKeyFor(id)); }catch(e){}
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
const clientSwitchBtn = document.getElementById('client-switch-btn');
const clientNameLabel = document.getElementById('client-name-label');
const clientCapLabel = document.getElementById('client-cap-label');
const clientActionLabel = document.getElementById('client-action-label');
const clientProgress = document.getElementById('client-progress');
const clientProgressMeta = document.getElementById('client-progress-meta');
const clientProgressFill = document.getElementById('client-progress-fill');
const checkSvg = `<svg viewBox="0 0 24 24" fill="none"><path d="M4 12.5L9.5 18L20 6" stroke="#F1ECDD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/* Kundblocket återanvänder befintlig fas- och progressionslogik. */
function renderClientButton(){
  const activeCustomer = customers.find(c=>c.id===activeCustomerId);
  if(activeCustomer){
    const progress = overallPct();
    const phaseIndex = SECTIONS.findIndex(s=>s.id===activeId);

    clientBtn.classList.remove('no-client');
    clientBtn.setAttribute('aria-label', `Öppna ${activeCustomer.name}`);
    clientSwitchBtn.setAttribute('aria-label', 'Byt kund');
    clientCapLabel.textContent = 'Aktiv kund';
    clientNameLabel.textContent = activeCustomer.name;
    clientActionLabel.textContent = 'Byt ›';
    clientProgress.hidden = false;
    clientProgressMeta.textContent = view !== 'checklist' || activeId === 'summary' || phaseIndex < 0
      ? `${progress} % klart`
      : `Fas ${phaseIndex + 1} av ${SECTIONS.length} · ${progress} % klart`;
    clientProgressFill.style.width = progress + '%';
    clientProgressFill.style.background = pctColor(progress);
  }else{
    clientBtn.classList.add('no-client');
    clientBtn.setAttribute('aria-label', 'Välj eller skapa kund');
    clientSwitchBtn.setAttribute('aria-label', 'Välj eller skapa kund');
    clientCapLabel.textContent = 'Ingen kund vald';
    clientNameLabel.textContent = 'Välj eller skapa kund';
    clientActionLabel.textContent = '›';
    clientProgress.hidden = true;
    clientProgressMeta.textContent = '';
    clientProgressFill.style.width = '0%';
  }
}

function renderSidebar(){
  tabsEl.innerHTML = "";
  const hasActive = !!activeCustomerId;
  tabsEl.classList.toggle('disabled', !hasActive);

  SECTIONS.forEach((s, idx)=>{
    const pct = sectionPct(s);
    const c = sectionCounts(s);
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (view==='checklist' && s.id===activeId ? ' active':'');
    btn.dataset.id = s.id;
    btn.innerHTML = `
      <span class="num">${String(idx+1).padStart(2,'0')}</span>
      <span class="ring" style="--pct:${pct}; --ringcolor:${pctColor(pct)}"><span>${pct}</span></span>
      <span class="label"><span class="t">${s.title}</span><span class="f">${c.total===0?'Ej aktuell':`${c.done}/${c.total} klara`}</span></span>
    `;
    btn.addEventListener('click', ()=>{ if(hasActive) setActive(s.id); });
    tabsEl.appendChild(btn);
  });

  const op = overallPct();
  const total = SECTIONS.reduce((n,s)=>n+sectionCounts(s).total,0);
  const done = SECTIONS.reduce((n,s)=>n+sectionCounts(s).done,0);
  const sBtn = document.createElement('button');
  sBtn.className = 'tab-btn summary-btn' + (view==='checklist' && activeId==='summary' ? ' active':'');
  sBtn.dataset.id = 'summary';
  sBtn.innerHTML = `
    <span class="num">${String(SECTIONS.length+1).padStart(2,'0')}</span>
    <span class="ring" style="--pct:${op}; --ringcolor:${pctColor(op)}"><span>${op}</span></span>
    <span class="label"><span class="t">Sammanfattning</span><span class="f">${done}/${total} totalt</span></span>
  `;
  sBtn.addEventListener('click', ()=>{ if(hasActive) setActive('summary'); });
  tabsEl.appendChild(sBtn);

  document.getElementById('reset-btn').disabled = !hasActive;
  renderClientButton();
}

/* ============ RENDER: CHECKLIST PAGES ============ */
function findChecklistIndex(sectionId, itemId){
  const section = SECTIONS.find(s=>s.id===sectionId);
  if(!section) return -1;
  let index = 0;
  for(const group of section.groups){
    for(const item of group.items){
      if(typeof item !== 'string' && item.id === itemId) return index;
      index++;
    }
  }
  return -1;
}
function isChecklistChecked(sectionId, itemId){
  const index = findChecklistIndex(sectionId,itemId);
  return index >= 0 && !!(state[sectionId] && state[sectionId][index]);
}
function checklistItemDisabled(item){
  if(!item || typeof item === 'string' || !item.disabledWhen) return false;
  if(item.disabledWhen === 'startPrerequisites'){
    const accepted = phaseTwo.acceptanceDecision === 'accept' && canAcceptCustomer().allowed;
    return !(accepted && isChecklistChecked('avtal','agreementSigned'));
  }
  return false;
}

function selectedServiceNames(){
  const labels = {bookkeeping:'Bokföring',vat:'Moms',payroll:'Lön/AGI',annual:'Bokslut/årsredovisning',tax:'Inkomstdeklaration',other:'Annat'};
  return phaseOne.services.map(v=>labels[v] || v);
}

/* Kort kontext från tidigare faser. Det är information, inte fler frågor. */
function renderSectionContext(section){
  const services = selectedServiceNames();
  if(section.id === 'avtal'){
    return `<div class="section-context"><strong>Uppdrag från Fas 1</strong><div class="context-chips">${services.length ? services.map(x=>`<span>${safe(x)}</span>`).join('') : '<span>Inga tjänster valda ännu</span>'}</div><p>Detaljer om ansvar och rutiner behöver bara omfatta de tjänster som faktiskt ingår i uppdraget.</p></div>`;
  }
  if(section.id === 'overtag'){
    if(!phaseOne.businessStatus) return `<div class="info-box">ⓘ Välj nystartad eller befintlig verksamhet i Fas 1 för att anpassa den här fasen.</div>`;
    if(phaseOne.businessStatus === 'new') return `<div class="section-context status-neutral"><strong>⚪ Nystartad verksamhet</strong><p>Historiskt övertag och ingående balanser är inte aktuella. Den praktiska uppsättningen fortsätter i Fas 5.</p></div>`;
    const previous = phaseOne.previousFirm === 'yes' ? 'Tidigare byrå finns – överlämningspunkterna visas.' : phaseOne.previousFirm === 'no' ? 'Ingen tidigare byrå – endast ekonomiskt underlag och ingående läge visas.' : 'Ange i Fas 1 om kunden har en tidigare redovisningsbyrå för att anpassa övertagandet.';
    const relevant = [];
    if(phaseOne.services.includes('vat')) relevant.push('momsperioder');
    if(phaseOne.services.includes('payroll')) relevant.push('lön/AGI och relevant lönehistorik');
    if(phaseOne.services.includes('annual')) relevant.push('bokslut/årsredovisning');
    return `<div class="section-context"><strong>${safe(previous)}</strong>${relevant.length?`<p>Vid övertaget är särskilt ${safe(relevant.join(', '))} relevant utifrån uppdraget.</p>`:''}</div>`;
  }
  if(section.id === 'system'){
    const details = [];
    if(phaseOne.services.includes('vat')) details.push('moms');
    if(phaseOne.services.includes('payroll')) details.push('lön');
    if(phaseOne.services.includes('bookkeeping')) details.push('bank/fakturaflöden');
    if(phaseOne.foreignActivity === 'yes') details.push('utlandshantering');
    return `<div class="section-context"><strong>Systemdelen är filtrerad utifrån kunden</strong><p>${details.length ? `Fokus just nu: ${safe(details.join(', '))}.` : 'Fyll i uppdragsprofilen i Fas 1 för mer specifik filtrering.'} Övriga kundspecifika integrationer hanteras bara när de faktiskt används.</p></div>`;
  }
  if(section.id === 'uppfoljning'){
    return `<div class="section-context"><strong>Två steg i samma fas</strong><p>Markera först kunden som startklar. Den korta uppföljningen görs lämpligen efter cirka 30–90 dagar och påverkar inte om kunden kan börja hanteras.</p></div>`;
  }
  return '';
}

function groupCounts(section, groupIndex){
  let offset = 0;
  for(let i=0;i<groupIndex;i++) offset += section.groups[i].items.length;
  const arr = state[section.id] || [];
  const visible = section.groups[groupIndex].items
    .map((item,ii)=>({item,index:offset+ii}))
    .filter(x=>isChecklistItemVisible(x.item));
  return {done:visible.filter(x=>!!arr[x.index]).length,total:visible.length};
}

function renderSectionFooter(section){
  if(section.id !== 'uppfoljning') return '';
  const start = groupCounts(section,0);
  const customerAccepted = phaseTwo.acceptanceDecision === 'accept' && canAcceptCustomer().allowed;
  const phase3 = sectionCounts(SECTIONS.find(s=>s.id==='avtal'));
  const phase4 = sectionCounts(SECTIONS.find(s=>s.id==='overtag'));
  const phase5 = sectionCounts(SECTIONS.find(s=>s.id==='system'));
  const implementationReady = [phase3,phase4,phase5].every(c=>c.total===0 || c.done===c.total);
  let cls='status-blocked', icon='🔴', label='Inte startklar';
  if(customerAccepted && implementationReady && start.total > 0 && start.done === start.total){ cls='status-possible'; icon='🟢'; label='Startklar'; }
  else if(customerAccepted && (start.done > 0 || phase3.done > 0 || phase5.done > 0)){ cls='status-review'; icon='🟡'; label='Pågående – kvarstående åtgärder'; }
  let reason = `${start.done} av ${start.total} startkontroller klara.`;
  if(!customerAccepted) reason = 'Kundaccept behöver vara klar i Fas 2 innan kunden kan markeras som startklar.';
  else if(!implementationReady) reason = 'Relevanta arbetsmoment i Fas 3–5 behöver slutföras innan slutstatus kan bli Startklar.';
  return `<div class="rule-card ${cls} start-ready-card"><div class="rule-title">Onboardingstatus</div><div class="rule-result">${icon} <strong>${label}</strong></div><p class="micro-help">${safe(reason)}</p></div>`;
}

function renderSectionPage(section){
  const page = document.createElement('div');
  page.className = 'page';
  page.id = 'page-'+section.id;

  const pct = sectionPct(section);
  const c = sectionCounts(section);

  let groupsHtml = "";
  section.groups.forEach((g, gi)=>{
    let offset = 0;
    for(let i=0;i<gi;i++) offset += section.groups[i].items.length;
    let itemsHtml = "";
    g.items.forEach((item, ii)=>{
      if(!isChecklistItemVisible(item)) return;
      const flatIdx = offset+ii;
      const checked = (state[section.id] && state[section.id][flatIdx]) ? 'checked' : '';
      const disabled = checklistItemDisabled(item);
      itemsHtml += `
        <label class="item ${disabled?'is-disabled':''}">
          <input type="checkbox" data-section="${section.id}" data-index="${flatIdx}" ${checked} ${disabled?'disabled':''}>
          <span class="box">${checkSvg}</span>
          <span class="txt">${safe(checklistItemText(item))}${disabled?'<small class="item-note">Kräver godkänd kundaccept i Fas 2 och signerat uppdragsavtal i Fas 3.</small>':''}</span>
        </label>
      `;
    });
    if(!itemsHtml) return;
    const headHtml = g.title ? `<div class="group-head">${g.label? `<span class="gnum">${g.label}</span>`:""}<span class="gtitle">${g.title}</span></div>` : '';
    groupsHtml += `<div class="group">${headHtml}${itemsHtml}</div>`;
  });

  const progressText = c.total ? `${c.done} av ${c.total} punkter avklarade` : 'Inte aktuell för den här kunden';
  page.innerHTML = `
    <div class="page-eyebrow">Onboarding · Steg ${SECTIONS.findIndex(s=>s.id===section.id)+1} av ${SECTIONS.length}</div>
    <h2>${section.title}</h2>
    <p class="syfte">${section.syfte}</p>
    <div class="progress-wrap" id="progress-${section.id}">
      <div class="progress-top">
        <span class="pct-num">${pct}%</span>
        <span class="frac">${progressText}</span>
      </div>
      <div class="bar-track"><div class="bar-fill" style="width:${pct}%; background:${pctColor(pct)}"></div></div>
    </div>
    ${renderSectionContext(section)}
    ${groupsHtml || '<div class="empty-state">Inga arbetsmoment är aktuella i den här fasen utifrån uppgifterna i Fas 1.</div>'}
    ${renderSectionFooter(section)}
  `;
  return page;
}

function renderSummaryPage(){
  const page = document.createElement('div');
  page.className = 'page';
  page.id = 'page-summary';

  const op = overallPct();
  const total = SECTIONS.reduce((n,s)=>n+sectionCounts(s).total,0);
  const done = SECTIONS.reduce((n,s)=>n+sectionCounts(s).done,0);
  const activeCustomer = customers.find(c=>c.id===activeCustomerId);

  let rows = "";
  SECTIONS.forEach(s=>{
    const pct = sectionPct(s);
    const c = sectionCounts(s);
    rows += `
      <div class="sum-row" data-id="${s.id}">
        <span class="sname">${s.title}</span>
        <span class="sbar"><span class="sbar-fill" style="width:${pct}%; background:${pctColor(pct)}"></span></span>
        <span class="sfrac">${c.total===0?'Ej aktuell':`${c.done}/${c.total}`}</span>
      </div>
    `;
  });

  page.innerHTML = `
    <div class="page-eyebrow">Onboarding · Översikt</div>
    <h2>Sammanfattning${activeCustomer ? ' – '+safe(activeCustomer.name) : ''}</h2>
    <p class="syfte">Här ser du hur långt onboardingen av kunden har kommit och vilka av de sex faserna som återstår.</p>
    <div class="summary-hero">
      <div class="big-ring" style="--pct:${op}; --ringcolor:${pctColor(op)}"><span class="num">${op}%</span></div>
      <div class="cap">Total färdigställd onboarding</div>
      <div class="sub">${done} av ${total} punkter avklarade över samtliga faser</div>
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
            <div class="cname">${safe(c.name)}</div>
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
      <div id="duplicate-client-warning" class="alert-box warning client-duplicate-warning" role="alert" hidden>Kunden finns redan. Öppna den befintliga kundprofilen i listan nedan.</div>
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
      if(addCustomer(input.value)) input.value = "";
    });
    document.getElementById('new-client-name').addEventListener('input', ()=>{
      const warning = document.getElementById('duplicate-client-warning');
      if(warning) warning.hidden = true;
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
    // Fas 1 och Fas 2 har egna formulär. Fas 3–6 återanvänder den befintliga checklist-renderaren med villkorsstyrning.
    const page = s.id === 'kontakt' ? renderPhaseOnePage() : s.id === 'kundkannedom' ? renderPhaseTwoPage() : renderSectionPage(s);
    if(s.id===activeId) page.classList.add('active');
    mainEl.appendChild(page);
  });
  const summaryPage = renderSummaryPage();
  if(activeId==='summary') summaryPage.classList.add('active');
  mainEl.appendChild(summaryPage);

  mainEl.querySelectorAll('input[type="checkbox"][data-section]').forEach(cb=>{
    cb.addEventListener('change', onToggle);
  });
  bindPhaseOneEvents();
  bindPhaseTwoEvents();
  mainEl.querySelectorAll('.sum-row').forEach(row=>{
    row.addEventListener('click', ()=> setActive(row.dataset.id));
  });
}

function onToggle(e){
  const sectionId = e.target.dataset.section;
  const idx = parseInt(e.target.dataset.index, 10);
  state[sectionId][idx] = e.target.checked;
  saveState();
  refreshChecklistUI();
  renderSidebar();
}

function refreshChecklistUI(){
  SECTIONS.forEach(s=>{
    const wrap = document.getElementById('progress-'+s.id);
    if(wrap){
      const pct = sectionPct(s);
      const c = sectionCounts(s);
      wrap.querySelector('.pct-num').textContent = pct+'%';
      wrap.querySelector('.frac').textContent = c.total ? `${c.done} av ${c.total} punkter avklarade` : 'Inte aktuell för den här kunden';
      const fill = wrap.querySelector('.bar-fill');
      fill.style.width = pct+'%';
      fill.style.background = pctColor(pct);
    }
  });
  const summaryPage = document.getElementById('page-summary');
  if(summaryPage){
    const op = overallPct();
    const total = SECTIONS.reduce((n,s)=>n+sectionCounts(s).total,0);
    const done = SECTIONS.reduce((n,s)=>n+sectionCounts(s).done,0);
    const ring = summaryPage.querySelector('.big-ring');
    if(ring){
      ring.style.setProperty('--pct', op);
      ring.style.setProperty('--ringcolor', pctColor(op));
      ring.querySelector('.num').textContent = op+'%';
      summaryPage.querySelector('.sub').textContent = `${done} av ${total} punkter avklarade över samtliga faser`;
    }
    SECTIONS.forEach(s=>{
      const row = summaryPage.querySelector(`.sum-row[data-id="${s.id}"]`);
      if(row){
        const pct = sectionPct(s);
        const c = sectionCounts(s);
        row.querySelector('.sbar-fill').style.width = pct+'%';
        row.querySelector('.sbar-fill').style.background = pctColor(pct);
        row.querySelector('.sfrac').textContent = c.total ? `${c.done}/${c.total}` : 'Ej aktuell';
      }
    });
  }
}

function setActive(id){
  activeId = validTabId(id);
  const c = customers.find(x=>x.id===activeCustomerId);
  if(c){ c.lastTab = activeId; saveCustomers(); }

  // Fasnavigation ska fungera även när Kundprofiler-vyn är renderad.
  if(view !== 'checklist'){
    view = 'checklist';
    renderMain();
  }

  document.querySelectorAll('.tab-btn').forEach(b=> b.classList.toggle('active', b.dataset.id===activeId));
  document.querySelectorAll('.page').forEach(p=> p.classList.remove('active'));
  const target = document.getElementById('page-'+activeId);
  if(target) target.classList.add('active');
  renderClientButton();
  mainEl.scrollTop = 0;
}

function fullRender(){
  renderSidebar();
  renderMain();
  if(view==='checklist') setActive(activeId);
  mainEl.scrollTop = 0;
}

/* ============ EVENTS ============ */
clientBtn.addEventListener('click', ()=>{
  if(activeCustomerId) openCustomer(activeCustomerId);
  else goToCustomerList();
});
clientSwitchBtn.addEventListener('click', goToCustomerList);

document.getElementById('reset-btn').addEventListener('click', ()=>{
  if(!activeCustomerId) return;
  const c = customers.find(x=>x.id===activeCustomerId);
  if(!confirm(`Nollställa onboardingdata och samtliga bockade punkter för "${c ? c.name : 'kunden'}"? Detta går inte att ångra.`)) return;
  state = blankState();
  phaseOne = blankPhaseOne();
  phaseTwo = blankPhaseTwo();
  saveState();
  savePhaseOne();
  savePhaseTwo();
  fullRender();
});

/* ============ INIT ============ */
(function init(){
  loadCustomers();
  if(activeCustomerId && customers.find(c=>c.id===activeCustomerId)){
    const c = customers.find(c=>c.id===activeCustomerId);
    state = loadStateFor(activeCustomerId);
    phaseOne = loadPhaseOneFor(activeCustomerId);
    phaseTwo = loadPhaseTwoFor(activeCustomerId);
    view = 'checklist';
    activeId = validTabId(c.lastTab || SECTIONS[0].id);
  }else{
    activeCustomerId = null;
    view = 'customers';
  }
  fullRender();
})();