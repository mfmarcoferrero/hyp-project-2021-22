<template>
    <div class="contact-form-external">
        <div class="contact-form-internal">
            <form class="">
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputPassword1">
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="mb-3">
                    <label for="text-area" class="form-label">Message</label>
                    <textarea class="form-control" id="text-area" rows="4"></textarea>
                </div>

                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">I want to receive updates about Amsterdam
                        events</label>
                </div>

                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck2">
                    <label class="form-check-label" for="exampleCheck1">I agree with privacy policies</label>
                </div>

                <button type="submit" class="btn btn-dam">Submit</button>
            </form>
        </div>

    </div>

</template>


<script>
export default {

    name: 'ContactForm',
    data() {
        return {
        }
    },
};

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