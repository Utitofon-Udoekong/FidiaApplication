<script lang="ts" setup>
</script>
<template>
    <div
        class="app-search-bar rounded-lg border border-[#D0D5DD] flex w-full h-11 px-[14px] py-[10px]"
    >
        <img
            src="@/assets/images/search-icon.svg"
            alt="Search Icon"
            width="15"
            height="15"
            class="mr-[10.5px] cursor-pointer"
        />
        <input
            type="search"
            class="placeholder-gray-500 text-base font-normal text-gray-500 outline-none focus:border-none"
            placeholder="Search"
        />
    </div>
</template>
<style>
.app-search-bar{
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
}
</style>