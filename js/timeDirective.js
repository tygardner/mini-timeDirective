var app = angular.module('miniTime');


app.directive('showTime', function(){
	return{
		template: `<p> The current time is {{ time | date:'mediumTime'}} </p>`,
		link: function(scope, element, attrs){
			setInterval(function(){
				scope.time = new Date();
				scope.$apply();
			}, 1000)
			scope.time = new Date();
		}
	}
}); //end app.directiveß