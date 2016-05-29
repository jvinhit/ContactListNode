var myApp = angular.module('myApp',[]);
myApp.controller( 'AppCtrl',function($scope,$http){ 
	var refresh = function(){
		$http.get('/contactlist').success(function(data){
			$scope.contactlist = data;
			$scope.contact = "";
		});
	};
	refresh();
	$scope.addContact = function(){
		$http.post('/contactlist',$scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	};
});