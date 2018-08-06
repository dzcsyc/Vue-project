<template>
  <div class="login_container">
    <top-header headTitle="登录"></top-header>
    <form class="login_form">
        <section class="input_container">
            <input type="text" placeholder="账号..." v-model="userName">
        </section>
        <section class="input_container">
            <input type="password" placeholder="密码...">
        </section>
        <section class="input_container">
            <input type="text" placeholder="验证码...">
        </section>
    </form>
    <div class="login_button" @click="Login">登录</div>
  </div>
</template>

<script>
import topHeader from '../components/header'
export default {
  // eslint-disable-next-line
  name: "login",
  data () {
    return {
      // eslint-disable-next-line
      msg: "登录",
      userName: null
    };
  },
  components: {
    topHeader
  },
  methods: {
    async Login () {
      sessionStorage.setItem('userName', this.userName);
      this.$router.push("/main");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../static/mixin.scss";
.login_container{
        padding-top: 1.95rem;
        p, span, input{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
.login_form {
  background-color: #fff;
  margin-top: 0.6rem;
  .input_container {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0.8rem;
    border-bottom: 1px solid #f1f1f1;
    input {
      @include sc(1rem, #666);
    }
    button {
      @include sc(0.65rem, #fff);
      font-family: Helvetica Neue, Tahoma, Arial;
      padding: 0.28rem 0.4rem;
      border: 1px;
      border-radius: 0.15rem;
    }
    .right_phone_number {
      background-color: #4cd964;
    }
  }
}
.login_button{
        margin: 0.5rem 1rem;
        @include sc(1rem, #fff);
        background-color: #4cd964;
        padding: .5rem 0;
        border: 1px;
        border-radius: 0.15rem;
        text-align: center;
    }
</style>
