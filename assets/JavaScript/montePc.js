
// VALORES DOS PROCESSADORES CAMPO PROCESSADOR

var celeron = 0;
var intelTwo = 0;
var proAmd = 0;

// celeron = parseFloat(celeron.replace(',','.'));
// intelTwo = parseFloat(intelTwo.replace(',','.'));
// proAmd = parseFloat(proAmd.replace(',','.'));

var valorCeleron = document.querySelector(".dois .valorCeleron");
var celeronRevisao = document.querySelector(".aescolher .valorCeleron");
var valorintelTwo = document.querySelector(".dois .valorintelTwo");
var intelTwoRevisao = document.querySelector(".aescolher .valorintelTwo");
var valorproAmd = document.querySelector(".dois .valorproAmd");
var proAmdRevisao = document.querySelector(".aescolher .valorproAmd");


// VALORES DAS PLACAS MAES 

var pMone = 0;
var pMtwo = 0;
var pMthree = 0;

var valorpMone = document.querySelector(".dois .valorpMone");
var pMoneRevisao = document.querySelector(".aescolher .valorpMone");
var valorpMtwo = document.querySelector(".dois .valorpMtwo");
var pMtwoRevisao = document.querySelector(".aescolher .valorpMtwo");
var valorpMthree = document.querySelector(".dois .valorpMthree");
var pMThreeRevisao = document.querySelector(".aescolher .valorpMthree");

// VALORES DAS PLACAS MAES AMD



//VALORES DAS MEMORIAS RAM

var memoriaOne = 0;
var memoriaTwo = 0;
var memoriaThree = 0;

var valormemoriaOne = document.querySelector(".dois .valormemoriaOne");
var memoriaOneRevisao = document.querySelector(".aescolher .valormemoriaOne");
var valormemoriaTwo = document.querySelector(".dois .valormemoriaTwo");
var memoriaTwoRevisao = document.querySelector(".aescolher .valormemoriaTwo");
var valormemoriaThree = document.querySelector(".dois .valormemoriaThree");
var memoriaThreeRevisao = document.querySelector(".aescolher .valormemoriaThree");



//VALORES DOS HDS SSDS 

var hdNumberOne = 0;
var hdNumberTwo = 0;
var hdNumberThree = 0;

var valorhdNumberOne = document.querySelector(".dois .valorhdNumberOne");
var hdNumberOneRevisao = document.querySelector(".aescolher .valorhdNumberOne");

var valorhdNumberTwo = document.querySelector(".dois .valorhdNumberTwo");
var hdNumberTwoRevisao = document.querySelector(".aescolher .valorhdNumberTwo");

var valorhdNumberThree = document.querySelector(".dois .valorhdNumberThree");
var hdNumberThreeRevisao = document.querySelector(".aescolher .valorhdNumberThree");


// VALORES DOS GABINETES


var GabinOne = 0;
var GabinTwo = 0;
var GabinThree = 0;

var valorGabiOne = document.querySelector(".dois .valorGabiOne");
var GabiOneRevisao = document.querySelector(".aescolher .valorGabiOne");

var valorGabiTwo = document.querySelector(".dois .valorGabiTwo");
var GabiTwoRevisao = document.querySelector(".aescolher .valorGabiTwo");

var valorGabiThree = document.querySelector(".dois .valorGabiThree");
var GabiThreeRevisao = document.querySelector(".aescolher .valorGabiThree");



// VALORES DA FONTE

var fonTeOne = 0;
var fonTeTwo = 0;
var fonTeThree = 0;

var valorFontesOne = document.querySelector(".dois .valorFontesOne");
var FontesOneRevisao = document.querySelector(".aescolher .valorFontesOne");

var valorFontesTwo = document.querySelector(".dois .valorFontesTwo");
var FontesTwoRevisao = document.querySelector(".aescolher .valorFontesTwo");

var valorFontesThree = document.querySelector(".dois .valorFontesThree");
var FontesThreeRevisao = document.querySelector(".aescolher .valorFontesThree");


//SOMATORIO DOS ITENS ESCOLHIDOS

