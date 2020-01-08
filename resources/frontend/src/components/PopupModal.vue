<template>
    <div>
        <div
            id="modal-center"
            class="uk-flex-top"
            uk-modal
            ref="modal"
            @hide="$emit('input', false)"
        >
            <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
                <button class="uk-modal-close-default uk-close-large" type="button" uk-close></button>
                <success-icon v-if="type === 'success'"></success-icon>
                <error-icon v-if="type === 'error'"></error-icon>
                <h2>{{title}}</h2>
                <p>{{text}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import SuccessIcon from '@/components/icons/SuccessIcon';
import ErrorIcon from '@/components/icons/ErrorIcon';

export default {
  components: {
    SuccessIcon,
    ErrorIcon,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: String,
    text: String,
    type: {
      type: String,
      default: 'success',
    },
  },
  watch: {
    value() {
      if (this.value) this.$UIkit.modal(this.$refs.modal).show();
    },
  },
};
</script>

<style lang="scss" scoped>
.uk-close-large {
    position: relative;
    float: right;
    /* padding: 0; */
    margin-top: -20px;
}

h2,
p {
    text-align: center;
}
</style>
