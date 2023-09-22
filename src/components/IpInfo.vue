<script setup lang="ts">
    import IpInfoItem from './IpInfoItem.vue'
    import { useIpAddressDataStore } from '@/stores/ipAddressData'
    
    const store = useIpAddressDataStore()

</script>

<template>
    <div v-if="store.data" class="absolute -bottom-64 lg:-bottom-20 flex flex-col lg:flex-row bg-white gap-y-4 gap-x-12 px-8 pt-8 pb-12 rounded-md">
        <IpInfoItem title="Ip address" :val="store.data.ip"/>
        <IpInfoItem title="Location" :val="store.data.location.region"/>
        <IpInfoItem title="timezone" :val="store.data.location.timezone"/>
        <IpInfoItem title="isp" :val="store.data.isp"/>
    </div>
</template>
