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
          element.scrollIntoView();
          window.scrollBy(0, -100);
        });
      }
    });
  },
};
</script>
