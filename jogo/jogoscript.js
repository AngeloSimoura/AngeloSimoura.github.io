var playerescolha = 0;
var PCescolha = 0;
var RESULTADO;
var pontosplayer=0;
var pontosPC=0;
function jogo(escolha) {
	playerescolha=escolha;
	PCescolha = Math.floor((Math.random() * (3-1+1))) +1;
	if (playerescolha==1) {
		if(PCescolha==1){
				RESULTADO=0;
			}
		else if(PCescolha==2){
			RESULTADO=2;
			pontosPC++;
		}
		else{
			RESULTADO=1;
			pontosplayer++;
		}
	}
	else if (playerescolha==2) {
		if(PCescolha==1){
			RESULTADO=1;
			pontosplayer++;
		}
		else if(PCescolha==2){
			RESULTADO=0;
		}
		else{
			RESULTADO=2;
			pontosPC++;
		}
	}
	else{
		if(PCescolha==1){
			RESULTADO=2;
			pontosPC++;
		}
	else if(PCescolha==2){
			RESULTADO=1;
			pontosplayer++;
		}
		else{
			RESULTADO=0;
		}
	}
	if (RESULTADO==0) {
		document.getElementById("resultado").innerHTML = 'EMPATE';
	}
	else if (RESULTADO==1) {
		document.getElementById("resultado").innerHTML = 'VOCÊ GANHOU';
	}
	else{
		document.getElementById("resultado").innerHTML = 'PC GANHOU';
	}
	document.getElementById("escolha_1").classList.remove('escolheu');
	document.getElementById("escolha_2").classList.remove('escolheu');
	document.getElementById("escolha_3").classList.remove('escolheu');
	document.getElementById("PC-escolha_1").classList.remove('escolheu');
	document.getElementById("PC-escolha_2").classList.remove('escolheu');
	document.getElementById("PC-escolha_3").classList.remove('escolheu');
		
	document.getElementById("escolha_" +  escolha).classList.add('escolheu');
	document.getElementById("PC-escolha_" +  PCescolha).classList.add('escolheu');
	document.getElementById("pontos").innerHTML = pontosplayer;
	document.getElementById("PC-pontos").innerHTML = pontosPC;
}
			
function resetar(){
		pontosplayer=0;
		pontosPC=0;
		document.getElementById("pontos").innerHTML = pontosplayer;
		document.getElementById("PC-pontos").innerHTML = pontosPC;
		document.getElementById("resultado").innerHTML = 'RESULTADO';
		document.getElementById("escolha_1").classList.remove('escolheu');
		document.getElementById("escolha_2").classList.remove('escolheu');
		document.getElementById("escolha_3").classList.remove('escolheu');
		
		document.getElementById("PC-escolha_1").classList.remove('escolheu');
		document.getElementById("PC-escolha_2").classList.remove('escolheu');
		document.getElementById("PC-escolha_3").classList.remove('escolheu');
}