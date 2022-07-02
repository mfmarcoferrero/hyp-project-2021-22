<!-- 

    Component: ContactForm
    Description: Form to send messages and save it into db. A post api is called when submit is done
    Use: contact
    
-->
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

        <!-- RESPONSE INTERFACE: When button is clicked it's not possible to send a new one 
                                and a message showing that request has been sent is shown 
                                (even if an error occured, but message request has been sent) -->

        <div v-if="messageSent === true || errApi == true">
            <p>
                Your request has been sent. <br> Reload to send a new one.
            </p>
        </div>

        <!-- MODAL: informs users that message has been sent and will reaceive a response
                    or an error with api/backend occurs -->

        <div class="modal fade" id="responseModal" tabindex="-1" aria-labelledby="responseModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal header change its content if there is an error or if message is sent with success -->

                    <div class="modal-header">
                        <h5 v-if="messageSent === true" class="modal-title" id="responseModalLabel">Your message has
                            been
                            sent</h5>
                        <h5 v-if="errorApi === true" class="modal-title" id="responseModalLabel">An error occured</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <!-- Modal body change its content if there is an error or if message is sent with success -->

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
        // Variables used to save message content and state of message sending

        return {
            messageSent: false,
            errorApi: false,

            name: null,
            email: null,
            message: null,
            privacy: null,
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
            // Show modal with message
            modal.toggle()
        },

        backToHomePage() {
            this.$router.push('/');
        }
    }

}
</script>