var userID = "";

function setSelected() {
	if(window.location.href.indexOf("userID")>-1) {
		userID = location.search.split('userID=')[1];
		var colorAndCity = new XMLHttpRequest();
		colorAndCity.open("GET","php/setup.php?userID="+userID,false);
		colorAndCity.send();
		var result = colorAndCity.responseText.trim();
		result = result.split('#');
		document.body.style.backgroundColor=result[0];
		document.getElementById('cities').value = result[1];
		showRSS(result[1]);

	}
}

function showRSS(woeid)
{
	if (woeid.length==0){ 
	  	document.getElementById("rssOutput").innerHTML="";
	  	return;
	}

	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
	  	xmlhttp=new XMLHttpRequest();
	}

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
		    // window.jsonObj = JSON.parse(xmlhttp.responseText);
		    var jsonObj = JSON.parse(xmlhttp.responseText);
		    forecast = jsonObj.query.results.channel.item.forecast;	 
		    for(i=0; i<forecast.length; i++){
				document.getElementById("day"+i).innerHTML= "<p class=day>" + forecast[i].day + "</p>" +
															"<p class=date>" + forecast[i].date + "</p>" + 
															"<p class=hi>" + "Hi " + forecast[i].high + "&deg; F" +  "</p>" + 
															"<p class=lo>" + "Lo " + forecast[i].low + "&deg; F" + "</p>" + 
															"<p class=text>" + forecast[i].text + "</p>";
			
				var day = "day"+i;
				var box = document.getElementById(day);		
				if(forecast[i].text == 'Sunny'){
					box.style.width = '20%';
					box.style.backgroundImage = "url('img/sunny.gif')";
				} else if(forecast[i].text == 'Partly Cloudy'){
					box.style.width = '20%';
					box.style.backgroundImage = "url('img/partlyCloudy.gif')";
				} else if(forecast[i].text == 'Mostly Sunny'){
					box.style.width = '20%';
					box.style.backgroundImage = "url('img/mostlySunny.gif')";
				} else {
					box.style.backgroundImage = "none";
				}

			}
			var city = jsonObj.query.results.channel.location.city;
			document.getElementById("cityImage").style.backgroundImage = "url('img/"+city+".jpg')";
			var fiveDayForecast = document.getElementById("fiveDayForecast");
			fiveDayForecast.style.visibility = "visible";
		}
	}
	  
	xmlhttp.open("GET","php/weather.php?woeid="+woeid,false);
	xmlhttp.send();
}
