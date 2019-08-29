<template>
  <div class="footer">
    <div class="footer-cutter"></div>
    <div class="footer-background"></div>
  </div>
</template>

<script>
export default {
  name: "PageFooter"
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  overflow: hidden;
  z-index: -1;
  margin-top: 50px;
}

.footer-cutter {
  width: 150%;
  height: 160px;
  position: absolute;
  background-color: white;
  transform: rotate(5deg);
  top: -50px;
  left: -50px;
}

.footer-background {
  background-color: #e89602;
  height: 500px;
  width: 100%;
}

@media only screen and (max-width: 100px) {
  .footer-cutter {
    transform: rotate(10deg);
  }
}

@media only screen and (max-width: 600px) {
  .footer-cutter {
    transform: rotate(15deg);
  }
}
</style>