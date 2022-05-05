var montoVendido = prompt("Ingrese el monto de la venta")
var codigoDeVendedor = prompt ("Ingrese el código de vendedor")
alert("El monto de la venta es de " +montoVendido)
alert("El codigo del vendedor es " +codigoDeVendedor)
if (codigoDeVendedor<100){alert ("Las comisiones son de "+(montoVendido*0.3))}
if (codigoDeVendedor<200 & codigoDeVendedor>100){alert("Las comisiones son de "+(montoVendido*0.2))}
if (codigoDeVendedor>200){alert("Las comisiones son de "+(montoVendido*0.1))}