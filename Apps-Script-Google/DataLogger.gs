// @author: Alessio De Palma
// mail: s8145951r@studenti.itisavogadro.it
// info: classe: 3C info, data creazione: 06/03/2023
// ID foglio: 1lwOB4yiSdeB9bKDvMUrSiBILvanpMVzaMUZq2GIoqr0
// Descrizione: 1) Richiedi il link(url) di utilizzo all'autore. 2) Dopo aver inserito l'url nella barra di ricerca inserisci dopo exec la stringa dentro i doppi apici (escludendoli) "?dato= datoCheVogliamoUsare". 3) Ecco a te il tuo foglio google con i parametri che hai inserito.

function doGet(e) {  //funzione per prendere eventi e parametri
  var par = e.parameter.dato; //variabile nominata par
  Logger.log(par); //stampa dentro logger i valori di par

  logToSpreadSheet(par); //protipo funzione per leggere il parametro

  var ret = {esito: 'Positivo'}; //stampa all'utente stato = positivo se funziona
  return ContentService.createTextOutput(JSON.stringify(ret)).setMimeType(ContentService.MimeType.JSON); //trasforma il gile ret in JSON e succesivamente in stringa
}

function logToSpreadSheet(value){ //funzione logToSpreadSheet
  var ss = SpreadsheetApp.openById('1lwOB4yiSdeB9bKDvMUrSiBILvanpMVzaMUZq2GIoqr0');   //serve per accedere all'id del file foglio di google
  var foglio = ss.getSheetByName('arduino');  //serve per conoscere il nome del foglio del file di google 
  foglio.appendRow([new Date(), value]); //aggiunge dati/appende a quello che trova già scritto
}