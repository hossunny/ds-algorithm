<template>
  <h3>A03 Attribute Directive</h3>

  <div>
    <h5>1. 속성 바인딩</h5>
    태그의 속성 값으로 data 또는 함수 리턴값으로 사용하고자 하는 경우는
    "v-bind:속성명" 속성을 이용
    <input type="text" class="form-control" value="{{name}}" />
    <input type="text" class="form-control" v-bind:value="name" />
    <input type="text" v-bind:class="'form-control'" v-bind:value="name" />

    <input type="text" :class="formCtrl" :value="name" />

    <input v-bind="inputAttrs" />

    <div :style="divStyle">Hello World</div>
    <button v-on:click="changeName">Name</button>
  </div>
  <br />
  <!-- 위는 단방향 바인딩 -->
  <div>
    <h5>2. 양방향 바인딩</h5>
    View에서 할당된 값을 변경하면 ViewModel(data)의 값이 변경된다.<br />
    실시간 데이터 변경을 위해 VM을 쓴다는 점에서 좋은데 guard가 없다는 단점도
    있다. 즉 사용자 입력의 타입이 안 맞는 경우를 못 처리함. 그래서 event 처리를
    추가해야한다. angular는 단방향밖에 안된다.<br />
    <input type="text" class="form-control" v-model="name" />
    <input type="text" class="form-control" v-model="name" />
    <input
      type="text"
      class="form-control"
      v-bind:value="num"
      v-on:input="changeNumber"
    />
    Name: {{ name }} / Num : {{ num + 100 }}
  </div>
  <br />

  <div class="row">
    <div class="col-6">
      <select class="form-control" v-model="direction">
        <option value="width">Width</option>
        <option value="height">Height</option>
      </select>
    </div>
    <div class="col-6">
      <input type="text" class="form-control" v-model="size" />
    </div>
  </div>
  <br />
  <img src="./../assets/images/tree.jpg" alt="Tree" v-bind:[direction]="size" />
</template>

<script>
export default {
  data() {
    return {
      name: "NolBu",
      num: 10,
      formCtrl: "form-control",
      inputAttrs: { type: "text", class: "form-control", value: "ABC" }, // 값으로 this 참조가 안됨.
      divStyle: { background: "lightgray", padding: "10px" },
      direction: "width", // 참조하는건 소문자로 작성해야함
      size: 100,
    };
  },
  methods: {
    changeName() {
      this.name = "흥부";
    },
    changeNumber(evt) {
      // console.log(evt.target);
      let value = Number(evt.target.value);
      if (isNaN(value)) value = 0;
      this.num = value;
    },
  },
};
</script>
