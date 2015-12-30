(function() {
    'use strict';

    angular
        .module('nr.grocery')
        .config(ConfigureStates);

    function ConfigureStates($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/list");

        $stateProvider
            .state('list', {
                url: '/list',
                controller: 'listController',
                controllerAs: 'listCtrl',
                templateUrl: 'app/list/listTemplate.html'
            });
    }
})();
