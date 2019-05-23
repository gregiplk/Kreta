function czasDoWydarzenia(rok, miesiac, dzien, godzina, minuta, sekunda, milisekunda)
{
	var aktualnyCzas = new Date();
	var dataWydarzenia = new Date(rok, miesiac, dzien, godzina, minuta, sekunda, milisekunda);
	var pozostalyCzas = dataWydarzenia.getTime() - aktualnyCzas.getTime();
	
	if (pozostalyCzas > 0)
	{						
		var s = pozostalyCzas / 1000;	// sekundy
		var min = s / 60;				// minuty
		var h = min / 60;				// godziny
        var d = h / 24;                 // dni
    
		var sLeft = Math.floor(s % 60);	        // pozostało sekund		
		var minLeft = Math.floor(min % 60);	    // pozostało minut
		var hLeft = Math.floor(h % 24);			// pozostało godzin	
		var dLeft = Math.floor(d);              //pozostało dni
    
		if (minLeft < 10)
		  minLeft = "0" + minLeft;
		if (sLeft < 10)
		  sLeft = "0" + sLeft;
		
		return dLeft + " dni " + hLeft + " godzin " + minLeft + " minut i " + sLeft + " sekundy!";
	}
  
	else
		return "No i po wakacjach...";
}
					
window.onload = function()
{
	idElement = "text";
	document.getElementById(idElement).innerHTML = czasDoWydarzenia(2012, 04, 13, 19, 0, 0, 0);
	setInterval("document.getElementById(idElement).innerHTML = czasDoWydarzenia(2012, 04, 13, 19, 0, 0, 0)", 1000);
};
