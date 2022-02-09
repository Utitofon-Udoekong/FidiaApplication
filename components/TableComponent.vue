<script lang="ts" setup>
import { useTableData } from '../composables/useTableData';
import Image from './SVGImage.vue';
const tableData = useTableData();
</script>

<template>
  <div class="flex flex-col sm:mb-24">
    <div class="tabling overflow-x-auto sm:rounded-lg">
      <div class=" align-middle inline-block min-w-full">
        <div
          class="overflow-hidden"
        >
          <table class="min-w-full">
            <thead class="bg-white border-b border-b-gray-200">
              <tr>
                <th scope="col" class="pl-6 pr-3 py-3 text-xs font-medium text-left text-gray-500" >
                  <CheckboxFilterComponent/>
                </th>
                <th
                  scope="col"
                  class=" py-3 text-xs font-medium text-left text-gray-500"
                >
                  <span class="flex"
                    >Company
                    <img
                      src="@/assets/images/filter-down.svg"
                      alt="Filter Item Icon"
                      class="ml-[7.33px] mr-[162px] sm:mr-[112px]"
                  /></span>
                </th>
                <th
                  scope="col"
                  class="px-3 py-3 text-xs font-medium text-left text-gray-500"
                >
                  License use
                </th>
                <th
                  scope="col"
                  class="px-3 py-3 text-xs font-medium text-left text-gray-500"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="pr-24 sm:pr-6 py-3 text-xs font-medium text-left text-gray-500"
                >
                  Users
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-left text-gray-500"
                >
                  About
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr class="odd:bg-gray-50 even:bg-white"
              v-for="(data, index) in tableData"
                :key="index">
                <!-- Filter -->
                <td class="w-4 whitespace-nowrap">
                  <CheckboxComponent :checked="data.checked"/>
                </td>
                <!-- Company -->
                <td class="py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <SVGImage class="h-10 w-10 rounded-full"
                        :path="data.imageUrl"
                      :alt="data.alt"/>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900 whitespace-nowrap">
                        {{ data.title }}
                      </div>
                      <div class="text-sm text-gray-500 font-normal">
                        {{ data.subTitle }}
                      </div>
                    </div>
                  </div>
                </td>
                <!-- License use -->
                <td class="px-3 py-4 whitespace-nowrap">
                  <div class="hidden sm:block  w-[88px] bg-gray-200 h-2 rounded">
                    <div
                      class="bg-brand-purple-600 h-full rounded"
                      :style="`width: ${data.progress.lg}px`"
                    ></div>
                  </div>
                  <div class="block sm:hidden w-[69px] bg-gray-200 h-2 rounded">
                    <div
                      class="bg-brand-purple-600 h-full rounded"
                      :style="`width: ${data.progress.sm}px`"
                    ></div>
                  </div>
                </td>
                <!-- Status -->
                <td class="px-3 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                  <span
                    class="px-2 py-1 inline-flex text-xs font-medium rounded-full bg-[#ECFDF3] text-brand-success"
                    :class="
                      data.status === 'Customer'
                        ? 'bg-[#ECFDF3] text-brand-success'
                        : 'bg-gray-100 text-gray-700'
                    "
                  >
                    {{ data.status }}
                  </span>
                </td>
                <!-- Users -->
                <td class="py-4 whitespace-nowrap text-sm text-gray-500">
                  <div class="app-custom-users flex">
                    <div
                      class="avatar border-[1.5px] border-solid border-white rounded-full bg-white -ml-2"
                      :class="user === 1 ? '-ml-0' : '-ml-2'"
                      v-for="user in 5"
                    >
                      <PNGImage
                        :path="data.userGroup + `${user}`"
                        alt="User group Avatar"
                        class="w-6 h-6"
                      />
                    </div>
                    <div
                      v-if="data.userCount.enabled"
                      class="whitespace-nowrap avatar-count border-[1.5px] border-solid border-white rounded-full -ml-2 bg-[#F9F5FF] w-6 h-6 text-xs text-brand-purple-600 font-medium grid place-items-center"
                    >
                      {{ data.userCount.value }}
                    </div>
                  </div>
                </td>
                <!-- About -->
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div class="company-about-info">
                    <p>{{ data.About.title }}</p>
                    <p class="text-gray-500 font-normal">
                      {{ data.About.subTitle }}
                    </p>
                  </div>
                </td>
                <!-- Actions -->
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                 <div class="actions flex">
                    <div class="delete-icon mr-[28.17px] cursor-pointer">
                      <i-uil-trash-alt class="text-[#667085] w-[18px] h-5" />
                    </div>
                    <div class="edit-icon cursor-pointer">
                      <i-lucide-edit-2 class="text-[#667085] w-5 h-5"/>
                    </div>
                  </div>
                </td>
              </tr>
              <!-- More people... -->
            </tbody>
          </table>
          <div
            class="py-[11px] px-6 table-controls h-full w-full sm:flex items-center justify-between border border-t-gray-200 hidden"
          >
            <div class="table-control-cycle mb-[5px]">
              <button
                class="table-control previous border border-gray-300 rounded-md py-[9px] px-[17px] mr-3 text-gray-700 text-sm font-medium"
              >
                Previous
              </button>
              <button
                class="table-control next border border-gray-300 rounded-md py-[9px] px-[17px] text-gray-700 text-sm font-medium"
              >
                Next
              </button>
            </div>
            <div class="entries">
              <p
                class="text-right text-gray-700 text-sm font-normal whitespace-nowrap"
              >
                Page 1 of 10
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-12 px-4">
    <div
      class="flex justify-between items-center border-t-gray-200 border-t  sm:hidden mt-6 pt-4 px-3"
    >
      <div class="previous cursor-pointer">
        <img src="@/assets/images/left.svg" alt="Previous item toggle" />
      </div>
      <div class="entries">
        <p
          class="text-right text-gray-700 text-sm font-normal whitespace-nowrap"
        >
          Page 1 of 10
        </p>
      </div>
      <div class="next cursor-pointer">
        <img src="@/assets/images/right.svg" alt="Next item toggle" />
      </div>
    </div>
  </div>
</template>
<style>
.tabling{
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border: 1px solid #eaecf0;
}
.table-control {
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
}
</style>
