<script lang="ts" setup></script>
<template>
    <!-- APP FILTER COMPONENT -->
    <div class="app-filter-component py-3 mb-[13px] sm:mb-0 sm:py-[27px] flex-col-reverse sm:flex-row flex justify-between">
        <!-- FILTER BUTTONS -->
        <div class="filter-component flex sm:items-center flex-col-reverse sm:flex-row">
            <div class="flex sm:items-center">
                <div
                    class="filter-chip bg-[#F9F5FF] rounded-2xl text-brand-purple-700 text-sm sm:text-base font-medium py-0.5 sm:py-[10px] pl-[10px] pr-2 sm:pl-4 sm:pr-4 flex items-center justify-center h-6 sm:h-10 w-[84px] sm:w-[115px]"
                >
                    <p class="pr-[7px] sm:pr-[13px]">All time</p>
                    <img class="hidden sm:block" src="@/assets/images/cancel-bg.svg" alt="cancel app process" />
                    <img class="sm:hidden block" src="@/assets/images/cancel-sm.svg" alt="cancel app process" />
                </div>
                <div
                    class="filter-chip bg-[#F9F5FF] rounded-2xl text-brand-purple-700 text-sm sm:text-base font-medium py-0.5 sm:py-[10px] pl-[10px] pr-2 sm:pl-4 sm:pr-4 flex items-center justify-center h-6 sm:h-10 w-[107px] sm:w-[133px] mx-3"
                >
                    <p class="pr-[7px] sm:pr-[13px]">US, AU, +4</p>
                    <img class="hidden sm:block" src="@/assets/images/cancel-bg.svg" alt="cancel app process" />
                    <img class="sm:hidden block" src="@/assets/images/cancel-sm.svg" alt="cancel app process" />
                </div>
            </div>
            <button
                class="more-filters border border-[#D0D5DD] py-[10px] px-4 rounded-lg flex justify-center w-full sm:w-auto mb-3 sm:mb-0"
            >
                <img
                    src="@/assets/images/filter.svg"
                    width="15"
                    height="10"
                    alt="Filter Items Icon"
                />
                <p class="text-gray-700 text-sm font-medium pl-[10.5px] hidden sm:block">More filters</p>
                <p class="text-gray-700 text-sm font-medium pl-[10.5px] block sm:hidden">Edit filters</p>
            </button>
        </div>
        <div class="search-component sm:w-80 w-full mb-3 sm:mb-0">
            <Searchbar />
        </div>
    </div>
</template>
<style>
.more-filters {
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
}
</style>
