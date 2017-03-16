(function (){
	angular
		.module("WikipediaViewerApp",[])
		.controller("WikipediaViewerAppController",WikipediaViewerAppController);

	function WikipediaViewerAppController($http,$scope){
		$scope.queryWikipedia = function(searchTerm){
			$('.jumbotron, .jumbotron-fluid').remove();
			var url="https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch="+searchTerm+"&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&callback=?";
			var page = 'https://en.wikipedia.org/?curid=';
			$.getJSON(url,function(json){
				  console.log(JSON.stringify(json));
				  var results = json.query.pages;
				  for(i in results){
					 var link="http://en.wikipedia.org/wiki/?curid="+results[i].pageid;
					 var externalLink = "<a id='externalLink' href="+link+" target='_blank'><small><span><i class='fa fa-share' aria-hidden='true'></i></span></small></a>";
					 var html="<div class='jumbotron jumbotron-fluid'><div class='container'><h2 class='display-4'>"+results[i].title+ externalLink +"</h2><p class='lead'>"+results[i].extract+"</p></div></div>";
					 $(html).hide().appendTo(".wrapperContent").fadeIn(500);
				  }
			});   
		}
	}
})();
