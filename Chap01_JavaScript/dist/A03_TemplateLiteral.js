"use strict";

// ES6
(function () {
  var name = 'NolBu';
  console.log('My Name is ' + name);
  console.log("My Name is ".concat(name));
  var obj = {
    name: 'HungBu',
    age: 25,
    child: ['one', 'two'],
    info: {
      tel: '010-1234-5678',
      add: 'Seoul'
    },
    toString: function toString() {
      console.log(this.name + '님의 나이는 ' + this.age + '세 입니다'); // ES6 - tempate 문자열

      console.log("".concat(this.name, "\uB2D8\uC758 \uB098\uC774\uB294 ' ").concat(this.age, "\uC138 \uC785\uB2C8\uB2E4"));
      console.log("".concat(this.name, "\uB2D8\uC758 \uB098\uC774\uB294 ' ").concat(this.age, "\uC138\uC774\uACE0\n            ").concat(this.name, "\uB2D8\uC740 ").concat(this.info.add, "\uC5D0 \uAC70\uC8FC\uD569\uB2C8\uB2E4."));
    }
  };
  obj.toString(); // `` 로 만들면 개행 인식 잘 하고 문자열 그대로 보여준다.
  // 이런걸 Template Literal이락 한다.

  var dom = "\n        <div>\n            <h1>Hello Wolrd</h1>\n            \n            <div>\n                This is Content.\n            </div>\n        </div>\n    ";
  console.log(dom);
})(); //센세코드
// ES6


(function () {
  var name = 'NolBu';
  console.log('My Name is ' + name);
  console.log("My Name is ".concat(name));
  var obj = {
    name: 'HungBu',
    age: 25,
    child: ['one', 'two'],
    info: {
      tel: '010-1234-5678',
      add: 'Seoul'
    },
    toString: function toString() {
      console.log(this.name + '님의 나이는 ' + this.age + '세 입니다'); // ES6 - tempate 문자열

      console.log("".concat(this.name, "\uB2D8\uC758 \uB098\uC774\uB294 ").concat(this.age, "\uC138 \uC785\uB2C8\uB2E4"));
      console.log("".concat(this.name, "\uB2D8\uC758 \uB098\uC774\uB294 ").concat(this.age, "\uC138\uC774\uACE0\n    ").concat(this.name, "\uB2D8\uC740 ").concat(this.info.add, "\uC5D0 \uAC70\uC8FC\uD569\uB2C8\uB2E4."));
    }
  };
  obj.toString();
  var dom = "\n        <div>\n            <h1>Hello World</h1>\n\n            <div>\n                This is Content.\n            </div>\n        </div>\n    ";
  console.log(dom);
})();