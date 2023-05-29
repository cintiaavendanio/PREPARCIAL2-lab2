function calcularCambio(event) {
  event.preventDefault();
  let cambio = 0;
  let cantPesosArg = document.getElementById("pesos").value;
  let monedaExt = document.getElementById("tipoDeMonedaExt").value;

  if (cantPesosArg < 0) {
    document.getElementById("textResultado").textContent = "Error:";
    document.getElementById("resultado").textContent =
      "Debe ingresar una cantidad de pesos mayor a cero";
    return;

    //que sea campo numerico
  }

  cambio = cantPesosArg * monedaExt;

  document.getElementById("textResultado").textContent = "Resultado:";
  document.getElementById("resultado").innerHTML = Number(cambio);
}

function agregarMoneda(event) {
  event.preventDefault();
  let nombre = document.getElementById("nameMoneda").value;
  let conversionPeso = document.getElementById("conversion").value;

  NuevaMoneda = document.getElementById("tipoDeMonedaExt");
  NuevaMoneda.add(new Option(nombre, conversionPeso));

  calcularCambio();
}
