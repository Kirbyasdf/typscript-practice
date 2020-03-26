"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        this.collection.sort(function (n1, n2) {
            if (n1 > n2) {
                return 1;
            }
            if (n1 < n2) {
                return -1;
            }
            return 0;
        });
    };
    return Sorter;
}());
var sorter = new Sorter(["a", "c", "d"]);
sorter.sort();
console.log(sorter.collection);