var somaTorio = celeron + intelTwo + proAmd + pMone + pMtwo + pMthree + memoriaOne + memoriaTwo + memoriaThree + hdNumberOne + hdNumberTwo + hdNumberThree + GabinOne + GabinTwo + GabinThree + fonTeOne + fonTeTwo + fonTeThree;
var resulTado = document.getElementById("resulTado");
resulTado.innerHTML = `<P>${somaTorio}</P>`

//funções

function pcdCeleron() {
    celeron = 3409.06;
    let processador = document.getElementById("pcD");
    let placaMae = document.getElementById("pM");
    processador = processador.style.display = "none";
    placaMae = placaMae.style.display = "flex";
    valorCeleron.innerHTML = `<p>Processador Intel core i7-12700KF: R$ ${celeron}</p>`;
    celeronRevisao.innerHTML = `<p>Processador Intel core i7-12700KF: R$ ${celeron}</p>`;
}

function pcDnumberTwo() {
    intelTwo = 1817.05;
    let processador = document.getElementById("pcD");
    let placaMae = document.getElementById("pM");
    processador = processador.style.display = "none";
    placaMae = placaMae.style.display = "flex"; 
    valorintelTwo.innerHTML = `<p>Processador Intel core i5-12400: R$ ${intelTwo}</p>`;
    intelTwoRevisao.innerHTML = `<p>Processador Intel core i5-12400: R$ ${intelTwo}</p>`;
}


function pcdAmd() {
    proAmd = 1420.45;
    let processador = document.getElementById("pcD");
    let placaMaeamd = document.getElementById("pMaMd");
    processador = processador.style.display = "none";
    placaMaeamd = placaMaeamd.style.display = "flex";
    valorproAmd.innerHTML = `<p>Processador Ryzen 5 5600G: R$ ${proAmd}</p>`;
    proAmdRevisao.innerHTML = `<p>Processador Ryzen 5 5600G: R$ ${proAmd}</p>`;

}

function placaMaeone() {
    pMone = 1022.61;
    let placaMae = document.getElementById("pM");
    let placaMaeamd = document.getElementById("pMaMd");
    let memoria = document.getElementById("memoria");
    placaMae = placaMae.style.display = "none";
    placaMaeamd = placaMaeamd.style.display = "none";
    memoria = memoria.style.display = "flex";
    valorpMone.innerHTML = `<p>Placa mãe MSI PRO H610M-G: R$ ${pMone}</p>`;
    pMoneRevisao.innerHTML = `<p>Placa mãe MSI PRO H610M-G: R$ ${pMone}</p>`;

}

function placaMaetwo() {

    pMtwo = Number(2045.34);
    let placaMae = document.getElementById("pM");
    let placaMaeamd = document.getElementById("pMaMd");
    let memoria = document.getElementById("memoria");
    placaMae = placaMae.style.display = "none";
    placaMaeamd = placaMaeamd.style.display = "none";
    memoria = memoria.style.display = "flex";
    valorpMtwo.innerHTML = `<p>Placa mãe MSI PRO B360M-A: R$ ${pMtwo}</p>`;
    pMtwoRevisao.innerHTML = `<p>Placa mãe MSI PRO B360M-A: R$ ${pMtwo}</p>`;
}



function placaMaethree() {

    pMthree = 3468.07;
    let placaMae = document.getElementById("pM");
    let placaMaeamd = document.getElementById("pMaMd");
    let memoria = document.getElementById("memoria");
    placaMae = placaMae.style.display = "none";
    placaMaeamd = placaMaeamd.style.display = "none";
    memoria = memoria.style.display = "flex";
    valorpMthree.innerHTML = `<p>Placa mãe BIOSTAR Z690GTA: R$ ${pMthree}</p>`;
    pMThreeRevisao.innerHTML = `<p>Placa mãe BIOSTAR Z690GTA: R$ ${pMthree}</p>`;
}

