<template>
  <div class="registerBox">
    <div class="logoBox">
      <img src="../assets/imgs/icon-LOGO2.png" alt />
    </div>
    <div class="laginBox">
      <div class="title">登录</div>
      <div class="inputBox">
        <div>
          <i class="el-icon-user-solid"></i>
        </div>
        <el-input v-model="userName" placeholder="请输入您的用户名"></el-input>
      </div>
      <div class="inputBox">
        <div>
          <i class="el-icon-message"></i>
        </div>
        <el-input type="password" v-model="password" placeholder="请输入你的密码"></el-input>
      </div>

      <div class="loginBtn">
        <el-button @click.native="jump(1)">登录</el-button>
      </div>
      <div class="textBox">
        <div>忘记密码?</div>
        <div class="register" @click="jump(2)">注册</div>
      </div>
      <div class="weixinBox">
        <i class="weixinIcon"></i>
        <span>微信登录</span>
      </div>
    </div>
    <div class="goBack">
      返回首页
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userName: "",
      password: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
          //   { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {},
  methods: {
    ...mapActions(["handleuserInfo", "handlehasLogin"]),
    login() {
      let _this = this;
      let url = "/lab2lab/v1/provider/login";
      let data = { userName: this.userName, password: this.password };
      this.Axios.post(url, data).then(res => {
        console.log(res);
        if (res && res.code == 200) {
          let userInfo = res.data;
          _this.handleuserInfo(userInfo);
          _this.handlehasLogin(true);
          this.$message({
            showClose: true,
            message: res.msg,
            type: "success"
          });
          this.$router.push({
            path: "/workbench"
          });
        }
      });
    },
    jump(type) {
      let _this = this;
      let url = "";
      switch (type) {
        case 1:
          _this.login();
          break;
        case 2:
          url = "/register";
          this.$router.push({
            path: url
          });
          break;
        default:
          break;
      }

    }
  }
};
</script>

<style lang="less">
.registerBox {
  background: #f2f4fa;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logoBox {
    height: 3.38rem;
    margin: 2rem;
    object-fit: contain;
  }

  .laginBox {
    width: 31.25rem;
    height: 25rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.3rem;
    padding: 2rem 5rem;
    box-sizing: border-box;

    .inputBox {
      display: flex;
      align-items: center;
      border: 1px solid #e7e9ef;
      margin-bottom: 1rem;
      border-radius: 0.3rem;

      i {
        width: 2rem;
        height: 2rem;
        color: #999999;
        line-height: 2rem;
        font-size: 1.7rem;
        border-right: 1px solid #e7e9ef;
        padding: 0 0.5rem;
        text-align: center;
      }

      .el-input__inner {
        border: none;
      }
    }

    .textBox {
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
      color: #999999;
    }

    .weixinBox {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #999999;
      padding: 2rem 0;

      i {
        width: 1.38rem;
        height: 1.38rem;
        background: pink;
        margin-right: 0.5rem;
        background: url("../assets/imgs/Btn-weixin.png");
        -webkit-background-size: cover;
        background-size: cover;
      }
    }

    .register {
      color: #04af00;
    }

    .label {
      line-height: 1.7rem;
    }

    .title {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .purple {
      margin: 0.5rem 0;
    }
  }
  .loginBtn {
    width: 100%;
    .el-button {
      width: 100%;
      background: linear-gradient(
        90deg,
        rgba(4, 175, 0, 1),
        rgba(52, 225, 34, 1)
      );
      color: #ffffff;
      margin-top: 0.5rem;
    }
  }

  .goBack {
    position: absolute;
    bottom: 1rem;
    color: #999999;
  }
}
</style>
