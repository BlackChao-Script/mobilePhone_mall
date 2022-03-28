<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'
import { Login, Register } from '@/api/api'
import formjpg from '@/assets/img/form.jpg'

const router = useRouter()
const message = useMessage()

const props = defineProps({
  type: String
})

// 表单数据
const formValue = reactive<any>({
  user_name: '',
  password: ''
})

// 提交表单
const clickSub = async () => {
  try {
    if (props.type == '登录') {
      const res = await Login(formValue)
      window.sessionStorage.setItem('token', res.result.token)
      window.sessionStorage.setItem('name', formValue.user_name)
      router.go(-1)
      message.success('登录成功')
    }
    if (props.type == '注册') {
      await Register(formValue)
      message.success('注册成功')
      formValue.user_name = ''
      formValue.password = ''
    }
  } catch (err: any) {
    message.error(err.message)
  }
}

</script>

<template>
  <div class="form">
    <div class="form_img">
      <img :src="formjpg" />
    </div>
    <div class="form_box">
      <div class="form_go" @click="() => { router.push('/index') }">回主页</div>
      <!--表单 -->
      <div class="box_item">
        <div class="item_title">{{ props.type }}</div>
        <div class="forms">
          <input v-model="formValue.user_name" type="text" placeholder="请输入用户名" />
          <input v-model="formValue.password" type="password" placeholder="请输入密码" />
          <button @click="clickSub">{{ props.type }}</button>
          <p class="message" v-if="props.type == '登录'">
            还没注册?
            <a @click="() => { router.push('/register') }">注册一个</a>
          </p>
          <p class="message" v-else>
            已有账号?
            <a @click="() => { router.push('/login') }">去登录</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.form {
  height: 100vh;
  display: flex;
  .form_img {
    width: 20%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .form_box {
    width: 80%;
    position: relative;
    .form_go {
      cursor: pointer;
      padding: 20px;
      color: #d3e4cd;
      font-weight: 700;
      font-size: 20px;
    }
    .box_item {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 450px;
      height: 350px;
      box-shadow: 0 20px 50px 0 hsl(0deg 0% 64% / 10%);
      .item_title {
        text-align: center;
        font-size: 17px;
        font-weight: 600;
        color: #d3e4cd;
      }
      .forms {
        position: relative;
        z-index: 1;
        background: #ffffff;
        margin: 0 auto 100px;
        padding: 45px;
        text-align: center;
        input {
          font-family: "Roboto", sans-serif;
          outline: 0;
          background: #f2f2f2;
          width: 100%;
          border: 0;
          margin: 0 0 15px;
          padding: 15px;
          box-sizing: border-box;
          font-size: 14px;
        }
        button {
          font-family: "Roboto", sans-serif;
          text-transform: uppercase;
          outline: 0;
          background: #d3e4cd;
          width: 100%;
          border: 0;
          padding: 15px;
          color: #ffffff;
          font-size: 14px;
          -webkit-transition: all 0.3 ease;
          transition: all 0.3 ease;
          cursor: pointer;
        }
        .message {
          margin: 15px 0 0;
          font-size: 12px;
          a {
            color: #d3e4cd;
            cursor: pointer;
          }
        }
        .register-form {
          display: none;
        }
      }
    }
  }
}
</style>
