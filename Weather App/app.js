(function (){
	
	// Summer : https://myopenjobsllc.files.wordpress.com/2014/06/summer-bummers-1.jpg
	// Winter : http://static2.visitfinland.com/wp-content/uploads/Header_Kaskinen_winter.jpg
	// Rainy : http://picalls.com/wp-content/uploads/2014/12/Rainy-day.jpg
	// Windy : http://emilystarkphotography.com/wp-content/uploads/2015/01/weDSC05351.jpg
	
	angular
		.module("WeatherApp",[])
		.controller("WeatherAppController",WeatherAppController);
	function WeatherAppController($http,$scope){
		var domain = "http://api.openweathermap.org/data/2.5/weather?q=";
		var units = "&units=";
		var defaultType = "metric";
		var APPID = "&APPID=68eec58b0f4fa2cf0c3556f3715c82c8";
		$scope.weatherData = {};
		var weatherInCelius = true; //By Default
		getLocation();
		
		function getLocation(){
			$http
				.get('http://ipinfo.io/json')
				.then(function(response){
					getWeatherDetails(response.data.city);
					$scope.weatherData.location = response.data.city + ", " + response.data.country;
				}, function(response){
					console.log("Error Occurred ! Please check your network and try again.");
				});
		
		}
		
		function getWeatherDetails(city){
			$http
				.get(domain+city+units+defaultType+APPID)
				.then(function(response){
					$scope.weatherData.iconURL = "http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png";
					$scope.weatherData.description = response.data.weather[0].description;
					$scope.weatherData.tempInCel = Math.round(response.data.main.temp);
					$scope.weatherData.temp = $scope.weatherData.tempInCel + '\u00B0' + "C";
					  if(Math.round(response.data.main.temp) < 10){
							$('#mainBody').css({
								"background-image":"url(http://static2.visitfinland.com/wp-content/uploads/Header_Kaskinen_winter.jpg)",
								'background-size'  : '100%'
							})
					  }
					  else if(Math.round(response.data.main.temp) > 10 && Math.round(response.data.main.temp) < 25){
							$('#mainBody').css({
								"background-image":"url(http://www.dept.aoe.vt.edu/~lscharf/flying/2005-01-16-15%20Mountains%20with%20Blue%20Haze.jpg)",
								'background-size'  : '100%'
							})
					  }
					else{
							$('#mainBody').css({
								"background-image":"url(https://myopenjobsllc.files.wordpress.com/2014/06/summer-bummers-1.jpg)",
								'background-size'  : '100%'
							})
					}
            
        
				}, function(response){
					console.log("Error Occurred! Please check your network and try again.");
				});
		}
		
		$scope.toggleWeather = function(){
			console.log("Hello");
			if(weatherInCelius){
				$scope.weatherData.temp  = ($scope.weatherData.tempInCel * 9)/5 + 32 + '\u00B0' + 'F' ;
				//$scope.weatherData.temp += '\u00B0' + 'F';
				weatherInCelius = false;
				
			}
			else{
				$scope.weatherData.temp  = Math.round($scope.weatherData.tempInCel)  + '\u00B0' + 'C';
				weatherInCelius = true;
			}
		}
	}
})();
