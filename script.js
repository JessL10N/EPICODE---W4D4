const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

//PARTE 1

function searchJob(byTitle, byLocation) {
  let finalResult = { result: [], count: 0 }; 
  for (let i = 0; i < jobs.length; i++) { //fa un ciclo per l'array jobs
    if (jobs[i].title.toLowerCase().includes(byTitle) && jobs[i].location.toLowerCase().includes(byLocation)) { //e verfica se tra i title di jobs è presente un valore uguale all'input byTitle (stessa cosa per location);
      finalResult.result.push(jobs[i]); // se c'è corrispondenza, con finalResult.result pushiamo jobs (= aggiungiamo il title e la location di jobs corrispondenti ai risultati della ricerca);
      finalResult.count++; //in caso di corrispondenza, il numero di risultati deve incrementare dei risultati trovati
    }
  }

  return finalResult;
}

//PARTE 2

//Per prendere un elemento specifico e unico dall'html è necessario creare una variabile e poi assegnare document.getElementByID + il nome dell'ID tra parentesi sottoforma di stringa
let byTitleComponent = document.getElementById("lavoro")
let byLocationComponent = document.getElementById("location")
let searchButton = document.getElementById("cerca")
let resultList = document.getElementById("results")


function getValuesAndSearch(){ // funzione che, dopo aver trasformato il testo degli input in minuscolo ed aver effettuato la ricerca, va ad aggiungere i risultati all'interno dell'HTML sottoforma di lista
  let byTitleValue = byTitleComponent.value.toLowerCase()
  let byLocationValue = byLocationComponent.value.toLowerCase()
  let finalResult = searchJob(byTitleValue, byLocationValue)
  console.log(finalResult)
  for ( let i = 0; i < finalResult.result.length; i++){
    jobs[i] = finalResult.result[i] // per ogni risultato corrispondente a jobs
    let newListElement = document.createElement("li") // deve creare un nuovo elemento lista
    newListElement.innerHTML = "Lavoro: " + finalResult.result[i].title + " - " + "Location: " + finalResult.result[i].location // che deve presentarsi in questo formato
    resultList.appendChild(newListElement) // e aggiungerlo in fondo al codice HTML
  }
    
}

// Una volta presi i valori, si aggiunge un eventListener al bottone in modo che quando viene cliccato esegua la funzione getValuesAndSearch

searchButton.addEventListener("click", getValuesAndSearch)




