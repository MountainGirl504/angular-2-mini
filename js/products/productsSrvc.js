angular.module('myApp').service('productsSrvc', function($http) {
    
    this.getShoeData = function (){
        return $http.get('https://practiceapi.devmountain.com/products?category=shoes')
        
        .then( resp => {
            console.log("Response:", resp)
            return resp.data;
        })
    }

        this.getSockData = function (){
            return $http.get('https://practiceapi.devmountain.com/products?category=socks')
            .then(resp => {
                return resp.data;
            })
        }
});
