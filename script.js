/* ============ CHECKLIST DATA ============ */
const SECTIONS = [
  {
    id:"kontakt", title:"Första kontakt",
    syfte:"Skapa en tydlig bild av kundens verksamhet, behov och förväntningar samt bedöma om kunden passar byråns målgrupp och tjänsteutbud.",
    groups:[{items:[
      "Möte med kunden är bokat",
      "Inledande behovsanalys är genomförd",
      "Kundens verksamhet och affärsmodell är genomgången",
      "Företagsform är identifierad",
      "Bransch och verksamhetsområde är identifierade",
      "Antal anställda är fastställt",
      "Momsperiod är fastställd",
      "Omsättning är fastställd",
      "Internationell verksamhet har kartlagts",
      "Eventuell tidigare redovisningsbyrå är identifierad",
      "Kundens önskade tjänster är identifierade",
      "Kundens behov och förväntningar är dokumenterade",
      "Bedömning har gjorts av om kunden passar byråns målgrupp och förutsättningar",
      "Offert har upprättats och skickats",
      "Eventuell förhandling är genomförd",
      "Offerten är godkänd av kunden"
    ]}]
  },
  {
    id:"kundkannedom", title:"Kundkännedom",
    syfte:"Säkerställa att byrån vet vem kunden är, vem som kontrollerar företaget, vad verksamheten innebär och vilken risk affärsförbindelsen medför.",
    groups:[
      {label:"A", title:"Identifiera kunden", items:[
        "Företagsnamn och organisationsnummer kontrollerat mot tillförlitlig källa",
        "Registrerad adress och företagsstatus kontrollerad",
        "Företrädare identifierade och identitet verifierad",
        "Firmateckning/behörighet kontrollerad",
        "Eventuell fullmakt kontrollerad",
        "Källa och datum för kontrollen dokumenterat"
      ]},
      {label:"B", title:"Verklig huvudman och ägarstruktur", items:[
        "Verklig huvudman identifierad och verifierad",
        "Ägar- och kontrollstruktur kontrollerad",
        "Eventuella juridiska personer i ägarstrukturen utredda",
        "Komplex eller svåröverskådlig ägarstruktur identifierad och utredd",
        "Alternativ verklig huvudman dokumenterad om ordinarie inte kan identifieras",
        "Källa och datum för kontrollen dokumenterat"
      ]},
      {label:"C", title:"Förstå kunden och verksamheten", items:[
        "Vad företaget säljer och hur det tjänar pengar är dokumenterat",
        "Viktigaste kunder och leverantörer är dokumenterade",
        "Var verksamheten bedrivs är dokumenterat",
        "Eventuell internationell verksamhet är dokumenterad",
        "Kontanthantering är dokumenterad",
        "Förväntade större eller ovanliga transaktioner är dokumenterade",
        "Vilka tjänster kunden vill köpa av byrån är dokumenterat",
        "Varför kunden anlitar byrån är dokumenterat"
      ]},
      {label:"D", title:"PEP- och sanktionskontroll", items:[
        "PEP-kontroll genomförd",
        "Sanktionskontroll genomförd",
        "Resultat av kontrollen dokumenterat (träff/ingen träff)",
        "Eventuell träff utredd enligt process för skärpt kundkännedom",
        "Källa och datum för kontrollen dokumenterat"
      ]},
      {label:"E", title:"Riskbedömning", items:[
        "Bedömning av varningssignaler genomförd och dokumenterad",
        "Sammanvägd risknivå fastställd (låg/normal/förhöjd)",
        "Motivering till riskbedömningen dokumenterad"
      ]},
      {label:"F", title:"Åtgärd vid förhöjd risk", items:[
        "Ytterligare information/underlag har inhämtats",
        "Medlens eller förmögenhetens ursprung har utretts vid behov",
        "Ärendet har eskalerats enligt byråns rutin",
        "Beslut om fortsatt uppdrag eller avböjande fattat",
        "Godkännande av behörig beslutsfattare inhämtat vid behov",
        "Beslut och motivering dokumenterade"
      ]},
      {label:"G", title:"Beslut och uppföljning", items:[
        "Kundkännedomen är komplett",
        "Riskbedömningen är dokumenterad",
        "Inga kvarstående hinder mot att anta kunden finns",
        "Beslut om att anta kunden är fattat och dokumenterat",
        "Beslutsfattare och datum dokumenterat",
        "Nästa planerade uppföljning är bestämd och ansvarig utsedd"
      ]}
    ]
  },
  {
    id:"informationsinsamling", title:"Informationsinsamling",
    syfte:"Samla in och verifiera den grundläggande information som krävs för att förstå kunden och säkerställa att företaget är korrekt registrerat.",
    groups:[
      {title:"Grundläggande företagsinformation", items:[
        "Organisationsnummer är registrerat och verifierat",
        "Kontaktpersoner är registrerade",
        "Företags- och besöksadresser är registrerade",
        "Telefonnummer är registrerat",
        "E-postadresser är registrerade",
        "Faktureringsuppgifter är registrerade",
        "Bankuppgifter är registrerade"
      ]},
      {title:"Verksamhet", items:[
        "Verksamhetens art är dokumenterad",
        "Verksamheten och affärsmodellen är beskrivna",
        "Viktiga kunder är identifierade",
        "Viktiga leverantörer är identifierade",
        "Eventuella säsongsvariationer är kartlagda"
      ]},
      {title:"Skatt och registreringar", items:[
        "Momsregistrering och momsperiod är kontrollerad",
        "Arbetsgivarregistrering är kontrollerad",
        "F-skatt är kontrollerad",
        "OSS-registrering är kontrollerad, om relevant",
        "Import/exportverksamhet är identifierad, om relevant"
      ]}
    ]
  },
  {
    id:"uppdragsavtal", title:"Uppdragsavtal",
    syfte:"Tydliggöra och dokumentera uppdragets omfattning, ansvar, villkor och förväntningar mellan redovisningsbyrån och kunden.",
    groups:[
      {title:"Uppdragets omfattning", items:[
        "Tjänster som ingår i uppdraget är specificerade",
        "Tjänster som inte ingår i uppdraget är tydliggjorda",
        "Ansvarsfördelningen mellan byrån och kunden är fastställd",
        "Eventuella tilläggstjänster och tilläggsarbete är definierade",
        "Kundens förväntningar på leveransen är dokumenterade"
      ]},
      {title:"Pris och fakturering", items:[
        "Pris och prismodell är fastställd",
        "Faktureringsintervall är fastställd",
        "Eventuella timpriser för tilläggsarbete är kommunicerade",
        "Villkor för prisjustering är tydliggjorda",
        "Betalningsvillkor är fastställda"
      ]},
      {title:"Praktiska förutsättningar", items:[
        "Bokförings- och ekonomisystem är fastställt",
        "Kommunikationskanaler är fastställda",
        "Rutiner och deadlines för överlämning av underlag är överenskomna",
        "Ansvariga kontaktpersoner hos kunden och byrån är utsedda",
        "Rutiner för godkännande och attest är fastställda"
      ]},
      {title:"Avtal och efterlevnad", items:[
        "Uppdragsavtal är upprättat",
        "Eventuella bilagor och särskilda villkor är inkluderade",
        "Personuppgiftsbehandling/GDPR är hanterad",
        "Sekretess och informationshantering är reglerad",
        "Avtalet är granskat och godkänt av kunden",
        "Avtalet är signerat av behöriga parter",
        "Signerat avtal är arkiverat"
      ]}
    ]
  },
  {
    id:"underlag", title:"Insamling av underlag",
    syfte:"Samla in och kvalitetssäkra nödvändiga ekonomiska och administrativa underlag från tidigare perioder för ett korrekt utgångsläge.",
    groups:[{items:[
      "SIE-fil har erhållits",
      "Senaste bokslut har erhållits",
      "Senaste årsredovisning har erhållits, om relevant",
      "Senaste deklarationer har erhållits",
      "Kontoplan har erhållits",
      "Verifikationer och bokföringsunderlag har erhållits",
      "Anläggningsregister har erhållits",
      "Leverantörsregister har erhållits",
      "Kundregister har erhållits",
      "Lista över obetalda kund- och leverantörsfakturor har erhållits",
      "Pågående projekt har identifierats och dokumenterats",
      "Semesterlöneskuld har dokumenterats",
      "Relevanta avtal har erhållits"
    ]}]
  },
  {
    id:"overtag", title:"Övertag från tidigare byrå",
    syfte:"Säkerställa en spårbar överlämning och att relevant information, pågående ärenden och räkenskapsinformation kommer över innan den nya redovisningen påbörjas.",
    groups:[
      {label:"1", title:"Kontakt med tidigare byrå", items:[
        "Tidigare byrå kontaktad och övertagandet kommunicerat",
        "Eventuella problem, tvister eller andra relevanta omständigheter identifierade",
        "Eventuella obetalda arvoden noterade",
        "Datum och resultat av kontakten dokumenterade"
      ]},
      {label:"2", title:"Räkenskapsinformation och system", items:[
        "Aktuell SIE-fil/räkenskapsinformation mottagen",
        "Nödvändigt historiskt räkenskapsmaterial tillgängligt",
        "Verifikationer och bilagor tillgängliga",
        "Relevant systemdokumentation och behandlingshistorik tillgänglig",
        "Kontoplan, dimensioner och relevanta systeminställningar överförda/dokumenterade",
        "Kunden har fortsatt tillgång till nödvändig historisk information"
      ]},
      {label:"3", title:"Pågående arbete och ansvar", items:[
        "Pågående bokföring kartlagd och ansvar fördelat",
        "Momsdeklaration kartlagd och ansvar fördelat",
        "Arbetsgivardeklaration kartlagd och ansvar fördelat",
        "Bokslut/årsredovisning kartlagd och ansvar fördelat",
        "Inkomstdeklaration kartlagd och ansvar fördelat",
        "Pågående myndighetsärenden eller revisioner kartlagda",
        "Övriga viktiga deadlines/ärenden identifierade"
      ]},
      {label:"4", title:"Ombud och behörigheter", items:[
        "Tidigare byrås behörigheter/fullmakter identifierade",
        "Nödvändiga gamla behörigheter avslutade",
        "Nya ombud och behörigheter registrerade",
        "Bank- och systembehörigheter uppdaterade"
      ]},
      {label:"5", title:"Kontroll av ingående balanser", items:[
        "Bankkonton avstämda",
        "Skattekonto avstämt",
        "Kund- och leverantörsreskontra kontrollerad",
        "Moms kontrollerad",
        "Övriga väsentliga balansposter kontrollerade",
        "Eventuella fel eller avvikelser identifierade och dokumenterade"
      ]},
      {label:"6", title:"Slutkontroll", items:[
        "Relevant räkenskapsinformation mottagen",
        "Pågående arbete och ansvarsfördelning klarlagda",
        "Nödvändiga behörigheter uppdaterade",
        "Ingående balanser kontrollerade",
        "Eventuella brister eller fel hanterade enligt byråns rutin",
        "Slutstatus för övertagandet fastställd och dokumenterad"
      ]}
    ]
  },
  {
    id:"behorigheter", title:"Behörigheter",
    syfte:"Säkerställa att kunden och redovisningsbyrån har rätt behörigheter i de system och myndighetstjänster som krävs för uppdraget.",
    groups:[{items:[
      "Kartlagt vilka myndigheter och system kunden använder",
      "Kontrollerat vilka personer hos kunden som är behöriga",
      "Säkerställt att redovisningsbyrån får nödvändiga ombudsbehörigheter",
      "Kontrollerat behörigheter hos Skatteverket",
      "Kontrollerat behov av behörigheter hos Bolagsverket",
      "Kontrollerat behörigheter och åtkomst till kundens bank",
      "Skapat/kontrollerat användarbehörigheter i bokföringssystemet",
      "Kontrollerat behörigheter i lönesystem",
      "Kontrollerat behörigheter i fakturasystem",
      "Kontrollerat behörigheter i kvittohanteringssystem",
      "Kontrollerat behörigheter i tidrapporteringssystem",
      "Kontrollerat behörigheter i webbshop",
      "Kontrollerat integrationer/behörigheter i andra tjänster (t.ex. Klarna, Shopify, Stripe)",
      "Dokumenterat vilka behörigheter som tilldelats och till vilka personer",
      "Säkerställt rutiner för att ändra eller avsluta behörigheter vid rollbyte/avslut"
    ]}]
  },
  {
    id:"systemuppsattning", title:"Systemuppsättning",
    syfte:"Säkerställa att ekonomisystemet är korrekt konfigurerat utifrån kundens verksamhet, regelverk och rapporteringsbehov.",
    groups:[
      {label:"1", title:"Grundinställningar", items:[
        "Räkenskapsår kontrollerat och registrerat",
        "K-regelverk fastställt",
        "Redovisningsmetod fastställd",
        "Redovisningsvaluta och eventuella utländska valutor konfigurerade",
        "Företags- och kontaktuppgifter registrerade"
      ]},
      {label:"2", title:"Kontoplan och uppföljning", items:[
        "Lämplig kontoplan vald och anpassad",
        "Moms- och relevanta branschkonton kontrollerade",
        "Eventuella dimensioner uppsatta",
        "Kostnadsställen/resultatenheter uppsatta vid behov",
        "Projektredovisning uppsatt vid behov",
        "Eventuella särskilda rapporteringsbehov beaktade"
      ]},
      {label:"3", title:"Moms och skatter", items:[
        "Momsregistrering och momsperiod kontrollerad",
        "Rätt momshantering konfigurerad",
        "Utlandshandel konfigurerad vid behov",
        "Eventuella särskilda momsflöden (t.ex. OSS) uppsatta vid behov"
      ]},
      {label:"4", title:"Bank, fakturor och betalningsflöden", items:[
        "Bankkoppling aktiverad och testad",
        "Bankgiro/plusgiro registrerat vid behov",
        "Kund- och leverantörsreskontra konfigurerad",
        "Fakturamallar och betalningsvillkor uppsatta",
        "OCR/e-fakturaflöden uppsatta och testade vid behov",
        "Betalningsflöden och eventuella betalfiler testade"
      ]},
      {label:"5", title:"Integrationer och övriga funktioner", items:[
        "Nödvändiga integrationer identifierade",
        "Integrationer aktiverade och testade",
        "Kassasystem kopplat vid behov",
        "Löne-/tidssystem kopplat vid behov",
        "Anläggningsregister uppsatt vid behov",
        "Övriga kundspecifika funktioner konfigurerade"
      ]},
      {label:"6", title:"Systemdokumentation och test", items:[
        "Nödvändig systemdokumentation upprättad/uppdaterad",
        "Behandlingshistorik och relevanta systeminställningar säkerställda",
        "Automatiska flöden testade",
        "Bank-, faktura- och integrationsflöden testade",
        "Rapportering och momsrapport testade",
        "Systemet är redo för löpande redovisning"
      ]}
    ]
  },
  {
    id:"dokumenthantering", title:"Digital dokumenthantering",
    syfte:"Säkerställa att kundens dokumentation lagras strukturerat, säkert och är lätt att hitta och använda under hela uppdraget.",
    groups:[
      {label:"1", title:"Dokumentstruktur", items:[
        "Kundens standardiserade mappstruktur skapad",
        "Administrativ dokumentation separerad från löpande redovisning och bokslut",
        "KYC, avtal, fullmakter och övriga onboardingdokument sparade på rätt plats",
        "System- och uppdragsdokumentation sparad på rätt plats"
      ]},
      {label:"2", title:"Namngivning och struktur", items:[
        "Byråns standard för fil- och mappnamn tillämpad",
        "Dokumentationen är sökbar och lätt att förstå för en annan medarbetare",
        "Dokument och versioner kan följas över tid vid behov"
      ]},
      {label:"3", title:"Behörigheter och delning", items:[
        "Rätt medarbetare har tillgång till kundens material",
        "Behörigheter är anpassade efter roll och behov",
        "Kunden har tillgång till relevant material via godkänd kanal",
        "Delning med tredje part sker endast via godkänd och säker kanal",
        "Känsligt material skyddas enligt byråns rutiner"
      ]},
      {label:"4", title:"Säkerhetskopiering och åtkomst", items:[
        "Kundens dokumentation omfattas av byråns backup-rutin",
        "Nödvändig räkenskapsinformation och dokumentation kan återskapas vid behov",
        "Byrån har tillgång till relevant historiskt material även vid system- eller leverantörsbyte"
      ]},
      {label:"5", title:"Slutkontroll", items:[
        "Dokumentstrukturen är komplett",
        "Behörigheter är kontrollerade",
        "Nödvändiga dokument är sparade",
        "Material kan hittas och nås av behörig personal",
        "Dokumenthanteringen följer byråns interna rutiner"
      ]}
    ]
  },
  {
    id:"kommunikation", title:"Kommunikation",
    syfte:"Skapa tydliga och effektiva kommunikationsrutiner mellan kunden och redovisningsbyrån.",
    groups:[{items:[
      "Kontaktvägar mellan kund och byrå bestämda",
      "Huvudsaklig kontaktperson hos kunden utsedd",
      "Ansvarig kontaktperson på redovisningsbyrån utsedd",
      "Rutin för hantering av löpande frågor bestämd",
      "Rutin för hur kunden ska skicka in bokföringsmaterial bestämd",
      "System eller plattformar för samarbetet beslutade",
      "Förväntade svarstider fastställda",
      "Rutin för brådskande ärenden bestämd",
      "Frekvens för avstämningar/möten bestämd",
      "Kunden informerad om deadline för momsdeklaration",
      "Kunden informerad om deadline för arbetsgivardeklaration",
      "Kunden informerad om deadline för bokslut",
      "Kunden informerad om deadline för årsredovisning",
      "Kunden informerad om deadline för inkomstdeklaration",
      "Kommunikationsrutinerna dokumenterade"
    ]}]
  },
  {
    id:"internplanering", title:"Intern planering",
    syfte:"Säkerställa att det internt på redovisningsbyrån finns en tydlig ansvarsfördelning för kunden.",
    groups:[{items:[
      "Huvudansvarig konsult för kunden utsedd",
      "Reserv/ersättare vid frånvaro utsedd",
      "Behov av lönespecialist identifierat",
      "Behov av skattespecialist identifierat",
      "Behov av regelverksspecialist (t.ex. K3) identifierat",
      "Behov av momsspecialist identifierat",
      "Arbetsuppgifter fördelade mellan berörda medarbetare",
      "Ansvar för löpande bokföring fastställt",
      "Ansvar för avstämningar fastställt",
      "Ansvar för moms fastställt",
      "Ansvar för AGI fastställt",
      "Ansvar för lön fastställt",
      "Ansvar för bokslut fastställt",
      "Ansvar för årsredovisning fastställt",
      "Ansvar för deklaration fastställt",
      "Återkommande arbetsuppgifter inlagda i kalender/planeringsverktyg",
      "Ansvarsfördelningen dokumenterad",
      "Berörda medarbetare informerade om kunden och uppdragets omfattning"
    ]}]
  },
  {
    id:"uppfoljning", title:"Uppföljning",
    syfte:"Kontrollera att onboardingprocessen har fungerat och identifiera eventuella problem och förbättringsområden.",
    groups:[{items:[
      "Kunden kontaktad för uppföljning av onboardingprocessen",
      "Kundens nöjdhet med övergången undersökt",
      "Kommunikationsrutinernas funktion kontrollerad",
      "Kontrollerat att material skickas in på rätt sätt",
      "Kontrollerat att samtliga nödvändiga behörigheter finns",
      "Kontrollerat att integrationer fungerar",
      "Kontrollerat att bokföring, lön, fakturering och övriga system fungerar som planerat",
      "Identifierat om någon information eller något underlag saknas",
      "Kontrollerat om något har missats under onboardingprocessen",
      "Eventuella problem dokumenterade",
      "Åtgärder för identifierade problem framtagna",
      "Feedback insamlad från kunden",
      "Feedback insamlad internt från ansvarig konsult",
      "Bedömning gjord av om onboardingprocessen behöver förändras",
      "Interna rutiner och checklistor uppdaterade vid behov",
      "Uppföljning av att åtgärder genomförts"
    ]}]
  }
];

