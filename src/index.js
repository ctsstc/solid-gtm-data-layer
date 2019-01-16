(function(win) {
  var privateDataLayer = win.dataLayer || [];

  Object.defineProperty(window, 'dataLayer', {
    get: function() {
      return privateDataLayer;
    },
    set: function(value) {
      if (value instanceof Array) {
        // In case there are multiple in the collection
        // I don't know what crazy person would do this
        value.forEach(function(val) {
          privateDataLayer.push(val);
        });
      }
    }
  })
})(window);