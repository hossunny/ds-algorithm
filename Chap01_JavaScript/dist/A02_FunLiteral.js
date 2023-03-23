"use strict";

(function () {
  // ES5. 함수 리터럴
  var sayHello = function sayHello() {
    return 1;
  };

  console.log('1 => ' + sayHello());
  {
    var sayHello = function sayHello() {
      return 2;
    };

    console.log('2 => ' + sayHello());
  }
  console.log('3 => ' + sayHello());
  console.log(''); // ES6. Function

  var yourHello = function yourHello() {
    return 1;
  };

  console.log('1 => ' + yourHello()); // 함수는 보통 const로 많이 정의한다.

  {
    var _yourHello = function _yourHello() {
      return 2;
    };

    console.log('2 => ' + _yourHello());
  }
  console.log('3 => ' + yourHello());
  console.log('');
})();