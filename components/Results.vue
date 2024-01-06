<template>
    <v-container v-if="showFlag">
        <v-list>
            <v-list-item>{{ props.results.country }}</v-list-item>
            <v-list-item>{{ props.results.cityName }}</v-list-item>
            <v-list-item>{{ props.results.temperature }}</v-list-item>
            <v-list-item>
                <NuxtImg v-bind:src="`https://${props.results.icon}`" />{{ props.results.conditionText }}
            </v-list-item>
        </v-list>
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