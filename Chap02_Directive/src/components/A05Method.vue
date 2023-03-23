<template>
  <h3>A05 Method</h3>

  <div>
    <h5>1. Method</h5>

    onAdd: {{ onAdd(10, 20) }}<br />
    <br />

    Name: {{ name }}
    <input
      type="text"
      name="name"
      class="form-control"
      :value="name"
      v-on:input="changeString"
    />
    Num: {{ num }}
    <input
      type="text"
      name="num"
      class="form-control"
      :value="num"
      v-on:input="changeNumber"
    />
  </div>
  <br />

  <div>
    <h5>2. Computed</h5>
    Computed: {{ total }}<br />
    Methods: {{ totalMethod() }}<br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "NolBu",
      num: 10,
    };
  },
  methods: {
    onAdd(x, y) {
      return `${x} + ${y} = ${x + y}`;
    },
    changeString(evt) {
      // this.name = evt.target.value;
      this[evt.target.name] = evt.target.value;
    },
    changeNumber(evt) {
      let value = Number(evt.target.value);
      if (isNaN(value)) value = 0;
      // this.num = value;
      this[evt.target.name] = value;
    },
    totalMethod() {
      console.log("methods...");
      let total = 0;
      for (let i = 0; i <= this.num; i++) {
        total += i;
      }
      return total;
    },
  },
  // 기존의 값을 조작한 후의 값을 참조해서 사용하는 경우. 항상 Return 값이 있어야 한다.
  // 참조는 Getter로 속성 참조 방식으로 참조된다.
  // computed는 this 변경할 때만 실행되는데, methods는 변경이 뭐든 하나 있으면 메모리 작업에 올려서 계속 실행돼서 비효율적이다.
  // computed는 마치 캐슁같이 처리되는 것.
  // 내부에서 사용한 data 변수와 함수가 변경되는 경우만 새롭게 갱신된다.
  // methods는 return값이 없어도 있어도 되지만, computed는 무조건 return이 있어야 하고 함수처럼 작성했지만
  // 매개변수도 없고 속성(변수)처럼 사용되어야 한다.
  computed: {
    total() {
      console.log("computed...");
      let total = 0;
      for (let i = 0; i <= this.num; i++) {
        total += i;
      }
      return total;
    },
  },
};
</script>
