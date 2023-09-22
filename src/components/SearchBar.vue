<template >
    <div class="flex items-stretch ">
        <input  type="text" 
                class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
                placeholder="Search for any ip address or leave empty to get your ip info"
                v-model="ip"
                @keypress="handleKeyPress"
        >
        <span class="flex bg-black items-center flex rounded-tr-md rounded-br-md" @click="handleSubmit">
            <font-awesome-icon icon="fa-chevron-right"
                class="text-white px-4 "></font-awesome-icon>
        </span>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import { useIpAddressDataStore } from '@/stores/ipAddressData.ts'

    const store = useIpAddressDataStore()

    const ip = ref("")     

    const handleSubmit = () => {
        store.fetch(ip.value)
    }

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key == "Enter") {
            handleSubmit()
        }
    }
</script>
<style>
    
</style>