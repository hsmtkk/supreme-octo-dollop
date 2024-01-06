<template>
    <h2>気象データ</h2>
    <v-container v-if="showFlag">
        <div>{{ props.results.country }}</div>
        <div>{{ props.results.cityName }}</div>
        <div>{{ props.results.temperature }}</div>
        <NuxtImg v-bind:src="`https://${props.results.icon}`" />
        <span>{{ props.results.conditionText }}</span>
    </v-container>
</template>

<script setup lang="ts">
import type { Results } from "@/interfaces"

interface Props {
    results: Results
}

const props = defineProps<Props>()

const showFlag = computed(() => {
    return (props.results.country != "") && (props.results.cityName != "") && (props.results.temperature != "") && (props.results.icon != "") && (props.results.conditionText != "")
})

</script>