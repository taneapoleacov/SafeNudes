module.exports = function isConaintMessage(obj, array) {
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i].Id == obj.Id) {
      return true;
    }
  }

  return false;
};
