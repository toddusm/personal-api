var prsnApi = angular.module('prsnApi')

prsnApi.service('homeService', function($http){
	this.getName = function(){
		return $http({
			method: 'GET',
			url: "http://localhost:8080/name"
			})
		}
			
	this.getLocation = function(){
		return $http({
			method: 'GET',
			url: "http://localhost:8080/location"
			})
	}
	
	this.getNewName = function(newName){
		return $http({
			method: "PUT",
			url: "http://localhost:8080/name",
			data: {name: newName}
		})
	}
})