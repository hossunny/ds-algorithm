"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable require-jsdoc */
// ES6
(function () {
  var _console, _console2;

  console.log([10, 11, 100]); // arr[0], arr[1], 이런식으로 배열 원소 하나씩 찍는 방법의 간단 버전

  (_console = console).log.apply(_console, [10, 11, 100]);

  console.log('NolBu');

  (_console2 = console).log.apply(_console2, _toConsumableArray('NolBu'));

  console.log(''); // ...rest는 나머지 매개변수를 의미. 이전의 argumensts라는 내부 변수와 비슷

  function spreadFun(a, b, c, d, e) {
    console.log("a => ".concat(a));
    console.log("b => ".concat(b));
    console.log("c => ".concat(c));
    console.log("d => ".concat(d));
    console.log("e => ".concat(e));

    for (var _len = arguments.length, rest = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    console.log("rest => ".concat(rest, " / ").concat(rest.length));
  }

  spreadFun(0, [10, 20, 30], 40, [50, 60, 70]);
  spreadFun.apply(void 0, [0].concat([10, 20, 30], [40], [50, 60, 70]));
  console.log(''); // 배열 합치기.

  var aryOne = [10, 20, 30]; //   let aryTwo = [1, 2, 3, aryOne];

  var aryTwo = [1, 2, 3].concat(aryOne);
  console.log(aryTwo); // 복사 개념이다. 절대 같은 것은 아니다.

  var aryThree = [].concat(aryOne);
  console.log(aryThree);
  console.log(aryOne === aryThree);
  console.log(''); // Object

  var objOne = {
    id: 1,
    name: 'NolBu'
  }; // 겹치는 요소는 아래 요소의 값으로 덮어쓴다.

  var objTwo = _objectSpread({
    id: 2,
    address: 'Seoul'
  }, objOne);

  console.log(objTwo);

  var objThree = _objectSpread(_objectSpread({}, objOne), {}, {
    id: 3,
    address: 'InChen'
  });

  console.log(objThree);
})();