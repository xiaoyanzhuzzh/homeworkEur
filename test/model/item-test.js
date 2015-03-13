"use strict";

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);


describe("item", function () {
  var Item;

  beforeEach(function () {

    Item = require('../../src/main/model/item.js');
  });

  it("should set barcode of a item and then can get the barcode", function () {
    var item = new Item();
    var setBarcode = sinon.spy(item, 'setBarcode');
    var getBarcode = sinon.spy(item, 'getBarcode');

    item.setBarcode('ITEM000000');
    expect(setBarcode).to.have.been.calledWith('ITEM000000');

    item.getBarcode();
    expect(getBarcode).returned('ITEM000000');
  });

  it("should set name of a item and then can get the name", function () {
    var item = new Item();
    var setName = sinon.spy(item, 'setName');
    var getName = sinon.spy(item, 'getName');

    item.setName('苹果');
    expect(setName).to.have.been.calledWith('苹果');

    item.getName();
    expect(getName).returned('苹果');
  });

  it("should set unit of a item and then can get the unit", function () {
    var item = new Item();
    var setUnit = sinon.spy(item, 'setUnit');
    var getUnit = sinon.spy(item, 'getUnit');

    item.setUnit('斤');
    expect(setUnit).to.have.been.calledWith('斤');

    item.getUnit();
    expect(getUnit).returned('斤');
  });

  it("should set price of a item and then can get the price", function () {
    var item = new Item();
    var setPrice = sinon.spy(item, 'setPrice');
    var getPrice = sinon.spy(item, 'getPrice');

    item.setPrice(10.0);
    expect(setPrice).to.have.been.calledWith(10.0);

    item.getPrice();
    expect(getPrice).returned(10.0);
  });

  it("should set brand of a item and then can get the brand", function () {
    var item = new Item();
    var setBrand = sinon.spy(item, 'setBrand');
    var getBrand = sinon.spy(item, 'getBrand');

    item.setBrand('红富士');
    expect(setBrand).to.have.been.calledWith('红富士');

    item.getBrand();
    expect(getBrand).returned('红富士');
  });


});
