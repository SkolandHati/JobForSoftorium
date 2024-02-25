<template>

  <div class="page">
    <header>
      <h1>Хочешь работать над интересными проектами?</h1>
      <hr>
      <h3>В команду Softorium требуются:</h3>
    </header>

    <section class="content" v-if="store.data">

        <vacancy v-for="(item , index) in store.data"
                 :key="index"
                 :vacancy="item"></vacancy>

    </section>
  </div>
</template>

<script setup>

  import vacancy from '~/components/vacancy'
  import {useStore} from "~/store/index.js"

  const store = useStore()
  store.getDataFromDataBase()

  // console.log(store.data)
  // console.log(store.data)

</script>

<style scoped>

</style>