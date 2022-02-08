<script lang="ts">
</script>
<template>
    <div class="app-dashboard-header block sm:flex justify-between">
        <div class="app-user-greetings h-full pt-8 sm:pt-12">
            <h1 class="text-2xl sm:text-3xl text-gray-900 font-medium">Welcome back, Olivia</h1>
            <p
                class="text-gray-500 text-base font-normal pt-1"
            >Track, manage and forecast your customers and orders.</p>
        </div>
        <div class="app-action-buttons flex pt-4 pb-8 sm:py-12">
            <button
                class="upload-item-button rounded-lg border border-[#D0D5DD] py-[10px] px-4 flex justify-around mr-3"
            >
                <img
                    src="@/assets/images/upload.svg"
                    alt="Import system item"
                    width="18.34"
                    height="15"
                    class="mr-[8.84px]"
                />
                <p class="text-sm font-medium text-gray-700">Import</p>
            </button>
            <button
                class="add-item-button rounded-lg border bg-brand-purple-600 border-[#7F56D9] py-[10px] px-4 flex justify-around"
            >
                <img src="@/assets/images/plus.svg" alt="Import system item" class="mr-[12.17px]" />
                <p class="text-sm font-medium text-white">Add</p>
            </button>
        </div>
    </div>
</template>
<style>
</style>