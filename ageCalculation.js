$(document).ready(function myage(){
 var hoy= new Date()
 
  $("#day").html(hoy);

 var ano = 1991
 var mes = 5
 var dia = 18
 
  var hoyAno = hoy.getFullYear()
  var hoyMes = hoy.getMonth()+1
  var hoyDia = hoy.getDate() 
  

var edad = hoyAno - ano - 1
var edadNueva = edad + 1


if (hoyMes - mes < 0 ){
		$("#age").html( edad );
	}
else if(hoyMes - mes > 0){
		$("#age").html( edadNueva );
	}	
	
else if(hoyMes - mes === 0){
		if(hoyDia >= dia){
			$("#age").html( edadNueva );	
		}
		else{
			$("#age").html( edad );
		}
}	
 else{
 		$("#age").html( "ERROR" );
 }
 
 });