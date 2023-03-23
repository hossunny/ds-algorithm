// A10_ExportMix.js

// 여러개 와도 상관 없다.
export const address = 'Seoul';

// default는 파일당 1개만 와야 한다.
export default function onMin(x, y) {
  const result = x - y;
  console.log(`${x} - ${y} = ${result}`);
}
