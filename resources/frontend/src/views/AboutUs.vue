<template>
    <div class="uk-container">
        <h1>Über Uns</h1>
        <custom-content :content="content"></custom-content>
    </div>
</template>

<script>
import CustomContent from '@/components/page/CustomContent';

export default {
  components: {
    CustomContent,
  },
  props: {
    scrollTo: String,
  },
  data() {
    return {
      content: [],
    };
  },
  mounted() {
    this.axios.get('/about-us').then((response) => {
      this.content = response.data;
      if (this.scrollTo) {
        this.$nextTick(() => {
          const element = document.getElementById(this.scrollTo);
          const scrollTop = window.pageYOffset || element.scrollTop;
          const headerOutsideIframe = window.parent.document.getElementsByClassName('uk-navbar-container')[0].clientHeight;
          const finalOffset = element.getBoundingClientRect().top + scrollTop - headerOutsideIframe - 20;
          window.parent.scrollTo({ top: finalOffset });
        });
      }
    });
  },
};
</script>
