<template>
    <form @submit.prevent="onSubmit">
        <input type="text" placeholder="Adicionar Nova Tarefa" v-model="task.name">
        <button type="submit">Adicionar</button>
    </form>
</template>

<script>
export default {
    data () {
        return {
            task: {
                name: '',
                completed: false,
            }
        }
    },
    methods: {
        onSubmit () {
            // this.$store.state.tasks.push(this.tasks)
            // this.$store.commit('ADD_TASK', this.task)
            this.$store.dispatch('addTask', this.task)

            this.task = {
                name: '',
                completed: false,
            }
        }
    }
}
</script>

<style scoped>

</style>
