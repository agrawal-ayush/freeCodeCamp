(function (){
	var channels = ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'habathcx', 'RobotCaleb', 'noobs2ninjas','brunofin'];
	
	angular
		.module('TwitchTvApp',[])
		.controller('TwitchTvAppController',TwitchTvAppController)
		.factory('TwitchTvAppService',TwitchTvAppService);
	
	function TwitchTvAppController(TwitchTvAppService, $scope){
		
		channelData();
		var resultsArray = [];
		function channelData(){
			channels.forEach(function(channel){
				TwitchTvAppService
					.getChannelInfo('streams',channel)
					.then(function(res){
						if(res.stream == null){
							TwitchTvAppService
								.getChannelInfo('channels',channel)
								.then(function(res){
									if(res.error == "Not Found"){
										res.status = 'Offline';
										resultsArray.push(res);
										makeHTML("http://placehold.it/50x50", "#", channel , "<i class='fa fa-times' aria-hidden='true'></i>","Channel Deactivated/Doesn't Exist !");
									}
									else{
										res.status = 'Offline';
										resultsArray.push(res);
										makeHTML(res.logo , res.url , res.display_name,"<i class='fa fa-exclamation' aria-hidden='true'></i>", res.status);
									}
									
								})
								.catch(function(error){
									console.log('Error Occurred!!', error);
								})
						} else {
							res.status = 'Online';
							resultsArray.push(res);
							makeHTML(res.stream.channel.logo , res.stream.channel.url , res.stream.channel.display_name ,"<i class='fa fa-check' aria-hidden='true'></i>", res.stream.channel.game+" "+res.stream.channel.status);
						}
					})
					
					.catch(function(res){
						console.log('Error Occurred!!');
					})
				});

			function makeHTML(logo, url, displayName,icon,  description){
				var html = "<div class='row' id='content' style=' background-color : #e6ebf4;' >"+
									"<div class='col-md-2'>"+
										"<img src="+logo+" style='border-radius: 50%; height='50px'; width='50px' />"+
									"</div>"+
									"<div class='col-md-3'><a href="+ url +" target='_blank'>"+ displayName+"</a>"+
									"</div><div class='col-md-1'>"+icon +"</div>"+
									"<div class='col-md-6'>"+description+
									"</div>"+
								"</div>";
							$(html).hide().appendTo("#display").fadeIn(500);
			};
			};
	};

		
	
	function TwitchTvAppService(){
		var api = {
			getChannelInfo : getChannelInfo
		}
		return api;
		function getChannelInfo(mode,channel){
			return $.getJSON('https://wind-bow.gomix.me/twitch-api/'+ mode +'/'+channel+'?callback=?');
		}
	}
})();
