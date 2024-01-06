<template>
    <v-container>
        <v-form>
            <v-text-field placeholder="都市名を英語で入力" v-model="city" />
            <v-btn v-on:click="getWeather">Get Weather</v-btn>
        </v-form>
    </v-container>
</template>

<script setup lang="ts">
const city = ref("")

type Emits = {
    getWeather: [city: string]
}

const emit = defineEmits<Emits>()

const getWeather = (): void => {
    emit("getWeather", city.value)
    city.value = ""
}
</script>