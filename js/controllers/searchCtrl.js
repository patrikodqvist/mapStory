mapStory.controller('searchCtrl', function($window,$rootScope,$scope, Pubnub, currentUser, loginService, gameModel, firebase, $interval) {
	$scope.searchInfo = function(name) {
		
		loginService.userSearch(name);
		loginService.gameSearch(name);
	}

	$scope.home = function() {
		$window.location.href = "#!/home";
	}

	$scope.profile = function() {
		$window.location.href = "#!/profile";
	}

	$scope.search = function() {
		$window.location.href = "#!/search";
	}

	$scope.splitter = function() {
		  var menu = document.getElementById('menu');
		  menu.open();
	}

});	