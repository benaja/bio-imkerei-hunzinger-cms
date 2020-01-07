<template>
    <div class="uk-form-controls">
        <input
            v-model="text"
            class="uk-input"
            :class="{error: !!errorMessage}"
            id="form-stacked-text"
            type="text"
            :placeholder="placeholder"
            @blur="validate"
            :type="type"
        />
        <p class="validation-error">{{errorMessage}}</p>
    </div>
</template>

<script>
export default {
    props: {
        value: String,
        rules: Array,
        placeholder: String,
        type: {
            type: String,
            default: "text"
        }
    },
    data() {
        return {
            errorMessage: null
        };
    },
    methods: {
        validate() {
            for (let i = 0; i < this.rules.length; i++) {
                if (this.rules[i](this.value) !== true) {
                    this.errorMessage = this.rules[i](this.value);
                    return this.errorMessage;
                }
            }
            this.errorMessage = null;
            return true;
        }
    },
    computed: {
        text: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~@/sass/_variables.scss";

.uk-input {
    background-color: transparent;
    color: black;

    &::placeholder {
        color: rgb(95, 95, 95);
    }

    &:focus {
        border-color: $blue;
    }

    &.error {
        border-color: $red;
    }
}

.uk-form-label {
    color: black;
}

.validation-error {
    color: $red;
    height: 1em;
    margin-top: 5px;
    font-size: 0.8rem;
}
</style>
