var txtInput =document.querySelector("#txt-input");
var btnTranslate= document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/dolan.json";

function getTranslationURL (text) {
    return serverURL+ "?"+ "text="+text
}

function errorHandler(error){
    console.log(error);
    alert(error);
}

function clickEventHandler() {
    var textInput = txtInput.value;

    fetch(getTranslationURL(textInput))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        txtOutput.innerText=translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler);