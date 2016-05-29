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
	$scope.remove = function(id){
		console.log('remove ' + id);
		$http.delete('/contactlist/'+id).success(function(response){
			refresh();
		});
	};
	$scope.edit = function(id){
		$http.get('/contactlist/'+id).success(function(response){
			$scope.contact = response;
		});
	};
	$scope.update = function(){
		var id = $scope.contact._id;
		$http.put('/contactlist/'+id, $scope.contact).success(function(response){
			refresh();
		});
	};
});