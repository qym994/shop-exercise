<script setup lang="ts">
const route = useRoute();
const isLogin = computed(() => route.path == '/login');
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator';
import type { Rules } from 'async-validator';
const formData = reactive({
  username: 'swk@hgs.com',
  email: 'swk@hgs.com',
  password: '123123',
  confirmPassword: '',
});
//表单验证
const rules = computed(() => {
  let rules: Rules = {
    username: [
      {
        type: 'string',
        required: true,
        message: '请输入用户名',
      },
      {
        min: 4,
        message: '至少需要四个字符',
      },
    ],
    password: [
      {
        type: 'string',
        required: true,
        message: '请输入密码',
      },
      {
        min: 6,
        message: '密码至少需要6位',
      },
      // {
      //   pattern:
      //     /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/,
      //   message: '密码必须包含大写字母，小写字母，数字，特殊符号任意三项',
      // },
    ],
    confirmPassword: [
      {
        type: 'string',
        required: true,
        message: '请确认密码',
      },
      {
        validator(rule, value, cb, source) {
          if (value !== '' && value !== source.password) {
            cb(Error('两次输入的密码不一致！'));
          } else {
            cb();
          }
        },
      },
    ],
  };
  if (isLogin.value) {
    rules = {
      username: [
        {
          type: 'string',
          required: true,
          message: '请输入用户名',
        },
        {
          min: 4,
          message: '至少需要四个字符',
        },
      ],
      password: [
        {
          type: 'string',
          required: true,
          message: '请输入密码',
        },
        {
          min: 6,
          message: '密码至少需要6位',
        },
        // {
        //   pattern:
        //     /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/,
        //   message: '密码必须包含大写字母，小写字母，数字，特殊符号任意三项',
        // },
      ],
    };
  }
  return rules;
});
const loginUser = useLoginUserStore();
const { pass, errorFields } = useAsyncValidator(formData, rules);
//发送请求
const url = computed(() => {
  if (isLogin.value) {
    return 'users/login';
  } else {
    return 'users/signup';
  }
});
const { execute } = useFetch(url, { immediate: false }).post(formData);

const router = useRouter();
//提交表单
const submitHandler = () => {
  if (isLogin.value) {
    execute()
      .then((res) => res.json())
      .then((json) => {
        loginUser.login(json);
        router.push('/home');
      })
      .catch(() => alert('账号或密码错误请重新输入'));
  }
};
</script>
<template>
  <div class="wrapper">
    <BackButton></BackButton>
    <div class="info">
      <h1 v-if="isLogin">请注册账号！</h1>
      <h1 v-else>请登录账号！</h1>
    </div>
    <form @submit.prevent="submitHandler">
      <FormInput
        v-model="formData.username"
        type="text"
        label="请输入用户名"
        :errors="errorFields?.username"
      ></FormInput>
      <FormInput
        v-model="formData.password"
        type="password"
        label="请输入密码"
        :errors="errorFields?.password"
      ></FormInput>
      <FormInput
        type="password"
        label="请确认密码"
        v-model="formData.confirmPassword"
        :errors="errorFields?.confirmPassword"
        v-if="!isLogin"
      ></FormInput>
      <div v-if="isLogin" class="switch-wrap">
        <span>还没有账号？点击</span>
        <router-link to="/register" class="switch-button">注册</router-link>
      </div>
      <div v-else class="switch-wrap">
        <span>已有账号？点击</span>
        <router-link to="/login" class="switch-button">登录</router-link>
      </div>
      <button class="comitButton" v-if="isLogin" :disabled="!pass">登录</button>
      <button class="comitButton" v-else :disabled="!pass">注册</button>
    </form>
  </div>
</template>
<style lang="scss" scroped>
.wrapper {
  padding: 40rem 20rem 0;
  .switch-wrap {
    font-size: 16rem;
    .switch-button {
      color: tomato;
    }
  }
  .comitButton {
    position: fixed;
    bottom: 80rem;
    width: 335rem;
    height: 40rem;
    font-size: 20rem;
    &:disabled {
      color: #ddd;
    }
  }
}
</style>
