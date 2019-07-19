<template>
   <button @click="handleClick">子传父btn</button>
</template>

<script>
    export default {
        methods: {
            handleClick() {
                this.$emit('eventName', {msg:'hello'})
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>