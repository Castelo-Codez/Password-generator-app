<script setup>
import {$NmbrOfRange} from "@/store/store";
</script>
<template>
    <input
        type="range"
        name="passwordLength"
        id="passwordLength"
        v-model="$NmbrOfRange"
        class="bg-primary-verydarkgrey appearance-none accent-primary-lightgreen h-2"
        min="1"
        max="30"
        step="1"
    />
</template>
