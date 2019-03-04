//funcao para fazer API requests
function getJSON(url) {
    let Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

let urlExperiencia = 'http://demo9624895.mockable.io/experiencia';
let urlHabilidades = 'https://demo9624895.mockable.io/habilidades-tecnicas';

let dadosHabilidades = JSON.parse(getJSON(urlHabilidades));
let dadosExperiencia = JSON.parse(getJSON(urlExperiencia));

//funcao para atualizar o front com os dados que vieram da API
function loadData(element, data) {
    return document.getElementById(element).innerHTML = data;
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

    loadData('language1', dadosHabilidades.first.linguagem);
    loadData('experience1', dadosHabilidades.first.tempo);
    loadData('level1', dadosHabilidades.first.nivel);

    loadData('language2', dadosHabilidades.second.linguagem);
    loadData('experience2', dadosHabilidades.second.tempo);
    loadData('level2', dadosHabilidades.second.nivel);

    loadData('language3', dadosHabilidades.third.linguagem);
    loadData('experience3', dadosHabilidades.third.tempo);
    loadData('level3', dadosHabilidades.third.nivel);

    const nightMode = document.querySelector('#switch-shadow');

    // ao clicar mudaremos as cores
    nightMode.addEventListener('click', () => {
        // adiciona a classe `night-mode` ao html
        document.documentElement.classList.toggle('night-mode');
    });
};


let min = 12;
let max = 32;

//funcao para aumentar o tamanho das letras 
function increaseFontSizeInternal(list) {
    for (i = 0; i < list.length; i++) {
        let s = 12;
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
    let paragraph = document.getElementsByTagName('p');
    increaseFontSizeInternal(paragraph);
    let links = document.getElementsByTagName('a');
    increaseFontSizeInternal(links);
    let titles = document.getElementsByTagName("h3")
    increaseFontSizeInternal(titles);
    let subTitles = document.getElementById("subTitle")
    increaseFontSizeInternal(subTitles);

}
//funcao para diminuir o tamanho das letras 
function decreaseFontSizeInternal(list) {
    for (i = 0; i < list.length; i++) {
        let s = 12;
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
    let paragraph = document.getElementsByTagName('p');
    decreaseFontSizeInternal(paragraph);
    let links = document.getElementsByTagName('a');
    decreaseFontSizeInternal(links);
    let titles = document.getElementsByTagName("h3")
    decreaseFontSizeInternal(titles);
    let subTitles = document.getElementById("subTitle")
    decreaseFontSizeInternal(subTitles);
}