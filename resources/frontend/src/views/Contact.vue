<template>
    <div class="uk-container">
        <h1>Kontakt</h1>
        <template v-if="contact">
            <div class="text" v-html="contact.values.text"></div>
            <div class="address">
                <div class="address-text" v-html="contact.values.address"></div>
                <iframe
                    class="maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.942244753072!2d7.180160615610324!3d47.021738679150175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e11224ccc19c9%3A0x61a19485b60f7acb!2sAllmenhag+2%2C+2577+Finsterhennen!5e0!3m2!1sde!2sch!4v1543574522722"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
        </template>
    </div>
</template>

<script>
export default {
  data() {
    return {
      contact: null,
    };
  },
  mounted() {
    this.axios.get('/contact').then((response) => {
      this.contact = response.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.text {
    margin-bottom: 50px;
}

.address {
    display: flex;
    flex-wrap: wrap;

    .address-text {
        width: 30%;
        text-align: left;
    }

    .maps {
        width: 70%;
        height: 500px;
    }
}

@media only screen and (max-width: 900px) {
    .address {
        .address-text {
            width: 100%;
        }

        .maps {
            width: 100%;
        }
    }
}
</style>
