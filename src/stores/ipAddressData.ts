import { defineStore } from 'pinia'
import { useMapStore } from './mapData.ts'

interface Location {
    city: string
    country: string
    lat: Number
    lng: Number
    region: string
    timezone: string
}

interface IpData {
    ip: string
    location: Location
    isp: string
}
type OptionalIpData = IpData | null


const useIpAddressDataStore = defineStore('ipAddressData', {
    state: () => ({
      data: null as OptionalIpData
    }),
    actions: {
        fetch(ip:String) {
            const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_3YF1dA7VN8FtGXJk5YSod2CjBWnwI&ipAddress=${ip}`
            const mapStore = useMapStore()
            fetch(url)
                .then(res => res.json().then(responseData => {
                    this.data = responseData
                    mapStore.update(responseData.location.lat,responseData.location.lng)
                }))
                .catch(err => {
                    console.log(err)
                    alert("Api request failed")
                })
        }
    }
})

export { useIpAddressDataStore }