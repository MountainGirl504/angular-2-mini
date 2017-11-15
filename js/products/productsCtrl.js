angular.module('myApp').controller('productsCtrl', function ($scope, $stateParams, productsSrvc){

  if($stateParams.id ==="shoes"){
    productsSrvc.getShoeData()
    .then( shoes => $scope.productData = shoes)
  }
  else if ($stateParams.id ==="socks"){
    productsSrvc.getSockData()
    .then( socks => $scope.productData = socks)
  }

})