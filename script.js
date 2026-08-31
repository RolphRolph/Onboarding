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

/* ============ FAS 1: FÖRETAGSUPPGIFTER OCH UPPDRAGSPROFIL ============
   Fas 1 skiljer sig från övriga steg: användaren matar in grunddata och
   systemet återanvänder samma data för flera regelverksbedömningar.
   Övriga faser fortsätter använda den befintliga checklistmodellen ovan. */
const PHASE1_KEY_PREFIX = "onboarding-phase1-v1-";
const phaseOneKeyFor = (customerId) => PHASE1_KEY_PREFIX + customerId;

function blankPhaseOne(){
  return {
    companyType: "",                 // "ab" | "sole"
    businessStatus: "",              // "new" | "existing"
    services: [],                     // bookkeeping, vat, payroll, annual, tax, other
    otherService: "",
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

function hasCompleteHistoricalData(){
  return ['turnover','balance','employees'].every(k => toNumber(phaseOne.latest[k]) !== null && toNumber(phaseOne.previous[k]) !== null);
}

function countExceeded(year, limits){
  return Object.keys(limits).reduce((count, key) => count + (toNumber(year[key]) > limits[key] ? 1 : 0), 0);
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

function getAvailableKRules(){
  const large = calculateLargeCompanyStatus();
  if(phaseOne.companyType === 'ab'){
    return [
      {value:'K1', state:'disabled', note:'Ej tillämpligt för aktiebolag'},
      {value:'K2', state: large.status === 'blocked' ? 'review' : 'possible', note: large.status === 'blocked' ? 'Kräver ytterligare bedömning utifrån företagets storlek och övriga förutsättningar' : 'Kan vara möjligt'},
      {value:'K3', state:'possible', note:'Kan vara möjligt'}
    ];
  }
  if(phaseOne.companyType === 'sole'){
    return [
      {value:'K1', state:'possible', note:'Kan vara relevant för enskild näringsverksamhet om övriga krav är uppfyllda'},
      {value:'K2', state:'review', note:'Kräver bedömning av tillämplighet'},
      {value:'K3', state:'review', note:'Kräver bedömning av tillämplighet'}
    ];
  }
  return [];
}

function getAvailableAccountingMethods(){
  const turnover = toNumber(phaseOneScope().turnover);
  if(turnover === null) return {status:'review', message:'Ange nettoomsättning för att få stöd om bokföringsmetod.', options:[{value:'cash',label:'Kontantmetoden',disabled:true},{value:'invoice',label:'Faktureringsmetoden',disabled:false}]};
  const cashPossible = turnover <= 3000000;
  return {
    status: cashPossible ? 'possible' : 'blocked',
    message: cashPossible ? 'Kontantmetoden kan vara möjlig' : 'Kontantmetoden är inte möjlig utifrån angiven nettoomsättning',
    options:[{value:'cash',label:'Kontantmetoden',disabled:!cashPossible},{value:'invoice',label:'Faktureringsmetoden',disabled:false}]
  };
}

function getAvailableVatPeriods(){
  if(!phaseOne.services.includes('vat')) return {visible:false, options:[]};
  const turnover = toNumber(phaseOneScope().turnover);
  if(turnover === null) return {visible:true, status:'review', message:'Ange nettoomsättning för att se möjliga momsperioder.', options:[]};
  const options = [
    {value:'year', label:'År', disabled:turnover > 1000000},
    {value:'quarter', label:'Kvartal', disabled:turnover > 40000000},
    {value:'month', label:'Månad', disabled:false}
  ];
  return {visible:true, status:'possible', message:'Välj bland de perioder som är möjliga utifrån angiven omfattning.', options};
}

function calculateSimplifiedAnnualReportEligibility(){
  if(phaseOne.companyType !== 'sole') return {visible:false};
  const turnover = toNumber(phaseOneScope().turnover);
  if(turnover === null) return {visible:true, status:'review', label:'Kan inte bedömas ännu', detail:'Ange nettoomsättning för att få stöd.'};
  /* Prompten anger att omsättningsgränsen ska kontrolleras men anger inte själva gränsvärdet.
     Därför gör verktyget ingen dold juridisk gissning här. */
  return {visible:true, status:'review', label:'Kräver bedömning', detail:`Angiven nettoomsättning är ${formatMoney(turnover)}. Underlaget specificerar inte gränsvärdet för förenklat årsbokslut, så den slutliga kontrollen lämnas till användaren.`};
}

function phaseOneCountsOf(data){
  const p = ensurePhaseOne(data);
  const company = !!p.companyType;
  const status = !!p.businessStatus;
  const services = p.services.length > 0;
  const scope = p.businessStatus === 'existing'
    ? ['turnover','balance','employees'].every(k => toNumber(p.latest[k]) !== null && toNumber(p.previous[k]) !== null)
    : ['turnover','balance','employees'].some(k => toNumber(p.expected[k]) !== null);
  const checks = [company,status,services,scope];
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

function numberField(path, label, value){
  return `<label class="field"><span>${label}</span><input type="number" min="0" step="any" inputmode="decimal" data-p1-path="${path}" value="${safe(value)}" placeholder="0"></label>`;
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
    <div class="scope-label">Nettoomsättning</div><input type="number" min="0" data-p1-path="latest.turnover" value="${safe(phaseOne.latest.turnover)}" placeholder="kr"><input type="number" min="0" data-p1-path="previous.turnover" value="${safe(phaseOne.previous.turnover)}" placeholder="kr">
    <div class="scope-label">Balansomslutning</div><input type="number" min="0" data-p1-path="latest.balance" value="${safe(phaseOne.latest.balance)}" placeholder="kr"><input type="number" min="0" data-p1-path="previous.balance" value="${safe(phaseOne.previous.balance)}" placeholder="kr">
    <div class="scope-label">Medelantal anställda</div><input type="number" min="0" step="any" data-p1-path="latest.employees" value="${safe(phaseOne.latest.employees)}" placeholder="antal"><input type="number" min="0" step="any" data-p1-path="previous.employees" value="${safe(phaseOne.previous.employees)}" placeholder="antal">
  </div>`;

  const expected = `<div class="field-grid three">
    ${numberField('expected.turnover','Förväntad nettoomsättning',phaseOne.expected.turnover)}
    ${numberField('expected.balance','Förväntad balansomslutning',phaseOne.expected.balance)}
    ${numberField('expected.employees','Förväntat antal anställda',phaseOne.expected.employees)}
  </div>`;

  const kHtml = kRules.map(r => {
    const disabled = r.state === 'disabled';
    return `<label class="rule-option ${disabled ? 'is-disabled' : ''} status-${r.state}">
      <input type="radio" name="kRule" data-p1-choice="kRule" value="${r.value}" ${phaseOne.choices.kRule===r.value?'checked':''} ${disabled?'disabled':''}>
      <span><strong>${r.value}</strong><small>${statusIcon(r.state)} ${r.note}</small></span>
    </label>`;
  }).join('');

  const accountingOptions = accounting.options.map(o => `<label class="rule-option ${o.disabled?'is-disabled':''}"><input type="radio" name="accountingMethod" data-p1-choice="accountingMethod" value="${o.value}" ${phaseOne.choices.accountingMethod===o.value?'checked':''} ${o.disabled?'disabled':''}><span><strong>${o.label}</strong></span></label>`).join('');
  const vatOptions = vat.options.map(o => `<label class="rule-option ${o.disabled?'is-disabled':''}"><input type="radio" name="vatPeriod" data-p1-choice="vatPeriod" value="${o.value}" ${phaseOne.choices.vatPeriod===o.value?'checked':''} ${o.disabled?'disabled':''}><span><strong>${o.label}</strong></span></label>`).join('');

  const selectedServices = services.filter(([v])=>phaseOne.services.includes(v)).map(([,l])=>l).join(', ') || '–';
  const kAvailable = kRules.filter(r=>r.state!=='disabled').map(r=>r.value).join(' / ') || '–';
  const methodAvailable = accounting.options.filter(o=>!o.disabled).map(o=>o.label).join(' / ') || '–';
  const vatAvailable = vat.visible ? (vat.options.filter(o=>!o.disabled).map(o=>o.label).join(' / ') || 'Kan inte bedömas ännu') : 'Inte aktuellt';

  page.innerHTML = `
    <div class="page-eyebrow">Onboarding · Steg 1 av 12</div>
    <h2>Företagsuppgifter och uppdragsprofil</h2>
    <p class="syfte">Ange ett fåtal grunduppgifter. Verktyget återanvänder dem för att filtrera relevanta alternativ och ge regelverksstöd.</p>
    <div class="progress-wrap"><div class="progress-top"><span class="pct-num">${pct}%</span><span class="frac">${counts.done} av ${counts.total} grunddelar ifyllda</span></div><div class="bar-track"><div class="bar-fill" style="width:${pct}%; background:${pctColor(pct)}"></div></div></div>

    <section class="phase-block"><div class="phase-number">01</div><div><h3>Företagsform <span class="required">Obligatoriskt</span></h3><div class="choice-row">${radioCard('companyType','ab','Aktiebolag',phaseOne.companyType==='ab')}${radioCard('companyType','sole','Enskild näringsverksamhet',phaseOne.companyType==='sole')}</div></div></section>

    <section class="phase-block"><div class="phase-number">02</div><div><h3>Verksamhetens status <span class="required">Obligatoriskt</span></h3><div class="choice-row">${radioCard('businessStatus','new','Nystartad verksamhet',phaseOne.businessStatus==='new')}${radioCard('businessStatus','existing','Befintlig verksamhet',phaseOne.businessStatus==='existing')}</div>${phaseOne.businessStatus ? `<div class="info-box">ⓘ ${phaseOne.businessStatus==='existing'?'Hämta uppgifter från befintliga underlag där det är möjligt, exempelvis senaste årsredovisning eller bokslut.':'Historiska uppgifter saknas. Ange förväntad omfattning om uppgifterna behövs för bedömningen.'}</div>`:''}</div></section>

    <section class="phase-block"><div class="phase-number">03</div><div><h3>Vilka tjänster ska byrån utföra? <span class="required">Minst ett val</span></h3><div class="service-grid">${services.map(([v,l])=>`<label class="service-option"><input type="checkbox" data-p1-service="${v}" ${phaseOne.services.includes(v)?'checked':''}><span class="native-box"></span><span>${l}</span></label>`).join('')}</div>${phaseOne.services.includes('other')?`<label class="field other-field"><span>Beskriv annan tjänst</span><input type="text" data-p1-other value="${safe(phaseOne.otherService)}" placeholder="Annan tjänst"></label>`:''}</div></section>

    <section class="phase-block"><div class="phase-number">04</div><div><h3>Verksamhetens omfattning</h3><p class="block-help">Ange uppgifterna från befintliga underlag där det är möjligt. Uppgifterna används för att bedöma vilka regler och alternativ som kan vara aktuella för kunden.</p>${phaseOne.businessStatus==='existing'?historical:phaseOne.businessStatus==='new'?`${expected}<div class="info-box">ⓘ Ange uppskattad omfattning om den är känd. Uppgifterna används endast som underlag för regelverksstöd och kan behöva uppdateras när faktisk omfattning är känd.</div>`:`<div class="empty-state">Välj först om verksamheten är nystartad eller befintlig.</div>`}</div></section>

    <section class="phase-block rules"><div class="phase-number">05</div><div><h3>Regelverksstöd</h3><p class="block-help">Detta är automatiskt stöd utifrån uppgifterna ovan. Gör bara ett aktivt val där flera alternativ är möjliga.</p>
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
  const turnover = toNumber(scope.turnover);
  return {type, selectedServices, turnover: turnover === null ? 'Inte angivet' : formatMoney(turnover)};
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
    <div class="page-eyebrow">Onboarding · Steg 2 av 12</div>
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
let state = {};              // checklist state for fas 2–12: { sectionId: [bool,...] }
let phaseOne = blankPhaseOne(); // strukturerad data för Fas 1
let phaseTwo = blankPhaseTwo(); // strukturerad, villkorsstyrd data för Fas 2
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
    const c = sec.id === 'kontakt' ? phaseOneCountsOf(customerPhaseOne) : sec.id === 'kundkannedom' ? phaseTwoCountsOf(customerPhaseTwo) : sectionCountsOf(customerState, sec);
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
  phaseOne = loadPhaseOneFor(id);
  phaseTwo = loadPhaseTwoFor(id);
  view = 'checklist';
  activeId = c.lastTab || SECTIONS[0].id;
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
  const total = SECTIONS.reduce((n,s)=>n+sectionCounts(s).total,0);
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
    // Fas 1 och Fas 2 har egna, villkorsstyrda formulär. Fas 3–12 använder den ursprungliga checklist-renderaren.
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
      wrap.querySelector('.frac').textContent = `${c.done} av ${c.total} punkter avklarade`;
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
    activeId = c.lastTab || SECTIONS[0].id;
  }else{
    activeCustomerId = null;
    view = 'customers';
  }
  fullRender();
})();