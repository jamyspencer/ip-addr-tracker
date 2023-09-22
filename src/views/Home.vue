<script setup lang="ts">
    import SearchBar from '@/components/SearchBar.vue'
    import IpInfo from '@/components/IpInfo.vue'
    import { onMounted } from 'vue'
    import { useMapStore } from '@/stores/mapData.ts'

    const store = useMapStore()

    onMounted(()=> {
        store.init()
    })

</script>

<template>
    <div class="flex flex-col h-screen max-h-screen">
        <div class="z-20 flex justify-center relative bg-hero-pattern bg-cover px-4 pt-8 pb-32">
            <div class="w-full max-w-screen-sm">
                <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
                <SearchBar></SearchBar>
                <IpInfo />
            </div>
        </div>
        <div id="map" class="h-full z-10" ></div>
    </div>
</template>