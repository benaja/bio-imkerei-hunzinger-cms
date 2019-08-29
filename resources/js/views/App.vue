<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

UIkit.use(Icons);

export default {};
</script>

<style lang="scss">
@import "~@/sass/_variables.scss";

body {
  background-color: rgb(240, 240, 240);
}

.uk-link,
a {
  color: #e89602;
  &:hover {
    color: #dd9000;
  }
}

.text-editor-content {
  &.dark {
    p,
    h1,
    h2,
    h3 {
      color: white;

      em {
        color: white;
      }
    }
  }
}
</style>
