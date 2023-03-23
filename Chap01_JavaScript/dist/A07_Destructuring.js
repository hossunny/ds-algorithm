"use strict";

// (function () {
//   let obj = {
//     name: 'NolBu',
//     age: 30,
//   };
//   let ary = ['A', 'B', 'C'];
//   console.log(obj, ary);
// })();
var obj = {
  name: 'NolBu',
  age: 30
};
var ary = ['A', 'B', 'C'];
console.log(obj, ary); // 배열에서 값 꺼내는 방법임
// const name = obj.name; 하면 귀찮다.
// 얕은 복사다.
// 변수 이름은 객체의 key와 동일한 이름이어야 한다.

var name = obj.name,
    age = obj.age;
console.log(name, age); // 이미 선언된 변수를 재선언하면 에러, 따라서 alias를 이용.

var nickname = obj.name,
    num = obj.age;
console.log(nickname, num); // 기본값을 할당할 수 있다

var _obj$name = obj.name,
    x = _obj$name === void 0 ? 'unknown' : _obj$name,
    _obj$age = obj.age,
    y = _obj$age === void 0 ? 0 : _obj$age,
    _obj$address = obj.address,
    address = _obj$address === void 0 ? 'Seoul' : _obj$address;
console.log(x, y, address); // 배열은 alias가 없음

var a = ary[0],
    b = ary[1],
    c = ary[2];
console.log(a, b, c); // 기본 값은 할당 가능

var _ary$ = ary[0],
    a1 = _ary$ === void 0 ? 1 : _ary$,
    _ary$2 = ary[1],
    b1 = _ary$2 === void 0 ? 2 : _ary$2,
    _ary$3 = ary[2],
    c1 = _ary$3 === void 0 ? 3 : _ary$3,
    _ary$4 = ary[3],
    d1 = _ary$4 === void 0 ? 4 : _ary$4;
console.log(a1, b1, c1, d1);