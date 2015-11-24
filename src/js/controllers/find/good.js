window.application.components
    .controller('GoodCtrl', 
        [ '$rootScope', '$scope', '$location', 'API', 
        function( $rootScope, $scope, $location, API ) {
            $scope.lists = [];
            API.go( API.getCommentList, false, {Sort:'Score'} ).then(function successCallback(response) {
                angular.forEach(response.data, function(value){
                    $scope.lists.push( value );
                });
            }, function errorCallback(response) {
                $scope.lists.push( [] );
            });

    }]);
