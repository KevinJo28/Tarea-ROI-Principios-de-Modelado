const ingresosAhorros = 220000;
const inversionGastos = 215000;
const inversionTotal = 165000;

const beneficioNeto2 = ingresosAhorros - inversionGastos;
const roi2 = (beneficioNeto2 / inversionTotal) * 100;

document.getElementById("neto2").innerHTML = "$" + beneficioNeto2.toLocaleString('en-US');
document.getElementById("roi2").innerHTML = roi2.toFixed(2) + "%";