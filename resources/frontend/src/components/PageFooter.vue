<template>
    <div class="footer">
        <div class="footer-cutter"></div>
        <div class="footer-background">
            <div class="footer-content">
                <div class="site-content" v-html="content.values.content_left"></div>
                <div class="newsletter">
                    <p>
                        <strong>Newsletter Anmeldung</strong>
                    </p>
                    <form class="uk-form-stacked" ref="form">
                        <div class="uk-margin">
                            <text-input
                                v-model="newsletter.firstname"
                                placeholder="Vorname"
                                :rules="[rules.required]"
                            ></text-input>
                        </div>
                        <div class="uk-margin">
                            <text-input
                                v-model="newsletter.lastname"
                                placeholder="Nachname"
                                :rules="[rules.required]"
                            ></text-input>
                        </div>
                        <div class="uk-margin">
                            <text-input
                                v-model="newsletter.email"
                                placeholder="Email"
                                tpye="email"
                                :rules="[rules.required, rules.email]"
                            ></text-input>
                        </div>
                        <button class="uk-button uk-button-primary" @click="subscribe">Anmelden</button>
                    </form>
                </div>
                <div class="site-content content-right">
                    <div v-html="content.values.content_right"></div>
                    <a href="https://www.facebook.com/bioimkereihunzinger/">
                        <img
                            class="social-media-icon"
                            src="/icons/facebook-logo.svg"
                            alt="facebook icon"
                        />
                    </a>
                    <a href="https://www.instagram.com/bio_imkerei_hunzinger/?hl=de">
                        <img
                            class="social-media-icon"
                            src="/icons/instagram-logo.svg"
                            alt="instagram icon"
                        />
                    </a>
                </div>
            </div>
            <div class="hexagons">
                <hexagon-row small uneven inverted>
                    <hexagon small color="yellow" :opacity="0.3" />
                </hexagon-row>
                <hexagon-row small inverted>
                    <hexagon small color="yellow" :opacity="0.4" />
                </hexagon-row>
                <hexagon-row small uneven inverted>
                    <hexagon small color="yellow" :opacity="0.4" />
                    <hexagon small color="yellow" :opacity="0.5" />
                    <hexagon small color="yellow" :opacity="0.6" />
                </hexagon-row>
                <hexagon-row small inverted>
                    <hexagon small color="yellow" :opacity="0.6" />
                    <hexagon small color="yellow" :opacity="0.7" />
                    <hexagon small color="yellow" :opacity="0.8" />
                </hexagon-row>
                <hexagon-row small uneven inverted>
                    <hexagon small color="yellow" :opacity="0.8" />
                    <hexagon small color="yellow" :opacity="0.9" />
                    <hexagon small color="yellow" />
                </hexagon-row>
                <hexagon-row small inverted>
                    <hexagon small color="yellow" />
                    <hexagon small color="yellow" />
                    <hexagon small color="yellow" />
                </hexagon-row>
            </div>
        </div>
        <div class="footer-buttom-bar">
            <p>© {{ new Date().getFullYear() }} by Benaja Hunzinger</p>
        </div>
        <popup-modal
            v-model="modal.isOpen"
            :title="modal.title"
            :text="modal.text"
            :type="modal.type"
        ></popup-modal>
    </div>
</template>

<script>
import TextInput from '@/components/form/TextInput';
import PopupModal from '@/components/PopupModal';
import HexagonRow from '@/components/hexagon/HexagonRow';
import Hexagon from '@/components/hexagon/Hexagon';

export default {
  name: 'PageFooter',
  components: {
    TextInput,
    PopupModal,
    HexagonRow,
    Hexagon,
  },
  data() {
    return {
      content: {
        values: {},
      },
      rules: {
        required: v => !!v || 'Dieses Feld ist erforderlich',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Ungültige Email';
        },
      },
      newsletter: {},
      modal: {
        title: 'Erfolgreich gespeichert',
        text: 'fdfdsf',
      },
    };
  },
  mounted() {
    this.axios
      .get('/footer')
      .then((response) => { this.content = response.data; });
  },
  methods: {
    subscribe(event) {
      event.preventDefault();
      let allValid = true;
      for (let i = 0; i < this.$children.length; i++) {
        if (
          this.$children[i].validate
                    && this.$children[i].validate() !== true
        ) {
          allValid = false;
        }
      }
      if (allValid) {
        this.axios
          .post('/newsletter', this.newsletter)
          .then(() => {
            this.newsletter = {};
            this.modal = {
              isOpen: true,
              title: 'Erfolgreich Angemeldet',
              text:
                                'Sie haben sich erfolgreich für den Newsletter angemeldet.',
            };
          })
          .catch((error) => {
            if (
              error.response
                            && error.response.data.includes('email already exists')
            ) {
              this.modal = {
                isOpen: true,
                title: 'Email exisitert bereits',
                text:
                                    'Sie haben sich bereits für den Newsletter angemeldet.',
                type: 'error',
              };
            } else {
              this.modal = {
                isOpen: true,
                title: 'Unbekannter Fehler',
                text:
                                    'Es ist ein unbekannter Fehler aufgetreten. Versuchen Sie es später erneut, oder kontaktieren Sie uns.',
                type: 'error',
              };
            }
          });
      }
      // let inputs = this.$refs.form.getElementsByClassName(
      //     "uk-form-controls"
      // );
      // for (let i = 0; i < inputs.length; i++) {
      //     console.log(inputs[i]);
      //     console.log(inputs[i].validate());
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/sass/_variables.scss";

.footer {
    position: relative;
    overflow: hidden;
    z-index: 0;
}

.footer-cutter {
    width: 150%;
    height: 160px;
    position: absolute;
    background-color: $background-color;
    transform: rotate(2deg);
    top: -50px;
    left: -50px;
}

.footer-background {
    background-color: white;
    width: 100%;
    margin-top: 1px;
}

.footer-content {
    padding: 170px 100px 0 100px;
    color: black;
    display: flex;
    flex-wrap: wrap;

    > div {
        width: 28%;
        margin-bottom: 50px;
    }
}

.newsletter {
    border-radius: 20px;
    max-width: 600px;
}

.uk-button {
    width: 100%;
}

.content-right {
    text-align: right;
    color: black;
}

.social-media-icon {
    width: 50px;
    margin-left: 30px;
}

.hexagons {
    position: absolute;
    right: 0;
    bottom: -$hexagonMobileHeight / 2;
}

.footer-buttom-bar {
    p {
        margin: 0;
        padding: 10px 100px;
    }
}

@media only screen and (max-width: 1800px) {
    .footer-cutter {
        transform: rotate(5deg);
    }
}

@media only screen and (max-width: 1200px) {
    .footer-content {
        > div {
            width: 100%;
        }
    }

    .content-right {
        text-align: left;
    }
}

@media only screen and (max-width: 1000px) {
    .footer-content {
        padding: 200px 20px 0 20px;
    }

    .footer-buttom-bar p {
        padding: 10px 20px;
    }
}

@media only screen and (max-width: 600px) {
    .footer-cutter {
        transform: rotate(10deg);
    }

    .hexagons {
        right: -($hexagonVerySmallHeight * 1.5 + $hexagonVerySmallHeight / 10);
    }
}

@media only screen and (max-width: 400px) {
    .footer-cutter {
        transform: rotate(10deg);
    }
}
</style>

<style lang="scss">
.site-content {
    a {
        color: black;
        text-decoration: underline;

        &:hover {
            color: black;
        }
    }
}
</style>
