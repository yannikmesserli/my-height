angular.module('myHeight', []).directive('myHeight', ['$document', '$window', function ($document, $window) {
	return {
		link: function (scope, element, attrs) {
			var heightType = attrs.ngHeight || 'absolute',
			ref = (heightType == 'absolute') ? $document : $(element).parent(),

			// Set the height of element
			setHeight = function(){
				var refHeight = ref.height();
				element.height(refHeight);
			},
			setHeightWithDelay = function(delay){
				return function() {
				  setHeight();
				  setTimeout(setHeight, delay);
				};
			};

			// Bootstrap:
			setHeightWithDelay(100)();

			// Attach events:
			([$window, $document]).forEach(function(a){
				a.resize(setHeightWithDelay(100));
			});

		}
	};
}]);
