# ionic3NativoModelo1

## Decrição
###### Aplicando conhecimentos adquiridos durante treinamento e aplicando-os para fixação de conhecimento

## Getting Started

### Pré-requisito

Instalar node e npm.

### Instalação

Após baixar o projeto deve ser executado alguns comandos.

 ```
 npm install
 npm install -g ionic@latest
 npm install -g cordova
 npm install -g nodemon
 ionic cordova platform add android
 ionic cordova platform add browser
 ionic cordova plugin add cordova-plugin-camera
 ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="Key_android" --variable API_KEY_FOR_IOS="Key_IOS"
 npm install --save @ionic-native/google-maps
 ionic cordova plugin add cordova-plugin-tts
 npm install --save @ionic-native/text-to-speech
 ionic cordova plugin add cordova-plugin-speechrecognition
 npm install --save @ionic-native/speech-recognition
 ```

 Após a instalação do nodemon, executar o servidor utlizando nodemon, pois quando executado depois de cada alteração de arquivo do projeto e servidor e reiniciado automaticamente.
 ```
 nodemon ./bin/server.js
 ```

## Autor

* **Edimar B Miranda Junior** - *[Repositório Git](https://github.com/edimarbmjunior)*