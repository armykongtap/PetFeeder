#include <Arduino.h>
#include <ArduinoJson.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
 
const char* ssid = "aARMY";
const char* password = "Army1234";

int howfeed(){
  String payload="-99";
  if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status
 
  HTTPClient http;  //Declare an object of class HTTPClient
 
  http.begin("http://192.168.43.59:8000/howfeed/");  //Specify request destination
  int httpCode = http.GET();                                                                  //Send the request
  if (httpCode > 0) { //Check the returning code
 
  payload = http.getString();   //Get the request response payload
  }
  http.end();   //Close connection
  }
  return payload.toInt(); 
}

int sendWeight(int weight){
    if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status
 
    StaticJsonBuffer<300> JSONbuffer;   //Declaring static JSON buffer
    JsonObject& JSONencoder = JSONbuffer.createObject(); 
 
    JSONencoder["weight"] = weight;
 
    char JSONmessageBuffer[300];
    JSONencoder.prettyPrintTo(JSONmessageBuffer, sizeof(JSONmessageBuffer));
 
    HTTPClient http;    //Declare object of class HTTPClient
 
    http.begin("http://192.168.43.59:8000/weight/");      //Specify request destination
    http.addHeader("Content-Type", "application/json");  //Specify content-type header
 
    int httpCode = http.POST(JSONmessageBuffer);   //Send the request
    String payload = http.getString();                                        //Get the response payload
 
    http.end();  //Close connection
}
}

void setup () {
 
Serial.begin(115200);
WiFi.begin(ssid, password);
 
while (WiFi.status() != WL_CONNECTED) {
 
delay(1000);
Serial.print("Connecting..");
 
}

}
int i = 100;
void loop() {
  int tmp=howfeed();
  Serial.println(tmp);
  sendWeight(i);
  i = i+1;
delay(1000);    //Send a request every 30 seconds
 
}
