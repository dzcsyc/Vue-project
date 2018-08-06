<template>
    <header id='top-header'>
        <section class="goback" v-if= canGoBack  @click="$router.go(-1)">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
        </section>
        <section class="title_head" v-if="headTitle">
            <p class="title_text">{{headTitle}}</p>
        </section>
    </header>
</template>

<script>
export default {
  data () {
    return {};
  },
  props: ['headTitle', 'canGoBack']
};
</script>

<style lang="scss" scoped>
@import "../../static/mixin";

#top-header {
  background-color: $blue;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  @include wh(100%, 1.95rem);
}
.goback {
  left: 0.4rem;
  @include wh(0.6rem, 1rem);
  line-height: 2.2rem;
  margin-left: 0.4rem;
}
.title_head {
  @include center;
  width: 50%;
  color: #fff;
  text-align: center;
  .title_text {
    @include sc(0.8rem, #fff);
    text-align: center;
    font-weight: bold;
  }
}
</style>
