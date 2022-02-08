
angular.module("marvelBuscaApp").service("marvelService" , function(config , $http){
        this.characterlis = () => {
            
            return $http.get(apbaseurliba + listagemCharacters);
        }
})