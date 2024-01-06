const WEATHER_API_URL = "http://api.weatherapi.com/v1/current.json"

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const api_key = config.WEATHER_API_KEY
    const query = getQuery(event)
    const city = query.city
    const fetched = await $fetch(WEATHER_API_URL, { params: { key: api_key, q: city, aqi: "no" } })
    return fetched
})