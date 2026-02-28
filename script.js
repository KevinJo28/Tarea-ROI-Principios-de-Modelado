



const beneficioNeto = document.getElementById("neto");
const roi = document.getElementById("roi");

function BeneficioNeto(ingresosTotales, gastosTotales) {
    beneficioNeto.innerHTML =  `$ ${(ingresosTotales - gastosTotales).toLocaleString('en-US')}`
    return ingresosTotales - gastosTotales
}

function Roi(BeneficioNeto) {

    roi.innerHTML =  `%${ ((BeneficioNeto / 135000) * 100).toFixed(2)}`
    
}

Roi(BeneficioNeto(175000, 135000))


