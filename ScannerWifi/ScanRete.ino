/*
// @author: Alessio De Palma
// mail: s8145951r@studenti.itisavogadro.it
// info: classe: 3C info, data creazione: 06/03/2023
// ID foglio: 1lwOB4yiSdeB9bKDvMUrSiBILvanpMVzaMUZq2GIoqr0
// Descrizione:  Leggo un analogico e lo salvo in google sheet


  da rivedere il codice --> https://www.youtube.com/watch?v=5dqzYWT2al4

 **/
#include <SPI.h>
#include <WiFiNINA.h>

void setup() {  
  Serial.begin(9600);
  while (!Serial) {}

  if (WiFi.status() == WL_NO_MODULE) {
    Serial.println("wifi KO");    
  }

  String fv = WiFi.firmwareVersion();
  Serial.println(fv);
  if (fv < "1.0.0") {
    Serial.println("aggiorna firmware");
  }    
}

void loop() {
   int n = WiFi.scanNetworks();
   if (n == -1) {
     Serial.println("no wifi");
     while(true); 
   }

   Serial.print("n. reti: ");
   Serial.println(n);

   for (int i = 0; i < n; i++) {
     Serial.print(WiFi.SSID(i));
     Serial.print("\t\t Segnale:");
     Serial.print(WiFi.RSSI(i));
     Serial.println(" dBm");
   }   
}


