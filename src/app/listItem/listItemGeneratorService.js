(function() {
    'use strict';

    angular
        .module('nr.grocery')
        .service('listItemGeneratorService', ListItemGeneratorService);

    function ListItemGeneratorService(listItemFactory) {

        var self = this;

        var productNames = [
            'Creamed Corn',
            'Dill Pickles',
            'Hotdogs',
            'Corn Beef Hash',
            'Catsup',
            'Turnips',
            'Deli Mustard',
            'White Flour',
            'White Sugar',
            'Brown Sugar',
            'Napkins',
            'Soy Sauce',
            'Ground Beef',
            'Chicken Wings',
            'Blue Cheese Salad Dressing',
            'Green Olives',
            'Olive Oil',
            'Watermelon',
            'Italian Bread'
        ];

        self.generateItems = generateItems;

        function generateItems(count) {
            var items = [];
            var names = [];
            var aisleLetters = ['A','B','C'];

            for (var i=0; i<count; i++) {
                // make sure our copy of the names has values in it (only repeat if we need more than the number of unique values we have)
                if (names.length === 0) {
                    names = angular.copy(productNames);
                }
                // get a name
                var name = names.splice(getRandomInt(0,names.length), 1).pop();
                // generate a quantity
                var qty = getRandomInt(1,11);
                // generate an aisle
                var aisle = String(getRandomInt(1, 21) + aisleLetters[getRandomInt(0,3)]);
                // generate a price
                var price = getRandomInt(50,900) / 100;
                // generate the item
                var item = listItemFactory.create(name, qty, aisle, price);
                // push the item onto the collection
                items.push(item);
            }
            // return the collection
            return items;
        }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
    }
})();
