<script lang="ts" setup>
import { usePages } from '~~/composables/usePages';

const pages = usePages();

</script>
<template>
    <div class="py-5 sm:px-28 px-4 border-b-brand-gray border-b w-full flex justify-between items-center">
        <!-- APP NAVIGATIONS -->
        <div class="app-user-navigations flex">
            <div class="app-logo-title flex items-center mr-[29.73px]">
                <img src="@/assets/images/logo.png" alt="Untitled UI Logo" class="mr-[10px]" />
                <p class="text-gray-900 text-xl font-medium">Untitled UI</p>
            </div>
            <nav class="app-navigation-links">
                <ul class="hidden sm:flex items-center">
                    <!-- NAVIGATION PAGES -->
                    <span v-for="(page, index) in pages" :key="index">
                        <li
                            class="text-base text-gray-700 py-2 px-3 rounded-md font-medium"
                            :class="page.active ? 'bg-gray-50' : 'bg-none'"
                        >
                            <NuxtLink :to="page.route">{{ page.name }}</NuxtLink>
                        </li>
                    </span>
                </ul>
            </nav>
        </div>
        <!-- CONTROL PANEL ITEMS -->
        <div class="app-user-control-panel sm:flex items-center h-full hidden">
            <button
                class="flex items-center w-[150px] h-10 py-[10px] px-4 rounded-lg border border-[#D0D5DD] justify-around"
            >
                <img src="@/assets/images/bolt.png" alt="Upgrade now" width="15" height="16.67" />
                <p class="text-sm text-gray-700 font-medium">Upgrade now</p>
            </button>
            <div class="app-user-settings ml-[26.83px] mr-[27.33px]">
                <img
                    src="@/assets/images/setting.png"
                    alt="User Settings"
                    width="18.33"
                    height="18.33"
                />
            </div>
            <div class="app-user-notification mr-[28.5px]">
                <img
                    src="@/assets/images/notification.png"
                    alt="User Notifications"
                    width="15"
                    height="16.66"
                />
            </div>
            <div class="app-user-avatar rounded-full">
                <img src="@/assets/images/Avatar.png" alt="User Avatar" />
            </div>
        </div>
        <div class="hamburger sm:hidden block">
            <img src="@/assets/images/hamburger.svg" alt="Hamburger menu icon">
        </div>
    </div>
</template>
<style>
</style>