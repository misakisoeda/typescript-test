<script setup lang="ts">
import RefComponents from '@/components/RefComponents.vue';
import ReactiveComponents from '@/components/ReactiveComponents.vue';
import EventComponents from '@/components/EventComponents.vue';
import ComputedComponent from '@/components/ComputedComponent.vue';
import PropsComponent from '@/components/PropsComponent.vue';
import PropTypeComponent from '../components/PropTypeComponent.vue';
import EmitComponent from '@/components/EmitComponent.vue';
const propTypeTest = [
  {id: 1, name: '商品1'},
  {id: 2, name: '商品2'}
]
const emitTest = (message: string) : void => {
  console.log(message)
}
</script>

<template>
  <main>
    <RefComponents />
    <ReactiveComponents />
    <EventComponents />
    <ComputedComponent />
    <!-- <PropsComponent v-bind:id=1 name="商品1" /> //数字や変数を渡すとき-->
    <PropsComponent :id=3 name="商品1" />
    <PropTypeComponent :items=propTypeTest />
    <EmitComponent @btn-click="emitTest" />
  </main>
</template>