function placaMaeAMD1(){
    pMone = 605.57;
    let placaMae = document.getElementById("pM");
    let placaMaeamd = document.getElementById("pMaMd");
    let memoria = document.getElementById("memoria");
    placaMae = placaMae.style.display = "none";
    placaMaeamd = placaMaeamd.style.display = "none";
    memoria = memoria.style.display = "flex";
    valorpMone.innerHTML = `<p>Placa mãe MSI PRO A520M-A PRO R$ ${pMone}</p>`;
    pMoneRevisao.innerHTML = `<p>Placa mãe MSI PRO A520M-A PRO R$ ${pMone}</p>`;
}

function placaMaeAMD2(){
    pMtwo = Number(1590.80);
    let placaMae = document.getElementById("pM");
    let placaMaeamd = document.getElementById("pMaMd");
    let memoria = document.getElementById("memoria");
    placaMae = placaMae.style.display = "none";
    placaMaeamd = placaMaeamd.style.display = "none";
    memoria = memoria.style.display = "flex";
    valorpMtwo.innerHTML = `<p>Placa mãe MSI MPG B550M gaming plus: R$ ${pMtwo}</p>`;
    pMtwoRevisao.innerHTML = `<p>Placa mãe MSI MPG B550M gaming plus: R$ ${pMtwo}</p>`;
}
function placaMaeAMD3(){
    pMthree = 3408.98;
    let placaMae = document.getElementById("pM");
    let placaMaeamd = document.getElementById("pMaMd");
    let memoria = document.getElementById("memoria");
    placaMae = placaMae.style.display = "none";
    placaMaeamd = placaMaeamd.style.display = "none";
    memoria = memoria.style.display = "flex";
    valorpMthree.innerHTML = `<p>Placa mãe ASROCK X570 razer edition: R$ ${pMthree}</p>`;
    pMThreeRevisao.innerHTML = `<p>Placa mãe ASROCK X570 razer edition: R$ ${pMthree}</p>`;
}

function memoryOne() {
    memoriaOne = 144.89;
    let hdSsd = document.getElementById("hdSsd");
    let memoria = document.getElementById("memoria");
    hdSsd = hdSsd.style.display = "flex";
    memoria = memoria.style.display = "none";
    valormemoriaOne.innerHTML = `<p>Memoria Duex 4gb DDR4 2400MHZ: R$ ${memoriaOne}</p>`;
    memoriaOneRevisao.innerHTML = `<p>Memoria Duex 4gb DDR4 2400MHZ: R$ ${memoriaOne}</p>`;

}

function memoryTwo() {
    memoriaTwo = 227.26;
    let hdSsd = document.getElementById("hdSsd");
    let memoria = document.getElementById("memoria");
    hdSsd = hdSsd.style.display = "flex";
    memoria = memoria.style.display = "none";
    valormemoriaTwo.innerHTML = `<p>Memoria ADATA 8gb ddr4 3200MHZ: R$ ${memoriaTwo}</p>`;
    memoriaTwoRevisao.innerHTML = `<p>Memoria ADATA 8gb ddr4 3200MHZ: R$ ${memoriaTwo}</p>`;
}

function memoryThree() {
    memoriaThree = 621;
    let hdSsd = document.getElementById("hdSsd");
    let memoria = document.getElementById("memoria");
    hdSsd = hdSsd.style.display = "flex";
    memoria = memoria.style.display = "none";

    valormemoriaThree.innerHTML = `<p>Memoria ADATA 16gb ddr4 3200MHZ: R$ ${memoriaThree}</p>`;
    memoriaThreeRevisao.innerHTML = `<p>Memoria ADATA 16gb ddr4 3200MHZ: R$ ${memoriaThree}</p>`;
}




function hDsone() {

    hdNumberOne = 4999.89;
    let hdSsd = document.getElementById("hdSsd");
    let gaBi = document.getElementById("gaBi");
    hdSsd = hdSsd.style.display = "none";
    gaBi = gaBi.style.display = "flex";
    valorhdNumberOne.innerHTML = `<p>HD Seagate 16TB: R$ ${hdNumberOne}</p>`;
    hdNumberOneRevisao.innerHTML = `<p>HD Seagate 16TB: R$ ${hdNumberOne}</p>`;
}



