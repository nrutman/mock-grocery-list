(function() {
    'use strict';

    angular
        .module('nr.grocery')
        .service('listItemService', ListItemService);

    function ListItemService(listItemGeneratorService) {

        var self = this;
        var listItems = listItemGeneratorService.generateItems(10);

        self.getListItems = getListItems;

        function getListItems() {
            return listItems;
        }
    }
})();
