var replace = require('replace');

//Path
exports.MODULES_PATH = 'src/app/modules/';
exports.COMPONENTS_PATH = 'src/app/shared/components/';

//Capitalize
exports.capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

exports.lowercase = function (string) {
  return string.toLowerCase();
};