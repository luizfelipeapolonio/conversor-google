const operacoes = window.document.getElementById('selmedidas');
const selnum1 = window.document.getElementById('selnum1');
const selnum2 = window.document.getElementById('selnum2');
const num1 = window.document.getElementById('num1');
const num2 = window.document.getElementById('num2');
const formulas = window.document.getElementById('formulas');

let comprimento = ['Centímetro',  'Metro', 'Quilômetro', 'Milha',
                   'Milímetro', 'Jarda', 'Pé', 'Polegada'];

let temperatura = ['Fahrenheit', 'Celsius', 'Kelvin'];

let arrayIndexSelect1 = [];
let arrayIndexSelect2 = [];
let penVal1;
let penVal2;

/* Carrega os selects de baixo de acordo com o primeiro */
function carregarSelect() {
    let opTexto = operacoes.options[operacoes.selectedIndex].text;

    if(opTexto === 'Comprimento'){

        limpaSelects();
        limpaInputs();

        comprimento.forEach((item) => {
            let options = document.createElement('option');
            options.text = `${item}`;
            selnum1.appendChild(options);
        })

        comprimento.forEach((item) => {
            let options = document.createElement('option');
            options.text = `${item}`;
            selnum2.appendChild(options);
        })
    }

    if(opTexto === 'Temperatura') {

        limpaSelects();
        limpaInputs();

        temperatura.forEach((item) => {
            let options = document.createElement('option');
            options.text = `${item}`;
            selnum1.appendChild(options);
        })

        temperatura.forEach((item) => {
            let options = document.createElement('option');
            options.text = `${item}`;
            selnum2.appendChild(options);
        })
    }

    selnum1.selectedIndex = 1;
}

function limpaSelects() {
    selnum1.innerText = '';
    selnum2.innerText = '';
}

function limpaArrays() {
    arrayIndexSelect1 = [];
    arrayIndexSel1();

    arrayIndexSelect2 = [];
    arrayIndexSel2();
}

function limpaInputs() {
    num1.value = '';
    num2.value = '';
}

/* Função que verifica se os selects são iguais */
function verificaOp() {
    let indexSelNum1 = selnum1.options[selnum1.selectedIndex].index;
    let indexSelNum2 = selnum2.options[selnum2.selectedIndex].index;
    
    if(indexSelNum1 == indexSelNum2){
        return true;
    }else {
        return false;
    }
    
}

/* Preenchendo os arrays com a posição de cada option selecionado */
function arrayIndexSel1() {
    arrayIndexSelect1.push(selnum1.selectedIndex);
    console.log(`Array Sel 1: ${arrayIndexSelect1}`);
}

function arrayIndexSel2() {
    arrayIndexSelect2.push(selnum2.selectedIndex);
    console.log(`Array Sel 2: ${arrayIndexSelect2}`);
}

/* Armazenando a penúltima posição de cada option selecionado */
function penultimoValSel1() {
    penVal1 = arrayIndexSelect1[arrayIndexSelect1.length - 2];
    console.log(`Penúltimo valor: ${penVal1}`);
    return penVal1;
}

function penultimoValSel2() {
    penVal2 = arrayIndexSelect2[arrayIndexSelect2.length - 2];
    console.log(`Penúltimo valor 2: ${penVal2}`);
    return penVal2;
}

/* Função que realiza as trocas dinâmicas */
function trocarOp1() {
    let op = verificaOp();

    if(op === true){
        selnum2.selectedIndex = penultimoValSel1();
        arrayIndexSelect2.push(selnum2.selectedIndex); //registra no array o index do valor que foi trocado
    }
}

function trocarOp2() {
    let op = verificaOp();

    if(op === true){
        selnum1.selectedIndex = penultimoValSel2();
        arrayIndexSelect1.push(selnum1.selectedIndex);
    }
}

