(function() {

    angular
        .module('nr.grocery')
        .controller('listController', ListController);

    function ListController(listItemService) {

        var self = this;

        self.getListItems = listItemService.getListItems;
    }

})();