/* ============ STORAGE KEYS ============ */
const CUSTOMERS_KEY = "onboarding-customers-v1";
const ACTIVE_CUSTOMER_KEY = "onboarding-active-customer-v1";
const stateKeyFor = (customerId) => "onboarding-state-v1-" + customerId;

/* ============ APP STATE ============ */
let customers = [];          // [{id, name, createdAt, lastTab}]
let activeCustomerId = null; // id of the currently open customer, or null
let state = {};              // checklist state for the active customer: { sectionId: [bool,...] }
let view = 'customers';      // 'customers' | 'checklist'
let activeId = SECTIONS[0].id;

function flatCount(section){
  return section.groups.reduce((n,g)=>n+g.items.length,0);
}
function blankState(){
  const s = {};
  SECTIONS.forEach(sec=>{ s[sec.id] = Array.from({length:flatCount(sec)}, ()=>false); });
  return s;
}
function ensureState(s){
  SECTIONS.forEach(sec=>{
    const n = flatCount(sec);
    if(!Array.isArray(s[sec.id]) || s[sec.id].length!==n){
      const prev = Array.isArray(s[sec.id]) ? s[sec.id] : [];
      s[sec.id] = Array.from({length:n}, (_,i)=> !!prev[i]);
    }
  });
  return s;
}