/* Realiza as operações de conversão */
function Operacao1() {
    let txtselect1 = selnum1.options[selnum1.selectedIndex].text;
    let txtselect2 = selnum2.options[selnum2.selectedIndex].text;
    let n1 = Number(num1.value);
    let resultado;

   /* ========== Metro/Centímetro ========== */
   if(txtselect1 === 'Metro' && txtselect2 === 'Centímetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 100</p>';

        resultado = n1 * 100;
        num2.value = resultado;

        console.log(`Metro para centímetro: ${resultado}`);

    }else if (txtselect1 === 'Centímetro' && txtselect2 === 'Metro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 100</p>'

        resultado = n1 / 100;
        num2.value = resultado;
        
        console.log(`Centímetro para metros: ${resultado}`);
    
    /* ========== Metro/Quilômetro ========== */
    }else if(txtselect1 === 'Metro' && txtselect2 === 'Quilômetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 1000</p>'

        resultado = n1 / 1000;
        num2.value = resultado;

    }else if(txtselect1 === 'Quilômetro' && txtselect2 === 'Metro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Mulitplique o valor do comprimento por 1000</p>'

        resultado = n1 * 1000;
        num2.value = resultado;

    /* ========== Metro/Milha ========== */
    }else if(txtselect1 === 'Metro' && txtselect2 === 'Milha'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um resultado aproximado, divida o valor do comprimento por 1609</p>'

        resultado = n1 / 1609;
        num2.value = resultado.toFixed(9);

    }else if(txtselect1 === 'Milha' && txtselect2 === 'Metro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um resultado aproximado, multiplique o valor do comprimento por 1609</p>'

        resultado = n1 * 1609;
        num2.value = resultado;

    /* ========== Metro/Milímetro ========== */    
    }else if(txtselect1 === 'Metro' && txtselect2 === 'Milímetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 1000</p>';

        resultado = n1 * 1000;
        num2.value = resultado;

    }else if(txtselect1 === 'Milímetro' && txtselect2 === 'Metro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 1000</p>';

        resultado = n1 / 1000;
        num2.value = resultado;
    
    /* ========== Metro/Jarda ========== */
    }else if(txtselect1 === 'Metro' && txtselect2 === 'Jarda'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um resultado aproximado, multiplique o valor do comprimento por 1,094</p>';

        resultado = n1 * 1.094;
        num2.value = resultado.toFixed(5);

    }else if(txtselect1 === 'Jarda' && txtselect2 === 'Metro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um resultado aproximado, divida o valor do comprimento por 1,094</p>';

        resultado = n1 / 1.094;
        num2.value = resultado.toFixed(4);

    /* ========== Metro/Pé ========== */    
    }else if(txtselect1 === 'Metro' && txtselect2 === 'Pé'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um resultado aproximado, multiplique o valor do comprimento por 3,281</p>';

        resultado = n1 * 3.281;
        num2.value = resultado.toFixed(5);

    }else if(txtselect1 === 'Pé' && txtselect2 === 'Metro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um resultado aproximado, divida o valor do comprimento por 3,281</p>';

        resultado = n1 / 3.281;
        num2.value = resultado.toFixed(4);
    
    /* ========== Metro/Polegada ========== */
    }else if(txtselect1 === 'Metro' && txtselect2 === 'Polegada'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 39,37</p>';

        resultado = n1 * 39.37;
        num2.value = resultado.toFixed(2);

    }else if(txtselect1 === 'Polegada' && txtselect2 === 'Metro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 39,37</p>';

        resultado = n1 / 39.37;
        num2.value = resultado.toFixed(4);

    /* ========== Centímetro/Quilômetro ========== */
    }else if(txtselect1 === 'Centímetro' && txtselect2 === 'Quilômetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 100000</p>';

        resultado = n1 / 100000;
        num2.value = resultado;

    }else if(txtselect1 === 'Quilômetro' && txtselect2 === 'Centímetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 100000</p>';

        resultado = n1 * 100000;
        num2.value = resultado;
    
    /* ========== Centímetro/Milha ========== */
    }else if(txtselect1 === 'Centímetro' && txtselect2 === 'Milha'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um valor aproximado, divida o valor do comprimento por 160900</p>';

        resultado = n1 / 160900;
        num2.value = resultado.toFixed(9);

    }else if(txtselect1 === 'Milha' && txtselect2 === 'Centímetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um valor aproximado, multiplique o valor do comprimento por 160900</p>';

        resultado = n1 * 160900;
        num2.value = resultado;

    /* ========== Centímetro/Milímetro ========== */
    }else if(txtselect1 === 'Centímetro' && txtselect2 === 'Milímetro'){
        
        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Mulitplique o valor do comprimento por 10</p>';

        resultado = n1 * 10;
        num2.value = resultado;

    }else if(txtselect1 === 'Milímetro' && txtselect2 === 'Centímetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 10</p>';

        resultado = n1 / 10;
        num2.value = resultado;
    
    /* ========== Centímetro/Jarda ========== */
    }else if(txtselect1 === 'Centímetro' && txtselect2 === 'Jarda'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 91,44</p>';

        resultado = n1 / 91.44;
        num2.value = resultado.toFixed(7);

    }else if(txtselect1 === 'Jarda' && txtselect2 === 'Centímetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 91,44</p>';

        resultado = n1 * 91.44;
        num2.value = resultado;
    
    /* ========== Centímetro/Pé ========== */
    }else if(txtselect1 === 'Centímetro' && txtselect2 === 'Pé'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 30,48</p>';

        resultado = n1 / 30.48;
        num2.value = resultado.toFixed(7);

    }else if(txtselect1 === 'Pé' && txtselect2 === 'Centímetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 30,48</p>';

        resultado = n1 * 30.48;
        num2.value = resultado;

    /* ========== Centímetro/Polegada ========== */
    }else if(txtselect1 === 'Centímetro' && txtselect2 === 'Polegada'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 2,54</p>';

        resultado = n1 / 2.54;
        num2.value = resultado.toFixed(6);

    }else if(txtselect1 === 'Polegada' && txtselect2 === 'Centímetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 2,54</p>';

        resultado = n1 * 2.54;
        num2.value = resultado;
    
    /* ========== Quilômetro/Milha ========== */
    }else if(txtselect1 === 'Quilômetro' && txtselect2 === 'Milha'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um resultado aproximado, divida o valor do comprimento por 1,609</p>';

        resultado = n1 / 1.609;
        num2.value = resultado.toFixed(6);

    }else if(txtselect1 === 'Milha' && txtselect2 === 'Quilômetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um resultado aproximado, multiplique o valor do comprimento por 1,609</p>';

        resultado = n1 * 1.609;
        num2.value = resultado.toFixed(4);

    /* ========== Quilômetro/Milímetro ========== */
    }else if(txtselect1 === 'Quilômetro' && txtselect2 === 'Milímetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 1e+6</p>';

        resultado = n1 * Math.pow(10, 6);
        num2.value = resultado;

    }else if(txtselect1 === 'Milímetro' && txtselect2 === 'Quilômetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 1e+6</p>';

        resultado = n1 / Math.pow(10, 6);
        num2.value = resultado;

    /* ========== Quilômetro/Jarda ========== */    
    }else if(txtselect1 === 'Quilômetro' && txtselect2 === 'Jarda'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um resultado aproximado, multiplique o valor do comprimento por 1094</p>';

        resultado = n1 * 1094;
        num2.value = resultado;

    }else if(txtselect1 === 'Jarda' && txtselect2 === 'Quilômetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um resultado aproximado, divida o valor do comprimento por 1094</p>';

        resultado = n1 / 1094;
        num2.value = resultado.toFixed(7);
    
    /* ========== Quilômetro/Pé ========== */
    }else if(txtselect1 === 'Quilômetro' && txtselect2 === 'Pé'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um resultado aproximado, multiplique o valor do comprimento por 3281</p>';

        resultado = n1 * 3281;
        num2.value = resultado;

    }else if(txtselect1 === 'Pé' && txtselect2 === 'Quilômetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um resultado aproximado, divida o valor do comprimento por 3281</p>';

        resultado = n1 / 3281;
        num2.value = resultado.toFixed(7);

    /* ========== Quilômetro/Polegada ========== */
    }else if(txtselect1 === 'Quilômetro' && txtselect2 === 'Polegada'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um resultado aproximado, multiplique o valor do comprimento por 39370</p>';

        resultado = n1 * 39370;
        num2.value = resultado;

    }else if(txtselect1 === 'Polegada' && txtselect2 === 'Quilômetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um resultado aproximado, divida o valor do comprimento por 39370</p>';

        resultado = n1 / 39370;
        num2.value = resultado.toFixed(7);
    
    /* ========== Milha/Milímetro ========== */
    }else if(txtselect1 === 'Milha' && txtselect2 === 'Milímetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um resultado aproximado, multiplique o valor do comprimento por 1,609e+6</p>';

        resultado = n1 * 1609000;
        num2.value = resultado;

    }else if(txtselect1 === 'Milímetro' && txtselect2 === 'Milha'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Para um resultado aproximado, divida o valor do comprimento por 1,609e+6</p>';

        resultado = n1 / 1609000;
        num2.value = resultado.toFixed(8);
    
    /* ========== Milha/Jarda ========== */
    }else if(txtselect1 === 'Milha' && txtselect2 === 'Jarda'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 1760</p>';

        resultado = n1 * 1760;
        num2.value = resultado;
        
    }else if(txtselect1 === 'Jarda' && txtselect2 === 'Milha'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 1760</p>';

        resultado = n1 / 1760;
        num2.value = resultado.toFixed(9);

    /* ========== Milha/Pé ========== */    
    }else if(txtselect1 === 'Milha' && txtselect2 === 'Pé'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 5280</p>';

        resultado = n1 * 5280;
        num2.value = resultado;

    }else if(txtselect1 === 'Pé' && txtselect2 === 'Milha'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 5280</p>';

        resultado = n1 / 5280;
        num2.value = resultado.toFixed(9);
    
    /* ========== Milha/Polegada ========== */ 
    }else if(txtselect1 === 'Milha' && txtselect2 === 'Polegada'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 63360</p>';

        resultado = n1 * 63360;
        num2.value = resultado;

    }else if(txtselect1 === 'Polegada' && txtselect2 === 'Milha'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 63360</p>';

        resultado = n1 / 63360;
        num2.value = resultado.toFixed(8);

    /* ========== Milímetro/Jarda ========== */         
    }else if(txtselect1 === 'Milímetro' && txtselect2 === 'Jarda'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 914,4</p>';

        resultado = n1 / 914.4;
        num2.value = resultado.toFixed(8);

    }else if(txtselect1 === 'Jarda' && txtselect2 === 'Milímetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 914,4</p>';

        resultado = n1 * 914.4;
        num2.value = resultado;
    
    /* ========== Milímetro/Pé ========== */
    }else if(txtselect1 === 'Milímetro' && txtselect2 === 'Pé'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 304,8</p>';

        resultado = n1 / 304.8;
        num2.value = resultado.toFixed(8);

    }else if(txtselect1 === 'Pé' && txtselect2 === 'Milímetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 304,8</p>';

        resultado = n1 * 304.8;
        num2.value = resultado;

    /* ========== Milímetro/Polegada ========== */    
    }else if(txtselect1 === 'Milímetro' && txtselect2 === 'Polegada'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 25,4</p>';

        resultado = n1 / 25.4;
        num2.value = resultado.toFixed(7);

    }else if(txtselect1 === 'Polegada' && txtselect2 === 'Milímetro'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 25,4</p>';

        resultado = n1 * 25.4;
        num2.value = resultado;

    /* ========== Jarda/Pé ========== */    
    }else if(txtselect1 === 'Jarda' && txtselect2 === 'Pé'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 3</p>';

        resultado = n1 * 3;
        num2.value = resultado;

    }else if(txtselect1 === 'Pé' && txtselect2 === 'Jarda'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 3</p>';

        resultado = n1 / 3;
        num2.value = resultado.toFixed(6);

    /* ========== Jarda/Polegada ========== */    
    }else if(txtselect1 === 'Jarda' && txtselect2 === 'Polegada'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 36</p>';

        resultado = n1 * 36;
        num2.value = resultado;

    }else if(txtselect1 === 'Polegada' && txtselect2 === 'Jarda'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 36</p>';

        resultado = n1 / 36;
        num2.value = resultado.toFixed(7);
    
    /* ========== Pé/Polegada ========== */
    }else if(txtselect1 === 'Pé' && txtselect2 === 'Polegada'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Multiplique o valor do comprimento por 12</p>';

        resultado = n1 * 12;
        num2.value = resultado;

    }else if(txtselect1 === 'Polegada' && txtselect2 === 'Pé'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>Divida o valor do comprimento por 12</p>';

        resultado = n1 / 12;
        num2.value = resultado.toFixed(7);

    }/* ==== Temperatura ==== */
    /* ========== Celsius/Fahrenheit ========== */
    else if(txtselect1 === 'Celsius' && txtselect2 === 'Fahrenheit'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>(0 ºC x 9/5) + 32 = 32 ºF</p>';

        resultado = (n1 * 9/5) + 32;
        num2.value = resultado; 

    }else if(txtselect1 === 'Fahrenheit' && txtselect2 === 'Celsius'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>(32 ºF - 32) x 5/9 = ºC</p>';

        resultado = (n1 - 32) * 5/9;
        num2.value = resultado.toFixed(2);

    /* ========== Celsius/Kelvin ========== */    
    }else if(txtselect1 === 'Celsius' && txtselect2 === 'Kelvin'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>0 ºC + 273,15 = 273,15 K</p>';

        resultado = n1 + 273.15;
        num2.value = resultado;

    }else if(txtselect1 === 'Kelvin' && txtselect2 === 'Celsius'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>0 K - 273,15 = -273,15 ºC</p>';

        resultado = n1 - 273.15;
        num2.value = resultado.toFixed(3);

    /* ========== Fahrenheit/Kelvin ========== */    
    }else if(txtselect1 === 'Fahrenheit' && txtselect2 === 'Kelvin'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>(0 ºF - 32) x 5/9 + 273,15 = 255,372 K</p>';

        resultado = (n1 - 32) * 5/9 + 273.15;
        num2.value = resultado.toFixed(3);

    }else if(txtselect1 === 'Kelvin' && txtselect2 === 'Fahrenheit'){

        formulas.innerHTML = '';
        formulas.innerHTML = '<p>(0 K - 273,15) x 9/5 + 32 = -459,7 ºF</p>';

        resultado = (n1 - 273.15) * 9/5 + 32;
        num2.value = resultado.toFixed(1);
    }

}

