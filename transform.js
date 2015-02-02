var define = function (proto, fieldName) {
  Object.defineProperty(proto, fieldName, {
    get: function () {
      console.log('get `' + fieldName + '` field value');
      return this._values[fieldName];
    },
    set: function (value) {
      console.log('set `' + fieldName + '` field with `' + value + '` value');
      this._values[fieldName] = value;
    }
  });
};

Item = function (doc) {
  this._values = {};

  _.extend(this._values, doc);
};

Item.prototype = {};

define(Item.prototype, '_id');
define(Item.prototype, 'name');

Items = new Mongo.Collection('items', {
  transform: function (doc) {
    return new Item(doc);
  }
});

Items.insert({
  name: 'Item 1'
});

Items.insert({
  name: 'Item 2'
});

Items.insert({
  name: 'Item 3'
});

Items.findOne();
