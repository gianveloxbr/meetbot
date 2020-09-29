// ==UserScript==
// @name         Google Meet Auto Presence
// @namespace    veloxSZ
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://meet.google.com/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    var campoTextoEscrita = document.getElementsByName('chatTextInput')[0];
    var botaoEnvio = document.querySelectorAll('[data-tooltip="Enviar mensagem"]')[0];
    var textoUpper = document.querySelectorAll('[data-message-text="Presente"]');
    var textoLower = document.querySelectorAll('[data-message-text="presente"]');

    function presenca() {
      campoTextoEscrita.value = 'Presente';
      botaoEnvio.ariaDisabled = false;
      botaoEnvio.click();
    }

    function timeout(texto) {
      setTimeout(function(){ console.log(texto); }, 2000);
    }

    function checkPresenca() {
       if (textoUpper.length == 0 || textoLower.length == 0) {
           timeout('sim');
           return true;
       } else{
           timeout('nao');
           return false;
       }
    }

    do{
       checkPresenca();
    }while(checkPresenca != false);

})();