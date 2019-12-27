<template>
  <div class="login">
    <div class="login-box">
      <div class="userpng">
        <img src="@/assets/logo.png" alt />
      </div>
      <div>
        <el-form ref="loginForm" :model="user" :rules="rules" label-width="0">
          <el-form-item prop="username">
            <el-input v-model="user.username" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="user.password" type="password" prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 这是登录表单的数据绑定对象
      user: {
        // 双向绑定表单的数据项
        username: "admin",
        password: "123456"
      },
      // 这是表单的校验规则 为校验项使用prop绑定校验规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 10, message: "长度在4-10个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在6-18个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // 点击登录按钮进行预校验
    login() {
      // validate(callback(是否检验成功,未通过校验的字段))
      this.$refs.loginForm.validate(async valid => {
        // 校验不通过，返回
        if (!valid) return;
        // 校验通过，发起请求
        this.$http.post("login", this.user).then( data => {
          // console.log(data)
          const {data:res} = data
          // 登录成功之后的操作：
          // 1. 将token 保存到客户端的sessionStorage中(local是持久化)
          window.sessionStorage.setItem('token',res.data.token)
          // 2. 跳转到首页
          this.$message.success("登陆成功")
          this.$router.push("/home")
        });
      });
    },
    // 点击重置按钮重置表单
    resetLoginForm() {
      this.$refs.loginForm.resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #2b4b6b;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    width: 25rem;
    height: 20rem;
    background-color: #fff;
    border-radius: 0.8rem;
    position: relative;
    padding: 5.5rem 2rem;
    box-sizing: border-box;
    .userpng {
      width: 5rem;
      height: 5rem;
      background-color: #fff;
      border: 2px solid #ccc;
      box-shadow: 0 0 5px #222;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .btns {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