function Operacao2() {
    let txtselect1 = selnum1.options[selnum1.selectedIndex].text;
    let txtselect2 = selnum2.options[selnum2.selectedIndex].text;
    let n2 = Number(num2.value);
    let resultado;

    /* ========== Metro/Centímetro ========== */
    if(txtselect2 === 'Centímetro' && txtselect1 === 'Metro'){

        resultado = n2 / 100;
        num1.value = resultado;

    }else if(txtselect2 === 'Metro' && txtselect1 === 'Centímetro'){

        resultado = n2 * 100;
        num1.value = resultado;

    /* ========== Metro/Quilômetro ========== */
    }else if(txtselect2 === 'Quilômetro' && txtselect1 === 'Metro'){

        resultado = n2 * 1000;
        num1.value = resultado;

    }else if(txtselect2 === 'Metro' && txtselect1 === 'Quilômetro'){

        resultado = n2 / 1000;
        num1.value = resultado;
    
    /* ========== Metro/Milha ========== */
    }else if(txtselect2 === 'Milha' && txtselect1 === 'Metro'){

        resultado = n2 * 1609;
        num1.value = resultado;

    }else if(txtselect2 === 'Metro' && txtselect1 === 'Milha'){

        resultado = n2 / 1609;
        num1.value = resultado.toFixed(9);

    /* ========== Metro/Milímetro ========== */    
    }else if(txtselect2 === 'Milímetro' && txtselect1 === 'Metro'){

        resultado = n2 / 1000;
        num1.value = resultado;

    }else if(txtselect2 === 'Metro' && txtselect1 === 'Milímetro'){

        resultado = n2 * 1000;
        num1.value = resultado;
    
    /* ========== Metro/Jarda ========== */
    }else if(txtselect2 === 'Jarda' && txtselect1 === 'Metro'){
        
        resultado = n2 / 1.094;
        num1.value = resultado.toFixed(4);

    }else if(txtselect2 === 'Metro' && txtselect1 === 'Jarda'){

        resultado = n2 * 1.094;
        num1.value = resultado.toFixed(5);
    
    /* ========== Metro/Pé ========== */
    }else if(txtselect2 === 'Pé' && txtselect1 === 'Metro'){

        resultado = n2 / 3.281;
        num1.value = resultado.toFixed(4);

    }else if(txtselect2 === 'Metro' && txtselect1 === 'Pé'){

        resultado = n2 * 3.281;
        num1.value = resultado.toFixed(5);
    
    /* ========== Metro/Polegada ========== */
    }else if(txtselect2 === 'Polegada' && txtselect1 === 'Metro'){

        resultado = n2 / 39.37;
        num1.value = resultado.toFixed(4);

    }else if(txtselect2 === 'Metro' && txtselect1 === 'Polegada'){

        resultado = n2 * 39.37;
        num1.value = resultado;

    /* ========== Centímetro/Quilômetro ========== */
    }else if(txtselect2 === 'Quilômetro' && txtselect1 === 'Centímetro'){

        resultado = n2 * 100000;
        num1.value = resultado;

    }else if(txtselect2 === 'Centímetro' && txtselect1 === 'Quilômetro'){

        resultado = n2 / 100000;
        num1.value = resultado;
    
    /* ========== Centímetro/Milha ========== */
    }else if(txtselect2 === 'Milha' && txtselect1 === 'Centímetro'){

        resultado = n2 * 160900;
        num1.value = resultado;

    }else if(txtselect2 === 'Centímetro' && txtselect1 === 'Milha'){

        resultado = n2 / 160900;
        num1.value = resultado.toFixed(9);

    /* ========== Centímetro/Milímetro ========== */
    }else if(txtselect2 === 'Milímetro' && txtselect1 === 'Centímetro'){

        resultado = n2 / 10;
        num1.value = resultado;

    }else if(txtselect2 === 'Centímetro' && txtselect1 === 'Milímetro'){

        resultado = n2 * 10;
        num1.value = resultado;
    
    /* ========== Centímetro/Jarda ========== */
    }else if(txtselect2 === 'Jarda' && txtselect1 === 'Centímetro'){

        resultado = n2 * 91.44;
        num1.value = resultado;

    }else if(txtselect2 === 'Centímetro' && txtselect1 === 'Jarda'){

        resultado = n2 / 91.44;
        num1.value = resultado.toFixed(7);
    
    /* ========== Centímetro/Pé ========== */
    }else if(txtselect2 === 'Pé' && txtselect1 === 'Centímetro'){

        resultado = n2 * 30.48;
        num1.value = resultado;

    }else if(txtselect2 === 'Centímetro' && txtselect1 === 'Pé'){

        resultado = n2 / 30.48;
        num1.value = resultado.toFixed(7);

    /* ========== Centímetro/Polegada ========== */
    }else if(txtselect2 === 'Polegada' && txtselect1 === 'Centímetro'){

        resultado = n2 * 2.54;
        num1.value = resultado;

    }else if(txtselect2 === 'Centímetro' && txtselect1 === 'Polegada'){

        resultado = n2 / 2.54;
        num1.value = resultado.toFixed(6);
    
    /* ========== Quilômetro/Milha ========== */
    }else if(txtselect2 === 'Milha' && txtselect1 === 'Quilômetro'){

        resultado = n2 * 1.609;
        num1.value = resultado.toFixed(4);

    }else if(txtselect2 === 'Quilômetro' && txtselect1 === 'Milha'){

        resultado = n2 / 1.609;
        num1.value = resultado.toFixed(6);

    /* ========== Quilômetro/Milímetro ========== */
    }else if(txtselect2 === 'Milímetro' && txtselect1 === 'Quilômetro'){

        resultado = n2 / Math.pow(10, 6);
        num1.value = resultado;

    }else if(txtselect2 === 'Quilômetro' && txtselect1 === 'Milímetro'){

        resultado = n2 * Math.pow(10, 6);
        num1.value = resultado;
    
    /* ========== Quilômetro/Jarda ========== */  
    }else if(txtselect2 === 'Jarda' && txtselect1 === 'Quilômetro'){

        resultado = n2 / 1094;
        num1.value = resultado.toFixed(7);

    }else if(txtselect2 === 'Quilômetro' && txtselect1 === 'Jarda'){

        resultado = n2 * 1094;
        num1.value = resultado;
    
    /* ========== Quilômetro/Pé ========== */  
    }else if(txtselect2 === 'Pé' && txtselect1 === 'Quilômetro'){

        resultado = n2 / 3281;
        num1.value = resultado.toFixed(7);

    }else if(txtselect2 === 'Quilômetro' && txtselect1 === 'Pé'){

        resultado = n2 * 3281;
        num1.value = resultado;
    
    /* ========== Quilômetro/Polegada ========== */
    }else if(txtselect2 === 'Polegada' && txtselect1 === 'Quilômetro'){

        resultado = n2 / 39370;
        num1.value = resultado.toFixed(7);

    }else if(txtselect2 === 'Quilômetro' && txtselect1 === 'Polegada'){

        resultado = n2 * 39370;
        num1.value = resultado;
    
    /* ========== Milha/Milímetro ========== */
    }else if(txtselect2 === 'Milímetro' && txtselect1 === 'Milha'){

        resultado = n2 / 1609000;
        num1.value = resultado.toFixed(8);

    }else if(txtselect2 === 'Milha' && txtselect1 === 'Milímetro'){

        resultado = n2 * 1609000;
        num1.value = resultado;
    
    /* ========== Milha/Jarda ========== */
    }else if(txtselect2 === 'Jarda' && txtselect1 === 'Milha'){

        resultado = n2 / 1760;
        num1.value = resultado.toFixed(9);

    }else if(txtselect2 === 'Milha' && txtselect1 === 'Jarda'){

        resultado = n2 * 1760;
        num1.value = resultado; 

    /* ========== Milha/Pé ========== */    
    }else if(txtselect2 === 'Pé' && txtselect1 === 'Milha'){

        resultado = n2 / 5280;
        num1.value = resultado.toFixed(9);

    }else if(txtselect2 === 'Milha' && txtselect1 === 'Pé'){

        resultado = n2 * 5280;
        num1.value = resultado;
    
    /* ========== Milha/Polegada ========== */ 
    }else if(txtselect2 === 'Polegada' && txtselect1 === 'Milha'){

        resultado = n2 / 63360;
        num1.value = resultado.toFixed(8);

    }else if(txtselect2 === 'Milha' && txtselect1 === 'Polegada'){

        resultado = n2 * 63360;
        num1.value = resultado;

    /* ========== Milímetro/Jarda ========== */     
    }else if(txtselect2 === 'Jarda' && txtselect1 === 'Milímetro'){

        resultado = n2 * 914.4;
        num1.value = resultado;

    }else if(txtselect2 === 'Milímetro' && txtselect1 === 'Jarda'){

        resultado = n2 / 914.4;
        num1.value = resultado.toFixed(8);
    
    /* ========== Milímetro/Pé ========== */
    }else if(txtselect2 === 'Pé' && txtselect1 === 'Milímetro'){

        resultado = n2 * 304.8;
        num1.value = resultado;

    }else if(txtselect2 === 'Milímetro' && txtselect1 === 'Pé'){

        resultado = n2 / 304.8;
        num1.value = resultado.toFixed(8);
    
    /* ========== Milímetro/Polegada ========== */
    }else if(txtselect2 === 'Polegada' && txtselect1 === 'Milímetro'){

        resultado = n2 * 25.4;
        num1.value = resultado;

    }else if(txtselect2 === 'Milímetro' && txtselect1 === 'Polegada'){

        resultado = n2 / 25.4;
        num1.value = resultado.toFixed(7);
    
    /* ========== Jarda/Pé ========== */
    }else if(txtselect2 === 'Pé' && txtselect1 === 'Jarda'){

        resultado = n2 / 3;
        num1.value = resultado.toFixed(6);

    }else if(txtselect2 === 'Jarda' && txtselect1 === 'Pé'){

        resultado = n2 * 3;
        num1.value = resultado;
    
    /* ========== Jarda/Polegada ========== */
    }else if(txtselect2 === 'Polegada' && txtselect1 === 'Jarda'){

        resultado = n2 / 36;
        num1.value = resultado.toFixed(7);

    }else if(txtselect2 === 'Jarda' && txtselect1 === 'Polegada'){

        resultado = n2 * 36;
        num1.value = resultado;

    /* ========== Pé/Polegada ========== */    
    }else if(txtselect2 === 'Polegada' && txtselect1 === 'Pé'){

        resultado = n2 / 12;
        num1.value = resultado.toFixed(7);

    }else if(txtselect2 === 'Pé' && txtselect1 === 'Polegada'){

        resultado = n2 * 12;
        num1.value = resultado;
    
    }/* ==== Temperatura ==== */
    /* ========== Celsius/Fahrenheit ========== */
    else if(txtselect2 === 'Fahrenheit' && txtselect1 === 'Celsius'){

        resultado = (n2 - 32) * 5/9;
        num1.value = resultado.toFixed(2);

    }else if(txtselect2 === 'Celsius' && txtselect1 === 'Fahrenheit'){

        resultado = (n2 * 9/5) + 32;
        num1.value = resultado; 
    
    /* ========== Celsius/Kelvin ========== */
    }else if(txtselect2 === 'Kelvin' && txtselect1 === 'Celsius'){

        resultado = n2 - 273.15;
        num1.value = resultado.toFixed(3);

    }else if(txtselect2 === 'Celsius' && txtselect1 === 'Kelvin'){

        resultado = n2 + 273.15;
        num1.value = resultado;

    /* ========== Fahrenheit/Kelvin ========== */    
    }else if(txtselect2 === 'Kelvin' && txtselect1 === 'Fahrenheit'){

        resultado = (n2 - 273.15) * 9/5 + 32;
        num1.value = resultado.toFixed(1);

    }else if(txtselect2 === 'Fahrenheit' && txtselect1 === 'Kelvin'){

        resultado = (n2 - 32) * 5/9 + 273.15;
        num1.value = resultado.toFixed(3);
    }
}