function hDstwo() {
    hdNumberTwo = 1022.61;
    let hdSsd = document.getElementById("hdSsd");
    let gaBi = document.getElementById("gaBi");
    hdSsd = hdSsd.style.display = "none";
    gaBi = gaBi.style.display = "flex";
    valorhdNumberTwo.innerHTML = `<p>HD WD 2TB: R$ ${hdNumberTwo}</p>`;
    hdNumberTwoRevisao.innerHTML = `<p>HD WD 2TB: R$ ${hdNumberTwo}</p>`;
}



function hDsthree() {
    hdNumberThree = 551.02
    let hdSsd = document.getElementById("hdSsd");
    let gaBi = document.getElementById("gaBi");
    hdSsd = hdSsd.style.display = "none";
    gaBi = gaBi.style.display = "flex";
    valorhdNumberThree.innerHTML = `<p>SSD Mancer 1TB: R$ ${hdNumberThree}</p>`;
    hdNumberThreeRevisao.innerHTML = `<p>SSD Mancer 1TB: R$ ${hdNumberThree}</p>`;
}


function gabiNeteOne() {
    GabinOne = 226.13;
    let gaBi = document.getElementById("gaBi");
    let fonTs = document.getElementById("fonTs");
    gaBi = gaBi.style.display = "none";
    fonTs = fonTs.style.display = "flex";
    valorGabiOne.innerHTML = `<p>Gabinete TGT RGB: R$ ${GabinOne}</p>`;
    GabiOneRevisao.innerHTML = `<p>Gabinete TGT RGB: R$ ${GabinOne}</p>`;
}


function gabiNeteTwo() {
    GabinTwo = 1438.52;
    let gaBi = document.getElementById("gaBi");
    let fonTs = document.getElementById("fonTs");
    gaBi = gaBi.style.display = "none";
    fonTs = fonTs.style.display = "flex";
    valorGabiTwo.innerHTML = `<p>Gabinete LIAN com 4 fans: R$ ${GabinTwo}</p>`;
    GabiTwoRevisao.innerHTML = `<p>Gabinete LIAN com 4 fans: R$ ${GabinTwo}</p>`;
}



function gabiNeteThree() {
    GabinThree = 2499.89;
    let gaBi = document.getElementById("gaBi");
    let fonTs = document.getElementById("fonTs");
    gaBi = gaBi.style.display = "none";
    fonTs = fonTs.style.display = "flex";
    valorGabiThree.innerHTML = `<p>Gabinete cougar: R$ ${GabinThree}</p>`;
    GabiThreeRevisao.innerHTML = `<p>Gabinete cougar: R$ ${GabinThree}</p>`;
}




function fonTesOne() {

    fonTeOne = 965.80;
    let fonTs = document.getElementById("fonTs");
    let reviSao = document.getElementById("reviSao");
    let partefinal = document.querySelector(".partefinal");
    partefinal = partefinal.style.display = "block";
    let partefinalTwo = document.querySelector(".dois .partefinal");
    partefinalTwo = partefinalTwo.style.display = "block";
    fonTs = fonTs.style.display = "none";
    reviSao = reviSao.style.display = "flex";
    valorFontesOne.innerHTML = `<p>Fonte CORSAIR RM550X: R$ ${fonTeOne}</p>`;
    FontesOneRevisao.innerHTML = `<p>Fonte CORSAIR RM550X: R$ ${fonTeOne}</p>`;
    var somaTorio = (celeron + intelTwo + proAmd + pMone + pMtwo + pMthree + memoriaOne + memoriaTwo + memoriaThree + hdNumberOne + hdNumberTwo + hdNumberThree + GabinOne + GabinTwo + GabinThree + fonTeOne + fonTeTwo + fonTeThree).toFixed(2);
    var resulTadoCenter = document.querySelector(".dois .resulTado"); //preço a prazo
    resulTadoCenter.innerHTML = `<P>R$ ${somaTorio}</P>`
    let PrecoAvista = document.querySelector('.dois .partefinal .price .PrecoAvista');
    let divisao = document.querySelector('.dois .partefinal .price .dividido')
    let calculoOne;
    let calculoTwo;
    let calculothree;
    calculoOne = (somaTorio * 0.12).toFixed(2);
    calculoTwo = (somaTorio - calculoOne).toFixed(2);
    calculothree = (somaTorio/12).toFixed(2)
    PrecoAvista.innerHTML = `R$ ${calculoTwo}`
    divisao.innerHTML = `R$ ${calculothree}`
}

