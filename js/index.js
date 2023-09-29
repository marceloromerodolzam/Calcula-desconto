let valor = document.getElementById('inpValor');
let desconto = document.getElementById('inpDes');
let inpTxt = document.getElementById('inpTxt');
let btn = document.getElementById('btnCal');

btn.addEventListener('click', function(){
    
    const inpValor = Number(valor.value);
    const inpDesconto = desconto.value;
    

    /* armazena */
    let resultado;


    switch(inpValor){
        case 1000:
            resultado = 0.2;
        break;

        case 500:
            resultado = 0.1;
        break;

        default:
            if(inpValor < 1000){

                resultado = 0.1;

            }else if(inpValor > 2000){

                resultado = 0.3;

            }else{

                resultado = 0;

            }
    }

    const calculoValor = inpValor - (inpValor * resultado);
    const calculoDes = resultado * 100;
    
    if(valor.value === ''){

        alert('Digite um número no input "Valor"');

    }else{

        if(calculoDes === 10){

            desconto.value = '10%'

        }else if(calculoDes === 20){

            desconto.value = '20%'

        }else if(calculoDes === 30){

            desconto.value = '30%'

        }else{

            desconto.value = 'Sem desconto';

        }

        inpTxt.value = calculoValor;
        
    }

});