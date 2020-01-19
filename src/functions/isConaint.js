import isEquivalent from './isEquivalent';
module.exports = function isContain(obj, array) {
  var i;
  for (i = 0; i < array.length; i++) {
    if (isEquivalent(array[i].Id, obj.Id)) {
      return true;
    }
  }

  return false;
};
