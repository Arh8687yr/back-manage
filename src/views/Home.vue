<template>
  <div>
    <el-button type="info" @click="handleOut">退出</el-button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    handleOut() {
      this.$confirm("您确定退出？").then(() => {
        window.sessionStorage.clear()
        this.$router.push('/login')
      }).catch(err => {
        console.log(err)
      })
    }
  }
};
</script>

<style>
</style>