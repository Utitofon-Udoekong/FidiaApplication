<script lang="ts" setup>
</script>
<template>
    <div class="app-filter-component py-[27px] flex justify-between">
        <div class="filter-component flex">
            <div
                class="filter-chip bg-[#F9F5FF] rounded-lg text-brand-purple-700 TEXT-BASE font-medium py-[10px] px-4 flex items-center justify-center w-{110px} h-10"
            >
                <p class="pr-[13px]">All time</p>
                <img src="@/assets/images/cancel.svg" alt="cancel app process" />
            </div>
            <div
                class="filter-chip bg-[#F9F5FF] rounded-lg text-brand-purple-700 TEXT-BASE font-medium py-[10px] px-4 flex items-center justify-center w-{133px} h-10 mx-3"
            >
                <p class="pr-[13px]">US, AU, +4</p>
                <img src="@/assets/images/cancel.svg" alt="cancel app process" />
            </div>
            <button
                class="more-filters border border-[#D0D5DD] py-[10px] px-4 rounded-lg flex justify-center"
            >
                <img src="@/assets/images/filter.svg" width="15" height="10" alt="Filter Items Icon" />
                <p class="text-gray-700 text-sm font-medium pl-[10.5px]">More filters</p>
            </button>
        </div>
        <div class="search-component">
            <Searchbar />
        </div>
    </div>
</template>
<style>
.more-filters {
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
}
</style>