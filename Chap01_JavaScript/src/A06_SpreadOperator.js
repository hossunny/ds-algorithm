/* eslint-disable require-jsdoc */
// ES6
(function () {
  console.log([10, 11, 100]);
  // arr[0], arr[1], 이런식으로 배열 원소 하나씩 찍는 방법의 간단 버전
  console.log(...[10, 11, 100]);

  console.log('NolBu');
  console.log(...'NolBu');
  console.log('');

  // ...rest는 나머지 매개변수를 의미. 이전의 argumensts라는 내부 변수와 비슷
  function spreadFun(a, b, c, d, e, ...rest) {
    console.log(`a => ${a}`);
    console.log(`b => ${b}`);
    console.log(`c => ${c}`);
    console.log(`d => ${d}`);
    console.log(`e => ${e}`);
    console.log(`rest => ${rest} / ${rest.length}`);
  }

  spreadFun(0, [10, 20, 30], 40, [50, 60, 70]);
  spreadFun(0, ...[10, 20, 30], 40, ...[50, 60, 70]);
  console.log('');

  // 배열 합치기.
  let aryOne = [10, 20, 30];
  //   let aryTwo = [1, 2, 3, aryOne];
  let aryTwo = [1, 2, 3, ...aryOne];
  console.log(aryTwo);

  // 복사 개념이다. 절대 같은 것은 아니다.
  const aryThree = [...aryOne];
  console.log(aryThree);
  console.log(aryOne === aryThree);
  console.log('');

  // Object
  const objOne = {
    id: 1,
    name: 'NolBu',
  };

  // 겹치는 요소는 아래 요소의 값으로 덮어쓴다.
  const objTwo = {
    id: 2,
    address: 'Seoul',
    ...objOne,
  };
  console.log(objTwo);

  const objThree = {
    ...objOne,
    id: 3,
    address: 'InChen',
  };
  console.log(objThree);
})();