function fonTesTwo() {
    fonTeTwo = 1232.95;
    let fonTs = document.getElementById("fonTs");
    let reviSao = document.getElementById("reviSao");
    let partefinal = document.querySelector(".partefinal");
    partefinal = partefinal.style.display = "block";
    let partefinalTwo = document.querySelector(".dois .partefinal");
    partefinalTwo = partefinalTwo.style.display = "block";
    fonTs = fonTs.style.display = "none";
    reviSao = reviSao.style.display = "flex";
    valorFontesTwo.innerHTML = `<p>Fonte Corsair RM850X: R$ ${fonTeTwo}</p>`;
    FontesTwoRevisao.innerHTML = `<p>Fonte Cosair RM850X: R$ ${fonTeTwo}</p>`;
    var somaTorio = (celeron + intelTwo + proAmd + pMone + pMtwo + pMthree + memoriaOne + memoriaTwo + memoriaThree + hdNumberOne + hdNumberTwo + hdNumberThree + GabinOne + GabinTwo + GabinThree + fonTeOne + fonTeTwo + fonTeThree).toFixed(2);
    var resulTadoCenter = document.querySelector(".dois .resulTado"); //preço a prazo
    resulTadoCenter.innerHTML = `<P>R$ ${somaTorio}</P>`
    let PrecoAvista = document.querySelector('.dois .partefinal .price .PrecoAvista');
    let divisao = document.querySelector('.dois .partefinal .price .dividido')
    let calculoOne;
    let calculoTwo;
    let calculothree;
    calculoOne = (somaTorio * 0.12).toFixed(2);
    calculoTwo = (somaTorio - calculoOne).toFixed(2);
    calculothree = (somaTorio/12).toFixed(2)
    PrecoAvista.innerHTML = `R$ ${calculoTwo}`
    divisao.innerHTML = `R$ ${calculothree}`
}
function fonTesThree() {
    fonTeThree = 727.15;
    let fonTs = document.getElementById("fonTs");
    let reviSao = document.getElementById("reviSao");
    let partefinal = document.querySelector(".partefinal");
    partefinal = partefinal.style.display = "block";
    let partefinalTwo = document.querySelector(".dois .partefinal");
    partefinalTwo = partefinalTwo.style.display = "block";
    fonTs = fonTs.style.display = "none";
    reviSao = reviSao.style.display = "flex";
    valorFontesThree.innerHTML = `<p>Fonte NZXT C750: R$ ${fonTeThree}</p>`;
    FontesThreeRevisao.innerHTML = `<p>Fonte NZXT C750: R$ ${fonTeThree}</p>`;
    var somaTorio = (celeron + intelTwo + proAmd + pMone + pMtwo + pMthree + memoriaOne + memoriaTwo + memoriaThree + hdNumberOne + hdNumberTwo + hdNumberThree + GabinOne + GabinTwo + GabinThree + fonTeOne + fonTeTwo + fonTeThree).toFixed(2);
    var resulTadoCenter = document.querySelector(".dois .resulTado"); //preço a prazo
    resulTadoCenter.innerHTML = `<P>R$ ${somaTorio}</P>`
    let PrecoAvista = document.querySelector('.dois .partefinal .price .PrecoAvista');
    let divisao = document.querySelector('.dois .partefinal .price .dividido')
    let calculoOne;
    let calculoTwo;
    let calculothree;
    calculoOne = (somaTorio * 0.12).toFixed(2);
    calculoTwo = (somaTorio - calculoOne).toFixed(2);
    calculothree = (somaTorio/12).toFixed(2)
    PrecoAvista.innerHTML = `R$ ${calculoTwo}`
    divisao.innerHTML = `R$ ${calculothree}`
}
