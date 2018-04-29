(function(){
   
	var app=angular.module('omdbApp', ['ngRoute'], ['ngCookies']);
   
    app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "search.htm"
    })
    .when("/result", {
        templateUrl : "result.htm"
    })
    .otherwise({
        redirectTo:'/'
    });
 });
   
	app.controller('omdbController', omdbController)

   function omdbController($http,$location,$cookiestore){
    	var model=this;
	  
     model.searchText=searchText;
    
function searchText(searchText){
	var url="http://www.omdbapi.com/?apikey=d8323f08&s=" +searchText;
    $http.get(url)
	.then(successMovies);
    
  if(url=='$http.get(url)')
  {$location.path('/result');
  }else{
    alert('No Match');
  }
} 
   function successMovies(response){
       model.movies=response.data.Search;
     }
  
     function $cookieStore(searchText){
	$scope.recentSearch=$cookies.get('searchText');
	$scope.SetCookie=function(val){
	$cookieStore.put('searchText',val);
	var searchCookie=$cookieStore.get('searchText');
	var log=[4];
	angular.ForEach(val, function(value,key){
	this.push(key+':'+value);
	},log);
      }
     }
} 

  
})();