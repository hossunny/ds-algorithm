<template>
  <h3>A11 Refs</h3>
  <form>
    <div class="input-group">
      <!-- 바로 msg 반영되는게 아니라 버튼 눌렀을 때 하기 위해 v-model 대신 v-bind 사용 -->
      <input
        type="text"
        class="form-control"
        name="msg"
        v-bind:value="message"
        ref="msgRef"
      />
      <button type="submit" class="btn btn-danger" @click.prevent="getMessage">
        ADD
      </button>
    </div>
  </form>
  <br />

  <div>Message: {{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World",
    };
  },
  methods: {
    getMessage(evt) {
      // const msg = document.querySelector('input[name="msg"]').ariaValueMax;
      // this.$refs.msgRef => JavaScript 객체
      const msg = this.$refs.msgRef.value;
      this.message = msg;
    },
  },
  mounted() {
    this.$refs.msgRef.style.background = "orange";
    this.$refs.msgRef.focus();
  },
};
</script>
