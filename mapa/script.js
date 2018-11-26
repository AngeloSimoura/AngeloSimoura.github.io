		var map = L.map('map').setView([51.505, -0.09], 13);
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		    maxZoom: 18,
		    container: 'map',
		    id: 'mapbox.streets',
		    accessToken: 'pk.eyJ1IjoiYW5nZWxvc2ltb3VyYSIsImEiOiJjam9lNWhrMzMydmttM2tubDM1bDdybmw5In0.b66tjB6GE_aL3HGfankLiQ'
		}).addTo(map);
		navigator.geolocation.getCurrentPosition(f1);
		function f1(pos){
		    var homeIcon = L.icon({
                iconUrl: 'home.png',
                iconSize:     [35, 55],
                iconAnchor:   [18, 49],
                popupAnchor:  [-5, -45]
            });
		    var i=1;
			console.log(pos);
			var lat = pos.coords.latitude;
			var long = pos.coords.longitude;
			map.setView([lat,long],13);
			var marker = L.marker([lat, long],{icon: homeIcon}).addTo(map);
			marker.bindPopup("<b>Olá!</b><br> Você está aqui").openPopup();
			btn = document.getElementById("submit");
 			btn.addEventListener("click",distancia);
			function distancia(){
				var x=0;
				var y=0;
				x=lat;
				y=long;
				var dis=0;
				var dLat=0;
				var dLon=0;
				var aux;
				var latuser = Number(document.getElementById("latuser").value);
				var longuser= Number(document.getElementById("longuser").value);
				var a=latuser;
				var b=longuser;
				if(isNaN(a) || isNaN(b)){
					alert("Coordenadas não estão em números! Não utilize vírgulas para as coordenadas! Por favor, digite novamente!");
				}
				var marker2;
				marker2 = L.marker([latuser, longuser]).addTo(map);
				var deg2rad = 0.017453292519943295; // === Math.PI / 180
				var cos = Math.cos;
				    x *= deg2rad;
					y *= deg2rad;
					latuser *= deg2rad;
				    longuser *= deg2rad;
				    diam = 12742; // Diameter of the earth in km (2 * 6371)
				    dLat = latuser - x;
				    dLon = longuser - y;
				    aux = ( (1 - cos(dLat)) +(1 - cos(dLon)) * cos(x) * cos(longuser)) / 2;
				    if(aux<0){
				    	aux = -(( (1 - cos(dLat)) +(1 - cos(dLon)) * cos(x) * cos(longuser)) / 2);
				    }
				    dis = diam * Math.asin(Math.sqrt(aux));
				    var polygonPoints = [
				              [lat, long],
				              [a, b]];
				            var poly = L.polygon(polygonPoints).addTo(map);
				      marker2.bindPopup("<b>"+i+"º Cálculo:</b><br><b>Latitude escolhida:</b> "+a+ "</br><b>Longitude escolhida:</b> " +b+" </br><b>Distância:</b> " + dis.toFixed(2)  + " KM").openPopup();
					i++;
				}
			};
			navigator.geolocation.getCurrentPosition(f1,f2);
		//ERRO
		function f2(err){
			console.warn('ERROR(' + err.code + '): ' + err.message);
			alert("Você negou o acesso a sua Localização. Recarregue a página e tente novamente.");
		}
		