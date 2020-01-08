<template>
    <div id="buy-information" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
            <!-- <button class="uk-close-large uk-align-right" type="button" uk-close></button> -->
            <button class="uk-modal-close-default uk-close-large" type="button" uk-close></button>
            <div v-html="buyInformation"></div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      buyInformation: '',
    };
  },
  mounted() {
    this.axios
      .get('/buy-information')
      .then((response) => { this.buyInformation = response.data; });
  },
};
</script>

<style lang="scss" scoped>
.uk-modal-body {
    width: 900px;
}

.uk-close-large {
    position: relative;
    float: right;
    /* padding: 0; */
    margin-top: -20px;
}
</style>
