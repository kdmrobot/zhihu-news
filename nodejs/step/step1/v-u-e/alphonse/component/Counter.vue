<template>

  <div id="app3">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }},name is {{$store.state.name}}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="setName">haha2344</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <input  v-model="$store.state.name">
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'setName',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>
