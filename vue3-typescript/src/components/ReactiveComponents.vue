<script setup lang="ts">
import { reactive } from 'vue';

type User = {
    id: number,
    name: string
}
const user1: User = {
    id: 1,
    name: '添田'
}

const user2 = reactive({} as User)
user2.id = 1
user2.name = '伏黒'


</script>

<template>
    <article>
        <h2>reacrive</h2>
        {{ user1.name }}
        {{ user2.name }}
    </article>
</template>