/* Inicia os inputs com valores quando carrega a página e mudam as escalas */
function iniciaInputs() {
    let txtselect1 = selnum1.options[selnum1.selectedIndex].text;
    //let txtselect2 = selnum2.options[selnum2.selectedIndex].text;

    if(txtselect1 === 'Metro'){
        num1.value = 1;
    }

    if(txtselect1 === 'Celsius'){
        num1.value = 0;
    }
}

/* Atribuindo os eventos */
selnum1.addEventListener('input', arrayIndexSel1);
selnum1.addEventListener('input', penultimoValSel1);
selnum1.addEventListener('input', trocarOp1);
selnum1.addEventListener('input', Operacao1);

selnum2.addEventListener('input', arrayIndexSel2);
selnum2.addEventListener('input', penultimoValSel2);
selnum2.addEventListener('input', trocarOp2);
selnum2.addEventListener('input', Operacao1);

operacoes.addEventListener('change', limpaArrays);
operacoes.addEventListener('change', iniciaInputs);
operacoes.addEventListener('change', Operacao1);

num1.addEventListener('input', Operacao1);
num2.addEventListener('input', Operacao2);



/* Seleciona o texto quando clicar no input */
num1.addEventListener('click', function(e) {
    if(e.target.value.length != 0){
        e.target.select();
    }    
});

num2.addEventListener('click', function(e) {
    if(e.target.value.lenght != 0){
        e.target.select();
    }
});

/* Executando as funções que precisam ser executadas ao carregar a página */
carregarSelect();
verificaOp();
arrayIndexSel1();
arrayIndexSel2();
penultimoValSel1();
penultimoValSel2();
iniciaInputs();
Operacao1();