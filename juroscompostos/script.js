 var btn;
 var cap;
 var juros;
 var m;
 var i;
 var temp1;
 var temp2;
 var jtotais;

 function init(){
 	btn = document.getElementById("calcular");
 	btn.addEventListener("click",calculo);
 }
 	

 function calculo(){
 	cap = document.getElementById("cap").value;
 	temp1 = cap.replace(",",".");
 	juros = document.getElementById("juros").value;
 	temp2 = juros.replace(",",".");
 	var j=(1 + temp2/100);
 	t = Number(document.getElementById("tempo").value);
 	if(isNaN(temp1) || isNaN(j) || isNaN(t))
 			alert("Valor(es) digitado(s) inválido(s). Digite somente números nos campos. Digite somente meses inteiros");
 	else{
	 	var r = document.getElementById("result");
	 	r.innerHTML = "";
	  	for (i = 1; i <=t; i++) {
	 		m = temp1*Math.pow(j,i);
	 		r.innerHTML += i + "º mês: R$ "  + m.toFixed(2) + "<br />";
	 	}
	 	jtotais = m - temp1;
	 	r.innerHTML += "<h1> Juros totais: R$ " + jtotais.toFixed(2) + "<br /> Acumulado: R$ "  +  m.toFixed(2) + " </h1><br />";
	 	
	 }
 }
 init();