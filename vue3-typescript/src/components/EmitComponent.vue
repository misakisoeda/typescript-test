<script setup lang="ts">
const emit = defineEmits<{
    (e : 'btnClick', message: string) : void
}>()
const buttonClick = (message: string) : void => {
    emit('btnClick', message)   //第２引数で打ち上げる
}
</script>

<template>
    <article>
        <h2>Emit</h2>
        <button @click="buttonClick('子でクリックされた')">クリック</button>
    </article>
</template>
