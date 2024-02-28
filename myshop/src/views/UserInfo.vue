<script setup lang="ts">
const loginUser = useLoginUserStore();
const router = useRouter();
const logoutHandler = () => {
  loginUser.logout();
  router.push('/');
};
</script>
<template>
  <div class="user">
    <h2 class="title">我的信息</h2>
    <SvgIcon name="icon-logout" class="logout" @click="logoutHandler"></SvgIcon>
    <div class="userInfo">
      <div class="avatar">
        <img :src="loginUser.loginUser.user?.avatar_url" alt="头像" />
      </div>
      <div class="username">
        <p class="name">{{ loginUser.loginUser.user?.username }}</p>
        <p class="email">{{ loginUser.loginUser.user?.email }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scroped>
.user {
  position: relative;
  .title {
    text-align: center;
    font-size: 30rem;
  }
  .logout {
    font-size: 20rem;
    position: absolute;
    right: 20rem;
    top: 34rem;
  }
  .userInfo {
    display: flex;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.3);
    border-radius: 15px;
    margin: 20rem;
    .avatar {
      width: 100rem;
      border-radius: 20px;
      overflow: hidden;
      margin-right: 30rem;
    }
    .username {
      margin-top: 10rem;
      .name {
        font-size: 16rem;
      }
    }
  }
}
</style>
