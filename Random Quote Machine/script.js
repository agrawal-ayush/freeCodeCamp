$(document).ready(function() {
	getQuote();
	$("#getQuote").on('click', getQuote);
});

function getQuote(){
	console.log('Hello from function');
	$.ajax({
		    headers: {
		      "X-Mashape-Key": "6QeNy63WtqmshK1iYNu50WTJg175p1DdRLRjsn5qdO8MrEZ9HR",
		      Accept: "application/json",
		      "Content-Type": "application/x-www-form-urlencoded"
		    },
		    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
		    success: function(response) {
		      var r = JSON.parse(response);
		      console.log(r);
		      currentQuote = r.quote;
		      currentAuthor = r.author;
  		}
	});
}