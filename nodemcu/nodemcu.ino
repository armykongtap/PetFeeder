#include <ArduinoJson.h>
#include <string.h>
#include <SoftwareSerial.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#define WIFI_SSID "aARMY"
#define WIFI_PASSWORD "Army1234"




SoftwareSerial stm32Serial(13,15); //RX,TX d7


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
  //  String payload = http.getString();                                        //Get the response payload
 
    http.end();  //Close connection
}
}


void setup() {
  
  Serial.begin(115200);
  Serial.println("Starting...");
  stm32Serial.begin(115200);
//  stm32Serial.receive();
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.println(".");
     delay(500);
  }
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());
 
}

void loop() {
  // put your main code here, to run repeatedly:
  //Serial.println(microgear.connected());
  //if (microgear.connected())    microgear.loop();
 
   //Serial.println(stm32Serial.available());
   
  
  int tmp;
  int msg;
  Serial.println("Start:1:");
  if(stm32Serial.available()){
    Serial.println("Start2::");
   // tmp =  stm32Serial.readString();
   tmp =  stm32Serial.parseInt();
  // tmp.trim().toInt();
   //Serial.println(tmp.trim().toInt());
   sendWeight(tmp);
    //recvWithStartEndMarkers();
    //showNewData();
    /*
    msg = Serial.readString();
    if(tmp != ""){
             
             Serial.println(tmp);
          //   microgear.chat("Backend" ,tmp);
     }
    if(msg != ""){
      if(msg.equals("0")){
        Serial.println("HHH");
      }
      else{
          int feed = msg.toInt();
          
          stm32Serial.write("1 %d", feed);
              //stm32Serial.write("00000000000000000000000000000000");
          
      }
      Serial.println("Send complete");
     //stm32Serial.write(msg);
     }*/
     msg =howfeed();
      if(msg == 0){
        Serial.println("HHH");
      }
      else{
          /*int feed = msg.toInt();
          
          stm32Serial.write("1 %d", feed);*/
          stm32Serial.write("%d", msg);
              //stm32Serial.write("00000000000000000000000000000000");
          
      }
      Serial.println("Send complete");
     //stm32Serial.write(msg);
  }
  delay(1000);
}