function sectionPctOf(s, section){
  const arr = (s && s[section.id]) || [];
  const total = flatCount(section);
  if(total===0) return 0;
  const done = arr.filter(Boolean).length;
  return Math.round((done/total)*100);
}
function sectionCountsOf(s, section){
  const arr = (s && s[section.id]) || [];
  const total = flatCount(section);
  const done = arr.filter(Boolean).length;
  return {done, total};
}
function overallPctOf(s){
  let done=0, total=0;
  SECTIONS.forEach(sec=>{
    const c = sectionCountsOf(s, sec);
    done+=c.done; total+=c.total;
  });
  return total===0?0:Math.round((done/total)*100);
}
function sectionPct(section){ return sectionPctOf(state, section); }
function sectionCounts(section){ return sectionCountsOf(state, section); }
function overallPct(){ return overallPctOf(state); }

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

  SECTIONS.forEach((s, idx)=>{
    const pct = sectionPct(s);
    const c = sectionCounts(s);
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (view==='checklist' && s.id===activeId ? ' active':'');
    btn.dataset.id = s.id;
    btn.innerHTML = `
      <span class="num">${String(idx+1).padStart(2,'0')}</span>
      <span class="ring" style="--pct:${pct}; --ringcolor:${pctColor(pct)}"><span>${pct}</span></span>
      <span class="label"><span class="t">${s.title}</span><span class="f">${c.done}/${c.total} klara</span></span>
    `;
    btn.addEventListener('click', ()=>{ if(hasActive) setActive(s.id); });
    tabsEl.appendChild(btn);
  });

  const op = overallPct();
  const total = SECTIONS.reduce((n,s)=>n+flatCount(s),0);
  const done = SECTIONS.reduce((n,s)=>n+sectionCounts(s).done,0);
  const sBtn = document.createElement('button');
  sBtn.className = 'tab-btn summary-btn' + (view==='checklist' && activeId==='summary' ? ' active':'');
  sBtn.dataset.id = 'summary';
  sBtn.innerHTML = `
    <span class="num">13</span>
    <span class="ring" style="--pct:${op}; --ringcolor:${pctColor(op)}"><span>${op}</span></span>
    <span class="label"><span class="t">Sammanfattning</span><span class="f">${done}/${total} totalt</span></span>
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
  section.groups.forEach((g, gi)=>{
    let offset = 0;
    for(let i=0;i<gi;i++) offset += section.groups[i].items.length;
    let headHtml = "";
    if(g.title){
      headHtml = `<div class="group-head">${g.label? `<span class="gnum">${g.label}</span>`:""}<span class="gtitle">${g.title}</span></div>`;
    }
    let itemsHtml = "";
    g.items.forEach((text, ii)=>{
      const flatIdx = offset+ii;
      const checked = (state[section.id] && state[section.id][flatIdx]) ? 'checked' : '';
      itemsHtml += `
        <label class="item">
          <input type="checkbox" data-section="${section.id}" data-index="${flatIdx}" ${checked}>
          <span class="box">${checkSvg}</span>
          <span class="txt">${text}</span>
        </label>
      `;
    });
    groupsHtml += `<div class="group">${headHtml}${itemsHtml}</div>`;
  });

  page.innerHTML = `
    <div class="page-eyebrow">Onboarding · Steg ${SECTIONS.findIndex(s=>s.id===section.id)+1} av 12</div>
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
  const total = SECTIONS.reduce((n,s)=>n+flatCount(s),0);
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
        <span class="sfrac">${c.done}/${c.total}</span>
      </div>
    `;
  });

  page.innerHTML = `
    <div class="page-eyebrow">Onboarding · Översikt</div>
    <h2>Sammanfattning${activeCustomer ? ' – '+activeCustomer.name : ''}</h2>
    <p class="syfte">Här ser du hur långt onboardingen av kunden har kommit totalt, och vilka av de tolv checklistorna som fortfarande behöver bockas av.</p>
    <div class="summary-hero">
      <div class="big-ring" style="--pct:${op}; --ringcolor:${pctColor(op)}"><span class="num">${op}%</span></div>
      <div class="cap">Total färdigställd onboarding</div>
      <div class="sub">${done} av ${total} punkter avklarade över samtliga checklistor</div>
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
    const page = renderSectionPage(s);
    if(s.id===activeId) page.classList.add('active');
    mainEl.appendChild(page);
  });
  const summaryPage = renderSummaryPage();
  if(activeId==='summary') summaryPage.classList.add('active');
  mainEl.appendChild(summaryPage);

  mainEl.querySelectorAll('input[type="checkbox"]').forEach(cb=>{
    cb.addEventListener('change', onToggle);
  });
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
      wrap.querySelector('.frac').textContent = `${c.done} av ${c.total} punkter avklarade`;
      const fill = wrap.querySelector('.bar-fill');
      fill.style.width = pct+'%';
      fill.style.background = pctColor(pct);
    }
  });
  const summaryPage = document.getElementById('page-summary');
  if(summaryPage){
    const op = overallPct();
    const total = SECTIONS.reduce((n,s)=>n+flatCount(s),0);
    const done = SECTIONS.reduce((n,s)=>n+sectionCounts(s).done,0);
    const ring = summaryPage.querySelector('.big-ring');
    if(ring){
      ring.style.setProperty('--pct', op);
      ring.style.setProperty('--ringcolor', pctColor(op));
      ring.querySelector('.num').textContent = op+'%';
      summaryPage.querySelector('.sub').textContent = `${done} av ${total} punkter avklarade över samtliga checklistor`;
    }
    SECTIONS.forEach(s=>{
      const row = summaryPage.querySelector(`.sum-row[data-id="${s.id}"]`);
      if(row){
        const pct = sectionPct(s);
        const c = sectionCounts(s);
        row.querySelector('.sbar-fill').style.width = pct+'%';
        row.querySelector('.sbar-fill').style.background = pctColor(pct);
        row.querySelector('.sfrac').textContent = `${c.done}/${c.total}`;
      }
    });
  }
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
  renderSidebar();
  renderMain();
  if(view==='checklist') setActive(activeId);
  mainEl.scrollTop = 0;
}

/* ============ EVENTS ============ */
clientBtn.addEventListener('click', goToCustomerList);

document.getElementById('reset-btn').addEventListener('click', ()=>{
  if(!activeCustomerId) return;
  const c = customers.find(x=>x.id===activeCustomerId);
  if(!confirm(`Nollställa samtliga bockade punkter för "${c ? c.name : 'kunden'}"? Detta går inte att ångra.`)) return;
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