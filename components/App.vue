<template>
    <v-app>
        <v-main>
            <TheTitle />
            <Form v-on:getWeather="getWeather" />
            <Results v-bind:results="results" />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
useHead({
    title: "Vue World Weather",
})

const results = reactive({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
})

const getWeather = async (city: string): Promise<void> => {
    // console.log("getWeather")
    // console.log(city)

    const { data } = await useFetch("/api/getWeather", { params: { city } })
    // console.log("data")
    // console.log(data)
    // console.log("data.value")
    // console.log(data.value)
    results.country = data.value.location.country
    results.cityName = data.value.location.name
    results.temperature = data.value.current.temp_c
    results.conditionText = data.value.current.condition.text
    results.icon = data.value.current.condition.icon
}
</script>