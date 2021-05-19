<template>
    <div> LOGIN PAGE - Hello {{ message }} <router-link to="/user/dashboard">Dashboard</router-link> </div>
</template>

<script>
export default {
    data() {
        return {
            message: "wellcome to vue js"
        }
    }
}
</script>

<style>

</style>