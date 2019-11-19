<template>
    <div class="footer">
        <div class="footer-cutter"></div>
        <div class="footer-background">
            <div class="footer-content">
                <div class="content" v-html="content.values.content_left"></div>
                <div class="newsletter">
                    <p>
                        <strong>Newsletter Anmeldung</strong>
                    </p>
                    <form class="uk-form-stacked">
                        <div class="uk-margin">
                            <!-- <label class="uk-form-label" for="form-stacked-text">Vorname</label> -->
                            <div class="uk-form-controls">
                                <input
                                    class="uk-input"
                                    id="form-stacked-text"
                                    type="text"
                                    placeholder="Vorname"
                                />
                            </div>
                        </div>
                        <div class="uk-margin">
                            <div class="uk-form-controls">
                                <input
                                    class="uk-input"
                                    id="form-stacked-text"
                                    type="text"
                                    placeholder="Nachname"
                                />
                            </div>
                        </div>
                        <div class="uk-margin">
                            <div class="uk-form-controls">
                                <input
                                    class="uk-input"
                                    id="form-stacked-text"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <button class="uk-button uk-button-secondary">Anmelden</button>
                    </form>
                </div>
                <div class="content content-right">
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
        </div>
    </div>
</template>

<script>
export default {
    name: "PageFooter",
    data() {
        return {
            content: {
                values: {}
            }
        };
    },
    mounted() {
        this.axios
            .get("/footer")
            .then(response => (this.content = response.data));
    }
};
</script>

<style lang="scss" scoped>
@import "~@/sass/_variables.scss";

.footer {
    position: relative;
    overflow: hidden;
    z-index: 0;
    margin-top: 50px;
}

.footer-cutter {
    width: 150%;
    height: 160px;
    position: absolute;
    background-color: $background-color;
    transform: rotate(5deg);
    top: -50px;
    left: -50px;
}

.footer-background {
    background-color: #e89602;
    height: 500px;
    width: 100%;
    margin-top: 1px;
}

.footer-content {
    padding: 200px 100px 0 100px;
    color: white;
    display: flex;

    > div {
        width: 33%;
    }
}

.newsletter {
    border-radius: 20px;
}

.uk-input {
    background-color: transparent;
    color: white;

    &::placeholder {
        color: rgb(255, 255, 255);
    }

    &:focus {
        border-color: $blue;
    }
}

.uk-form-label {
    color: white;
}

.uk-button {
    background-color: $blue;
    width: 100%;
}

.content-right {
    text-align: right;
    color: white;
}

.social-media-icon {
    width: 50px;
    margin-left: 30px;
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

<style lang="scss">
.content {
    a {
        color: white;
        text-decoration: underline;

        &:hover {
            color: white;
        }
    }
}
</style>
