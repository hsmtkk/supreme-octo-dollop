<template>
    <h2>気象データ</h2>
    {{ props.results }}
</template>

<script setup lang="ts">
interface Props {
    results: Object
}

const props = defineProps<Props>()
</script>