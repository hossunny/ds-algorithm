function sleep(ms) {
  const wakeUp = Date.now() + ms;
  while (Date.now() < wakeUp) {}
}

function normal() {
  console.log('1. START');
  sleep(1000);
  console.log('2. END');
}
// normal();

// callback 예제
// 함수의 매개변수로 쿼리하고 나중에 불려지는 함수를 콜백이라 한다.
// 이건 heap에 올라가 있고, 시간이 됐으면 stack으로 내려와서 실행되고 끝난다.
// dd
function callFunc(x, y, cb) {
  const result = x + y;
  cb(result);
}
callFunc(10, 20, value => console.log(value / 2));
callFunc(10, 20, value => console.log(value * 2));
console.log('');

// JavaScript의 시간이 걸리는 작업은 모두 callback 처리
// call back 쓰는 이유
// 1. 메인 함수에 영향 없이 처리는 처리대로 따로 분리할 수 있어서
// 2. 함수 내부는 scope이 있어서 밖에서 꺼내 쓸 수 없으므로
function one(ms) {
  console.log('1 START');
  setTimeout(function () {
    const result = 1000;
    console.log('3 Result => ' + result);
  }, 2000); // 이게 0초여도  heap에 올라갔다 오므로 print2 후에 3이 찍힌다.
  console.log('2 END');
}

// one(3000);

// Promise를 쓰는 이유
// callback의 callback을 쓰면 불편해서 아래와 같이.
let result = 0;
console.log('');
function two(ms) {
  console.log('1 START');
  setTimeout(function () {
    result = 1000;
    console.log('3 Result => ' + result);

    setTimeout(() => {
      result = result + 1000;
      console.log('4 Result => ' + result);
    }, result);
  }, 2000);
  console.log('2 END');
}

// two(3000);
// promise
console.log('');
function promise(ms) {
  console.log('1 START');
  const promise = new Promise((resolve, reject) => {
    // eslint-disable-next-line prefer-promise-reject-errors
    if (ms < 1000) reject('시간이 너무 짧습니다');
    setTimeout(() => {
      const result = 1000;
      resolve(result);
      console.log(`Result => ${result}`);
    }, 3000);
  });
  console.log('2 END');
  return promise;
}

// 이러면 callback 지옥에 빠질 필요가 없다.
// but 값 받아 처리..
/*
promise(2000)
  // resolve 함수를 정의
  .then(result => {
    console.log(result);
    // 결과를 받아 다른 시간 걸리는 작업을 다시 호출. 결과는 다음 then이 받아 처리한다.
    return promise(2000);
  })
  .then(result => console.log(result))
  .catch(err => console.error(err));

*/

// ES2017 async / await 구문. 함수로 묶어야 한다.
// 함수는 함수명 앞에 async를 비동기 명령 앞에는 await를 붙여 호출한다.
// 비동기를 동기화 처리
async function promiseOne(ms) {
  try {
    console.log('1. promiseOne START');
    // 값을 받을 때까지 wait
    const result = await promise(2000);
    console.log(`3. promiseOne Result => ${result}`);
    const value = await promise(result);
    console.log(`4. promiseOne Result => ${value}`);
    console.log('2. promiseOne END');
  } catch (err) {
    console.log('Error');
  }
}
console.log('');
promiseOne(2000);
console.log(' ------------------- END --------------------'); // 이건 이미 끝나고 저 함수 내부만 끝날 때까지 기다린다.
