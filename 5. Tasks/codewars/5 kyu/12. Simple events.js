// https://www.codewars.com/kata/52d3b68215be7c2d5300022f

function Event() {
  this._subscribers = [];

  this.subscribe = function(callback) {
    this._subscribers.push(callback);
  }

  this.unsubscribe = function(callback) {
    this._subscribers = this._subscribers.filter((subscriber) => subscriber !== callback);
  }

  this.emit = function(...data) {
    this._subscribers.forEach((subscriber) => {
      subscriber.call(this, ...data);
    })
  }
}
