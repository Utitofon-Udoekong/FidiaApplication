<script lang="ts" setup>
import { useToolBars } from '~~/composables/useToolBars';

const toolbars = useToolBars();
</script>
<template>
<!-- USER TOOLBAR -->
    <div class="py-3 sm:px-28 px-4 border-b-brand-gray border-b hidden sm:flex items-center justify-between">
        <nav class="app-toolbar-links">
            <ul class="flex items-center">
                <!-- NAVIGATION TOOLBARS -->
                <span v-for="(toolbar, index) in toolbars" :key="index">
                    <li
                        class="text-base text-gray-700 py-2 px-3 rounded-md font-medium mr-2"
                        :class="toolbar.active ? 'bg-gray-50' : 'bg-none'"
                    >
                        <NuxtLink :to="toolbar.route">{{ toolbar.name }}</NuxtLink>
                    </li>
                </span>
            </ul>
        </nav>
        <div class="searchbar w-80">
            <Searchbar/>
        </div>
    </div>
</template>
<style>
</style>