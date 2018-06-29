(function () {
  Array.prototype.last = function () {
      return this[this.length -1];
  }  ;
  Array.prototype.skip = function (n) {
      let array = [];
      for (let i = n; i < this.length; i++) {
          array.push(this[i]);
      }
      return array;
  };
  Array.prototype.take = function (n) {
      let array = [];
      for (let i = 0; i < n; i++) {
          array.push(this[i]);
      }
      return array;
  };
  Array.prototype.sum = function () {
      let sum = 0;
      for (let i = 0; i < this.length; i++) {
          sum += this[i];
      }
      return sum;
  };
  Array.prototype.average = function () {
      let avg = this.sum();
      return avg / this.length;
  }
})();