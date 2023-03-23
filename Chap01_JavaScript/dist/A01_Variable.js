"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/* eslint-disable no-constant-condition */
// 바로 제거하고 싶은 것 위에 // no-constant ~ 이렇게 해도 된다.
// 이렇게 하면 아예 전체에 적용 /* eslint-disable */
var nickname = 'NolBu';
console.log('name: ' + nickname + ' typeof: ' + _typeof(nickname));
nickname = 10;
console.log('name: ' + nickname + ' typeof: ' + _typeof(nickname)); // 재 정의 에러 아님

var nickname = true;
console.log('name: ' + nickname + ' typeof: ' + _typeof(nickname)); // 함수 {} 이외의 변수 범위를 갖지 않음
// 즉, 지역변수처럼 사라지는게 아니라 글로벌리 계속 유지된다. 딱 함수 내에서 정의된 것만 지역범위를 갖는다.
// <script></script> 에서도 js1 js2 변수명 겹치면 에러가 난다..

if (true) {
  // eslint-disable-next-line no-redeclare
  var nickname = 'hungbu';
  console.log('IF Inner name: ' + nickname + ' typeof: ' + _typeof(nickname));
}

console.log('IF Outer name: ' + nickname + ' typeof: ' + _typeof(nickname));

for (var i = 0; i < 3; i++) {}

console.log('For i: ' + i + ' typeof: ' + _typeof(i));
console.log(''); // ES6
// let이 나오면서 그게 해결됐다.

var age = 10;
console.log('age: ' + age + ' typeof: ' + _typeof(age));
age = 'HangDan';
console.log('age: ' + age + ' typeof: ' + _typeof(age)); // 1. var, let, const 키워드를 이용한 동일 변수명 재 선언은 에러가 난다.
// var age = 20; // Error
// let age = 20; // Error
// 2. 모든 {}에서 범위(scope)를 갖는다.

if (true) {
  var _age = 100;
  console.log('if inner age: ' + _age + ' typeof: ' + _typeof(_age));
}

console.log('if outer age: ' + age + ' typeof: ' + _typeof(age));

for (var k = 0; k < 3; k++) {} // console.log('For k: ' + k + ' typeof: ' + typeof k); //Error
// 밖에서 k를 참조할 수 없다.


console.log(''); // const - 상수

var MYPI = 3.1415;
console.log('MYPI: ' + MYPI + ' typeof: ' + _typeof(MYPI)); // const 변수로 선언한 값은 변경 불가.
// MYPI = 100;
// 상수는 변수 선언과 동시에 초기화하지 않으면 에러가 난다. -> 추후에 값을 변경할 수 없기 때문
// const MY_DATA; // Error

var MY_ARR = [10, 20];
MY_ARR[0] = 100;
console.log(MY_ARR); // 변수 초기화가 변경 불가하지만 배열 내 값은 참조 값이라 변경이 가능하다! 주소가 고정되는 것.
// reference type 은 가능하다.
// 변수의 번지수를 다른 번지수로 변경하면 에러.
// MY_ARR = [100,200];  //Error

var MY_OBJ = {
  name: 'ABC',
  age: 10
};
MY_OBJ.name = 'DEF';
console.log(MY_OBJ); // MY_OBJ = {}; // Error
// let x = 10;

var y = {
  x: 10,
  y: 30
};