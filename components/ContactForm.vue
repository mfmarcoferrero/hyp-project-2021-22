<template>
    <div class="contact-form-external">
        <div class="contact-form-internal">
            <form id="form" @submit="sendMessage">
                <div class="mb-3">
                    <label for="name" class="form-label">Name *</label>
                    <input id="name" v-model="name" type="text" name="name" placeholder="Name" class="form-control"
                        required>
                </div>

                <div class="mb-3">
                    <label for="email" class="form-label">Email address *</label>
                    <input id="email" v-model="email" type="email" name="email" placeholder="Email" required
                        class="form-control" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="mb-3">
                    <label for="message" class="form-label">Message *</label>
                    <textarea id="message" v-model="message" required name="message" maxlength="1000"
                        placeholder="Write here your message" class="form-control" rows="4"></textarea>
                </div>

                <div class="mb-3 form-check">
                    <input id="privacy" v-model="privacy" type="checkbox" name="privacy" required
                        class="form-check-input">
                    <label class="form-check-label" for="privacy">I agree with privacy policies *</label>
                </div>

                <button v-if="messageSent === false" type="submit" class="btn btn-dam">Submit</button>
            </form>

            <!-- SUCCESSFULLY RESPONSE INTERFACE: on message correctly sent -->

            <div v-if="messageSent === true">
                <p class="form-message success">
                    <span class="mdi mdi-email-check"></span>
                    Your message has been sent correctly<br />
                    You will receive a reply in the next few days
                </p>
            </div>

            <div v-if="errorApi === true">
                <p class="form-message success">
                    <span class=""></span>
                    An error ooccured<br />
                    Try again
                </p>
            </div>

        </div>
    </div>
</template>


<script>
export default {

    name: 'ContactForm',
    data() {
        return {
            messageSent: false,
            errorApi: false,

            name: null,
            surname: null,
            email: null,
            message: null,
            privacy: null,
            commercial: null,
        }
    },
    methods: {
        /** Send the message to the server updating the interface according to the outcome */
        sendMessage(e) {
            e.preventDefault()
            this.$axios
                .post('/api/message', {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                    commercialFlag: this.commercial,
                })
                .then(() => {
                    this.messageSent = true// Display the success interface
                })
                .catch(() => {
                    this.messageSent = false
                    this.errorApi = true // Display the error interface
                })
            console.log("Ho fatto il submit con commercial: " + this.commericial);
        },
    }

}
</script>
<style scoped>
.contact-form-internal {
    width: 800px;
    height: auto;
    margin: 0 auto;
    position: relative;
}

.contact-form-external {
    width: 100%;
    height: auto;
    position: relative;
}
</style>