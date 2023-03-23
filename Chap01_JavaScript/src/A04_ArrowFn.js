(function () {
  // 함수 리터럴. 함수 표현식
  const onAdd = function (x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
  };

  const onMin = function (x, y) {
    return `${x} - ${y} = ${x - y}`;
  };

  onAdd(10, 20);
  console.log(onMin(10, 20));
  console.log('');

  // ES6.
  // 함수 리터럴 방식만 변경 가능
  // function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다

  // template literal은 연산자도 적용된다.
  // arrow로 함수를 만들 수 있다. function이름 지우고 => 하면 된다.
  const onMulti = (x, y) => {
    return `${x} * ${y} = ${x * y}`;
  };
  console.log(onMulti(10, 20));
  // 함수 {} 내부에 구문이 리턴문 1개면 return을 생략하고 한 줄에 적는다. *** 많이씀
  const onDiv = (x, y) => `${x} / ${y} = ${x / y}`;
  console.log(onDiv(10, 2));

  // 한줄인 경우 => 두의 값이 실행구문이면 알아서 실행한다.
  const onOne = (x, y) => console.log(`${x} / ${y} = ${x / y}`);
  onOne(20, 2);
  console.log('');

  // 매개변수가 1개면 ()를 생략할 수 있다
  // ** => ES6에서 추가된 연산자 제곱승(자승)
  const onTwo = x => 3 ** x;
  console.log(onTwo(3));

  // 함수의 매개변수는 기본값을 가질 수 있다 ES6에서 추가
  const onThree = (x = 10, y = 20) => {
    return `${x} / ${y} = ${x / y}`;
  };
  console.log(onThree());
  console.log(onThree(1, 2));

  // Arrow 함수는 자체 this가 없음. 자신이 속한 객체의 this를 따른다.
  // obj 객체는 window(global)에 선언된 변수라 obj의 this는 window다
  const obj = {
    name: '놀부',
    age: 30,
    // 객체 내부의 메서드(함수)는 자신이 선언된 객체 자체를 나타낸다(this => obj)
    // es6에선 function 안쓰고 바로 info() 가능하다.
    info() {
      return `${this.name} / ${this.age}`;
    },
    // Arrow는 자체 this가 없어서 자신이 속한 객체의 this를 따른다.
    // 그래서 결국 의미는 window.name / window.age를 한 것이다.
    // eslint-disable-next-line no-invalid-this
    display: () => `${this.name} / ${this.age}`,
  };

  console.log(obj.info());
  console.log(obj.display());
})();
