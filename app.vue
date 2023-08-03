<template>
  <div>
    <Loading v-if="loading" />
    <div v-if="!loading">
      <Nav />
      <Section01/>
      <Section02/>
      <Section03/>
      <Section-04/>
    </div>
  </div>
</template>
<script>
export default {
data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
};
</script>