var prsnApi = angular.module('prsnApi')

prsnApi.controller('homeCtrl', function($scope, homeService){

	homeService.getName().then(function(response){
			  console.log(response);
			$scope.name = response.data;
	}, function(err){
		console.log(err);
	})
	
	homeService.getLocation().then(function(response){
		console.log(response);
		$scope.location = response.data;
		}, function(err){
			console.log(err);
	})
	
	$scope.submitName = function(){
		homeService.getNewName().then(function(response){
			console.log('newName', response)
			$scope.newName = response.data;
		})
	}
	})

