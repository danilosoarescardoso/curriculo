function getJSON(url) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return Httpreq.responseText;

}

let urlExperiencia = 'http://demo9624895.mockable.io/experiencia';

let dadosExperiencia = JSON.parse(getJSON(urlExperiencia));


function loadData(element, data) {
    return document.getElementById(element).innerHTML = data;
}

// JavaScript Document
var min = 12;
var max = 32;

function increaseFontSizeInternal(list) {
    for (i = 0; i < list.length; i++) {
        var s = 12;
        if (list[i].style.fontSize) {
            s = parseInt(list[i].style.fontSize.replace("px", ""));
        }
        if (s != max) {
            s += 1;
        }
        list[i].style.fontSize = s + "px"
    }
}

function increaseFontSize() {
    var paragraph = document.getElementsByTagName('p');
    increaseFontSizeInternal(paragraph);
    var links = document.getElementsByTagName('a');
    increaseFontSizeInternal(links);
    var titles = document.getElementsByTagName("h3")
    increaseFontSizeInternal(titles);
    var subTitles = document.getElementById("subTitle")
    increaseFontSizeInternal(subTitles);

}

function decreaseFontSizeInternal(list) {
    for (i = 0; i < list.length; i++) {
        var s = 12;
        if (list[i].style.fontSize) {
            s = parseInt(list[i].style.fontSize.replace("px", ""));
        }
        if (s != min) {
            s -= 1;
        }
        list[i].style.fontSize = s + "px"
    }
}

function decreaseFontSize() {
    var paragraph = document.getElementsByTagName('p');
    decreaseFontSizeInternal(paragraph);
    var links = document.getElementsByTagName('a');
    decreaseFontSizeInternal(links);
    var titles = document.getElementsByTagName("h3")
    decreaseFontSizeInternal(titles);
    var subTitles = document.getElementById("subTitle")
    decreaseFontSizeInternal(subTitles);
}
window.onload = function () {
    loadData('relevantTime1', dadosExperiencia.first.tempo);
    loadData('relevantPosition1', dadosExperiencia.first.empresa);
    loadData('relevantCompany1', dadosExperiencia.first.cargo);
    loadData('relevantSkills1', dadosExperiencia.first.atribuicoes);

    loadData('relevantTime2', dadosExperiencia.second.tempo);
    loadData('relevantPosition2', dadosExperiencia.second.empresa);
    loadData('relevantCompany2', dadosExperiencia.second.cargo);
    loadData('relevantSkills2', dadosExperiencia.second.atribuicoes);

    loadData('relevantTime3', dadosExperiencia.third.tempo);
    loadData('relevantPosition3', dadosExperiencia.third.empresa);
    loadData('relevantCompany3', dadosExperiencia.third.cargo);
    loadData('relevantSkills3', dadosExperiencia.third.atribuicoes);

    const nightMode = document.querySelector('#switch-shadow');

    // ao clicar mudaremos as cores
    nightMode.addEventListener('click', () => {
        // adiciona a classe `night-mode` ao html
        document.documentElement.classList.toggle('night-mode');
    });



};