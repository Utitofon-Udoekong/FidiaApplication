<script lang="ts" setup>
import { useToolBars } from '~~/composables/useToolBars';

const toolbars = useToolBars();
</script>
<template>
<!-- USER TOOLBAR -->
    <div class="py-3 px-28 border-b-brand-gray border-b flex items-center justify-between">
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
        <Searchbar/>
    </div>
</template>
<style>
</style>