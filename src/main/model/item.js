'use strict';

var Item = (function() {

  function Item(barcode, name, unit, price, brand){
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price;
    this.brand = brand;
  }

  Item.prototype.getBarcode = function () {
    return this.barcode;
  };

  Item.prototype.setBarcode = function (barcode) {
    this.barcode = barcode;
  };

  Item.prototype.getName = function () {
    return this.name;
  };

  Item.prototype.setName = function (name) {
    this.name = name;
  };

  Item.prototype.getUnit = function () {
    return this.unit;
  };

  Item.prototype.setUnit = function (unit) {
    this.unit = unit;
  };

  Item.prototype.getPrice = function () {
    return this.price;
  };

  Item.prototype.setPrice = function (price) {
    this.price = price;
  };

  Item.prototype.getBrand = function () {
    return this.brand;
  };

  Item.prototype.setBrand = function (brand) {
    this.brand = brand;
  };

  return Item;
})();

module.exports = Item;
