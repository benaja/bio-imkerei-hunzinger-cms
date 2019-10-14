<template>
    <div class="footer">
        <div class="footer-cutter"></div>
        <div class="footer-background">
            <div class="footer-content">
                <div class="contact">
                    <p>
                        <strong>Kontakt</strong>
                        <br />Martin und Kornelia Hunzinger
                        <br />2577 Finsterhennen
                        <br />Allmenhag 2
                        <br />Tel: 032 396 34 03
                        <br />Email: info@imkerei-hunzinger.ch
                    </p>
                </div>
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
                <div class="links">
                    <p>
                        <strong>Nützliche Links</strong>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageFooter"
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
