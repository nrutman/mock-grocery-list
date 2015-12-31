(function() {
    'use strict';

    angular
        .module('nr.grocery')
        .factory('listItemFactory', ListItemFactory);

    function ListItemFactory() {

        var self = {
            create: create
        };

        return self;

        function create(description, quantity, aisle, price) {
            var item = {
                description: description,
                quantity: quantity,
                aisle: aisle,
                price: price
            };

            try {
                item.total = item.price * item.quantity;
                if (isNaN(item.total)) throw 'Not a number';
            } catch(e) {
                item.total = undefined;
            }

            return item;
        }
    }
})();
