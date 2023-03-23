"use strict";

/* eslint-disable require-jsdoc */
(function () {
  // 일반 함수.는 arrow fn으로 못 바꾼다.
  function fn() {
    console.log('funcion');
  }

  fn();
  /* 이런 식으로는 사용불가
    fn() => {
     }
    */

  var arr = [10, 11, 100, 101, 1000]; // 익명함수(이름이 없는 함수)
  // forEach

  arr.forEach(function (item, index) {
    console.log(item, index);
  });
  arr.forEach(function (item, index) {
    console.log(item, index);
  }); // 엄청 간단하게 만들 수 있다.

  var total = 0;
  arr.forEach(function (item) {
    return total = total + item;
  });
  console.log(total); // map -> 순환은 forEach와 동일하지만 return 값을 기반으로 새로운 배열을 생성한다.

  var mapArr = arr.map(function (item, index) {
    if (item % 2 === 0) return item * 2;else return item * 3;
  });
  console.log(mapArr);
  var mapArr2 = arr.map(function (item) {
    return item * 2;
  });
  console.log(arr);
  console.log(mapArr2);
  console.log(arr); // deepcopy는 아니다.

  console.log(''); // filter => 순환은 map과 동일하지만 return 값이 true면 새로운 배열에 추가 false면 skip
  // 얘도 얕은 카피다

  var filterArr = arr.filter(function (item) {
    return item % 2 === 0;
  });
  console.log(filterArr);
})();