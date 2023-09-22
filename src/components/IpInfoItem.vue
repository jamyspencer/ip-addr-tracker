<script setup lang="ts">
    import { defineProps } from 'vue';

    interface ItemProps {
        title: string,
        val: string
    }

    defineProps<ItemProps>()
    
</script>

<template>
    <div class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">{{ title }}</h3>
        <span class="text-2xl">{{ val }}</span>
    </div>
</template>
