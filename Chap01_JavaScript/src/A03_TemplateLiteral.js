
// ES6
(function(){

    let name = 'NolBu';
    console.log('My Name is ' + name);
    console.log(`My Name is ${name}`);


    let obj = {
        name: 'HungBu',
        age: 25,
        child: ['one', 'two'],
        info: {
            tel: '010-1234-5678',
            add: 'Seoul'
        },
        toString: function(){
            console.log(this.name + '님의 나이는 ' + this.age + '세 입니다');

            // ES6 - tempate 문자열
            console.log(`${this.name}님의 나이는 ' ${this.age}세 입니다`);

            console.log(`${this.name}님의 나이는 ' ${this.age}세이고
            ${this.name}님은 ${this.info.add}에 거주합니다.`);
        }
    }
    
    obj.toString();
    // `` 로 만들면 개행 인식 잘 하고 문자열 그대로 보여준다.
    // 이런걸 Template Literal이락 한다.
    const dom = `
        <div>
            <h1>Hello Wolrd</h1>
            
            <div>
                This is Content.
            </div>
        </div>
    `;
    console.log(dom);

})();


//센세코드

// ES6
(function () {

    let name = 'NolBu';
    console.log('My Name is ' + name);
    console.log(`My Name is ${name}`);


    let obj = {
        name: 'HungBu',
        age: 25,
        child: ['one', 'two'],
        info: {
            tel: '010-1234-5678',
            add: 'Seoul'
        },
        toString: function () {
            console.log(this.name + '님의 나이는 ' + this.age + '세 입니다');

            // ES6 - tempate 문자열
            console.log(`${this.name}님의 나이는 ${this.age}세 입니다`);

            console.log(`${this.name}님의 나이는 ${this.age}세이고
    ${this.name}님은 ${this.info.add}에 거주합니다.`);
        }
    }

    obj.toString();

    const dom = `
        <div>
            <h1>Hello World</h1>

            <div>
                This is Content.
            </div>
        </div>
    `;
    console.log(dom);
})();