<template>
  <div>
    <h2>{{vacancy.name}}</h2>

    <div>
      <h3></h3>
      <div>

      </div>
    </div>

    <div>
      <h3></h3>
      <div>

      </div>
    </div>
    {{props.vacancy}}
  </div>
</template>

<script setup>

  let props = defineProps({
    vacancy:{
      type: Object,
      required: true
    }
  })

</script>

<style scoped>

</style>