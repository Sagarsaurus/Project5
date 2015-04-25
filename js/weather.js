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
		if(result[3]=='1') {
			document.getElementById('message').innerHTML="Welcome "+result[2]+'. Here is your weather forecast!';
		}
		else {
			document.getElementById('message').innerHTML="Welcome back "+result[2]+'!  Thank you for coming back! Here is your weather forecast!';
		}
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
		    var result = JSON.parse(xmlhttp.responseText);
		    forecastData = result.query.results.channel.item.forecast;
		    //assign values to individual cells one at a time
		    toUpdate = "<tr>";	 
		    for(i=0; i<forecastData.length; i++){
		    	if(forecastData[i].text=='Sunny') {
					toUpdate+= "<td background='img/sunny.gif'> <p class=day>" + forecastData[i].day + "</p>" +
								"<p class=date>" + forecastData[i].date + "</p>" + 
								"<p class=hi>" + "High " + forecastData[i].high + "&deg; F" +  "</p>" + 
								"<p class=lo>" + "Low " + forecastData[i].low + "&deg; F" + "</p>" + 
								"<p class=text>" + forecastData[i].text + "</p> </td>";
		    	}
				else if(forecastData[i].text=='Partly Cloudy') {
					toUpdate+= "<td background='img/partlyCloudy.gif'> <p class=day>" + forecastData[i].day + "</p>" +
								"<p class=date>" + forecastData[i].date + "</p>" + 
								"<p class=hi>" + "High " + forecastData[i].high + "&deg; F" +  "</p>" + 
								"<p class=lo>" + "Low " + forecastData[i].low + "&deg; F" + "</p>" + 
								"<p class=text>" + forecastData[i].text + "</p> </td>";					
				}
				else if(forecastData[i].text=='Mostly Sunny') {
					toUpdate+= "<td background='img/mostlySunny.gif'> <p class=day>" + forecastData[i].day + "</p>" +
								"<p class=date>" + forecastData[i].date + "</p>" + 
								"<p class=hi>" + "High " + forecastData[i].high + "&deg; F" +  "</p>" + 
								"<p class=lo>" + "Low " + forecastData[i].low + "&deg; F" + "</p>" + 
								"<p class=text>" + forecastData[i].text + "</p> </td>";					
				}
				else {
					toUpdate+= "<td bgcolor='white'> <p class=day>" + forecastData[i].day + "</p>" +
								"<p class=date>" + forecastData[i].date + "</p>" + 
								"<p class=hi>" + "High " + forecastData[i].high + "&deg; F" +  "</p>" + 
								"<p class=lo>" + "Low " + forecastData[i].low + "&deg; F" + "</p>" + 
								"<p class=text>" + forecastData[i].text + "</p> </td>";					
				}
			}
			toUpdate+="</tr>";
			weatherTable = document.getElementById('weatherTable');
			weatherTable.innerHTML=toUpdate;
		}
	}
	  
	xmlhttp.open("GET","php/weather.php?woeid="+woeid,false);
	xmlhttp.send();
}
