/** Random inicial
/*
// Math.random() devuelve número aleatorio entre 0 y 1.
var numero = Math.random();

var str =' MAYOR que 0,5';

if (numero <= 0.5){
  str = ' MENOR que 0,5';
}

console.log('\n' + numero + str + '\n');
*/

/** Lo nuevo acá:
var express = require('express');
//var path = require('path');      //no hacen falta
//var bodyParser = require('body-parser');       //no hacen falta
var app = express();

//app.use(bodyParser.urlencoded({extended: true}));   //no hacen falta
//app.use(express.static(path.join(__dirname,'public')));  //no hacen falta

 app.get('/', function (req,res){
  res.send('<html><head><title>P&aacutegina con 2 formularios</title></head><body>'
        + '<h1>Trabajo M&oacutedulo 4</h1>'
//        + '<h2>Por favor, sus respuestas en May&uacutesculas</h2>'
        + '<form method="get" action="/proc">'
		+  	'&iquestQui&eacuten descubri&oacute Am&eacuterica?:<br>'
		+   '<input type="text" name="descubre" /><br>'
		+   '<input type="hidden" name="forma" value="1"/>'
		+   '<input type="submit" value= "Enviar"/>'
		+  '</form>'
        + '<form method="get" action="/proc">'
		+  	'&iquestCapital de Portugal?: <br>'
		+   '<input type="text" name="capital" /><br>'
		+   '<input type="hidden" name="forma" value="2"/>'
		+   '<input type="submit" value= "Enviar"/>'
		+  '</form>'
		+ '</body></html>');
 });
	 app.get('/proc', function (req, res){
         var respuesta ='Gracias por su respuesta. ';
		 var sino = ". Su respuesta es: ";
		 if (req.query.forma==="1")  {
			 if (req.query.descubre.toUpperCase()==="COLON" || req.query.descubre.toUpperCase()==="CRISTOBAL COLON")	 {
				 sino=sino+" Correcta";
			 }
			 else 	 {
				 sino=sino+" Incorrecta. Lo Correcto es CRISTOBAL COLON";
			 }
		respuesta = respuesta + 'Am&eacuterica fue descubierta por ' + req.query.descubre + sino;
		 }
// forma="2"
         if (req.query.forma==="2")   {
		   if (req.query.capital.toUpperCase() === "LISBOA") {
				 sino=sino+" Correcta";
			 }
			 else  {
				 sino=sino+" Incorrecta. Lo Correcto es LISBOA";
			 }
		respuesta = respuesta + 'Capital de Portugal es ' + req.query.capital + sino;
		 }

    res.send('<html><head><title>Respuesta</title></head><body>'
	    +   respuesta + '<br>'
//		+ '<a href="http://localhost:8000/form"><button>Regresar</button></a>'
//		+ '<a href="javascript:history.back()"><button>Regresar</button></a>'
		+ '<a href="/"><button>Regresar</button></a>'
		+ '</body></html>');
});

app.listen(8000);
console.log("Servidor iniciado en el puerto 8000");
