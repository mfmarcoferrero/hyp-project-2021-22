<template>
    <div>
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
                <input id="privacy" v-model="privacy" type="checkbox" name="privacy" required class="form-check-input">
                <label class="form-check-label" for="privacy">I agree with privacy policies *</label>
            </div>

            <button v-if="messageSent === false" type="submit" class="btn btn-dam">Submit</button>
        </form>

        <!-- SUCCESSFULLY RESPONSE INTERFACE: on message correctly sent -->

        <div v-if="messageSent === true || errApi == true">
            <p>
                Your request has been sent. <br> Reload to send a new one.
            </p>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="responseModal" tabindex="-1" aria-labelledby="responseModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 v-if="messageSent === true" class="modal-title" id="responseModalLabel">Your message has
                            been
                            sent</h5>
                        <h5 v-if="errorApi === true" class="modal-title" id="responseModalLabel">An error occured</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <span v-if="messageSent === true"> You will receive a message from Visit-DAM as soon as
                            possible</span>
                        <span v-if="errorApi === true"> At the moment this service is not available. <br> Try again
                            later </span>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                            @click="backToHomePage()">Back to HomePage</button>
                    </div>
                </div>
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

            var modal = new bootstrap.Modal(document.getElementById('responseModal'), {
                keyboard: false
            })

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
            modal.toggle()
        },

        backToHomePage() {
            this.$router.push('/');
        }
    }

}
</script>