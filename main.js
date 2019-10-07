var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here

        //Create Variable for Location and Weather Information

        var cityName = document.createTextNode(apiResult.name);
        var weatherDescription = document.createTextNode(apiResult.weather[0].description);

        //Add location and weather information to screen

        var cityLocation = document.querySelector('h2');
        var weatherLocation = document.querySelector('h3');

        cityLocation.appendChild(cityName);
        weatherLocation.appendChild(weatherDescription);

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33897,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
