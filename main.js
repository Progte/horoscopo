"use strict";

function ObHor() {

	var a = document.getElementById("dateOfBirth").value;
	//console.log(a);	

	let fecha = new Date(a);

	//console.log(fecha.toUTCString());

	let month = fecha.getUTCMonth() + 1;
	let day = fecha.getUTCDate();
	let year = fecha.getUTCFullYear();
	/*console.log("el día es "+day);	
	console.log("el mes es "+ month);
	console.log("el año es "+ year);*/

	let num = 0;

	let signZ = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Psicis", "Cumpleaños de Churri", "nacimiento de Churri"];

	let color = ["negro", "azul", "marrón", "gris", "verde", "naranja", "rosa", "púrpura", "rojo", "blanco", "turquesa", "magenta", "Cumpleaños de Churri", "nacimiento de Churri"];

	if (day >= 21 && month == 3 || day <= 19 && month == 4)
		num = 0;
	if (day >= 20 && month == 4 || day <= 20 && month == 5)
		num = 1;
	if (day >= 21 && month == 5 || day <= 20 && month == 6)
		num = 2;
	if (day >= 21 && month == 6 || day <= 22 && month == 7)
		num = 3;
	if (day >= 23 && month == 7 || day <= 22 && month == 8)
		num = 4;
	if (day >= 23 && month == 8 || day <= 22 && month == 9)
		num = 5;
	if (day >= 23 && month == 9 || day <= 22 && month == 10)
		num = 6;
	if (day >= 23 && month == 10 || day <= 21 && month == 11)
		num = 7;
	if (day >= 22 && month == 11 || day <= 21 && month == 12)
		num = 8;
	if (day >= 22 && month == 12 || day <= 19 && month == 1)
		num = 9;
	if (day >= 20 && month == 1 || day <= 18 && month == 2)
		num = 10;
	if (day >= 19 && month == 2 || day <= 20 && month == 3)
		num = 11;

	if (day == 16 && month == 12)
		num = 12;

	if (day == 16 && month == 12 && year == 1986)
		num = 13;
	
		var img = document.getElementById('imagen');
	
	if (num >= 0 && num <= 11) {
		document.getElementById("HorWriten").innerHTML = signZ[num];
		document.getElementById("pronost").innerHTML = "le gusta el color "+color[num];			
		
		img.style.visibility = 'hidden';
		
	}
	if (num ==12) {
		img.style.visibility = 'visible';
		document.getElementById("HorWriten").innerHTML = "No cree en Horóscopos";
		document.getElementById("pronost").innerHTML = signZ[num];	
		document.getElementById("imagen").src='img/regalo.jpg';	
	}
	if (num ==13) {
		img.style.visibility = 'visible';
		document.getElementById("HorWriten").innerHTML = "No cree en Horóscopos";
		document.getElementById("pronost").innerHTML = signZ[num];	
		document.getElementById("imagen").src='img/pacora.jpeg';
	}
	
}
