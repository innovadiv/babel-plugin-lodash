'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constant2 = require('lodash/constant');

var _constant3 = _interopRequireDefault(_constant2);

var _toString2 = require('lodash/toString');

var _toString3 = _interopRequireDefault(_toString2);

var _requirePackageName = require('require-package-name');

var _requirePackageName2 = _interopRequireDefault(_requirePackageName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reLodash = /^lodash(?:-compat|-es)?$/;

/*----------------------------------------------------------------------------*/

var Package = function Package(pkgPath) {
  _classCallCheck(this, Package);

  pkgPath = (0, _toString3.default)(pkgPath);
  var pkgName = (0, _requirePackageName2.default)(pkgPath);

  this.base = pkgPath.replace(new RegExp(pkgName + '/?'), '');
  this.id = pkgName;
  this.isLodash = (0, _constant3.default)(reLodash.test(this.id));
  this.path = pkgPath;
};

exports.default = Package;
;
module.exports = exports['default'];