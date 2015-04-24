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
		    var result = JSON.parse(xmlhttp.responseText);
		    forecastData = result.query.results.channel.item.forecast;	 
		    for(i=0; i<forecastData.length; i++){
				document.getElementById("day"+i).innerHTML= "<p class=day>" + forecastData[i].day + "</p>" +
															"<p class=date>" + forecastData[i].date + "</p>" + 
															"<p class=hi>" + "High " + forecastData[i].high + "&deg; F" +  "</p>" + 
															"<p class=lo>" + "Low " + forecastData[i].low + "&deg; F" + "</p>" + 
															"<p class=text>" + forecastData[i].text + "</p>";
			
				var day = "day"+i;
				var box = document.getElementById(day);		
				if(forecastData[i].text == 'Sunny'){
					box.style.width = '20%';
					box.style.backgroundImage = "url('img/sunny.gif')";
				} else if(forecastData[i].text == 'Partly Cloudy'){
					box.style.width = '20%';
					box.style.backgroundImage = "url('img/partlyCloudy.gif')";
				} else if(forecastData[i].text == 'Mostly Sunny'){
					box.style.width = '20%';
					box.style.backgroundImage = "url('img/mostlySunny.gif')";
				} else {
					box.style.backgroundColor = "white";
				}

			}
			var city = result.query.results.channel.location.city;
			var fiveDayForecast = document.getElementById("fiveDayForecast");
			fiveDayForecast.style.visibility = "visible";
		}
	}
	  
	xmlhttp.open("GET","php/weather.php?woeid="+woeid,false);
	xmlhttp.send();
}
