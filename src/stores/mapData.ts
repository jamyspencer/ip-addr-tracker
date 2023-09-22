import { defineStore } from 'pinia'
import leaflet from 'leaflet'

type OptionalMap = leaflet.Map | null
const isMap = (item: any) : item is leaflet.Map => item instanceof leaflet.Map

export const useMapStore = defineStore('map', {
    state: ()=> ({ 
        map: null as OptionalMap,
    }),
    actions: {
        init(){
            this.map = leaflet.map("map").setView([38.62727,-90.19789],9)
            const tlayer = leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            })
            this.map.addLayer(tlayer)
        },
        update (lat: number, lng: number) {
            if (isMap(this.map)){
                const mkr = leaflet.marker([lat, lng])
                this.map.addLayer(mkr)
                this.map.setView([lat, lng], 13)
            }
        }
    }
})