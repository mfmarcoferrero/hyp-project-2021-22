<template>
    <main class="page-container">
        <section class="section-container error-messages">
            <h1 class="text-center m-5"> Page not found</h1>
            <nuxt-link to="/">
                <button type="button"
                    class="btn btn-outline-secondary btn-lg px-4 position-absolute start-50 translate-middle mt-4">
                    Go back to the homepage
                </button>
            </nuxt-link>
        </section>
    </main>
</template>

<script>

export default {
    layout: 'nocrumbs',
    head() {
        return {
            title: 'VisitDam | Error',
        }
    },
}
</script>

<style scoped>
</style>