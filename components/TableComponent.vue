<script lang="ts" setup>
import { useTableData } from "~~/composables/useTableData";
import Image from "./Image.vue";

const tableData = useTableData();
</script>
<template>
  <div class="flex flex-col sm:mb-24">
    <div class="table-layout overflow-x-auto sm:rounded-lg">
      <div class="inline-block w-full align-middle">
        <div class="">
          <table class="w-full table-auto">
            <thead class="bg-white border border-b-gray-200">
              <tr>
                <th scope="col" class="py-3 pl-6 pr-3">
                  <CheckboxFilterComponent />
                </th>
                <th
                  scope="col"
                  class="h-full text-xs font-medium text-left text-gray-500"
                >
                  <span class="flex"
                    >Company
                    <img
                      src="@/assets/images/filter-down.svg"
                      alt="Filter Item Icon"
                      class="ml-[7.33px] mr-[132px]"
                  /></span>
                </th>
                <th
                  scope="col"
                  class="text-xs font-medium text-left text-gray-500"
                >
                  License use
                </th>
                <th
                  scope="col"
                  class="text-xs font-medium text-left text-gray-500"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="text-xs font-medium text-left text-gray-500"
                >
                  Users
                </th>
                <th
                  scope="col"
                  class="text-xs font-medium text-left text-gray-500"
                >
                  About
                </th>
                <th
                  scope="col"
                  class="text-xs font-medium text-left text-gray-500 sr-only"
                >
                  <div class="">Actions</div>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr
                class="py-4 w-full odd:bg-gray-50 even:bg-white"
                v-for="(data, index) in tableData"
                :key="index"
              >
                <td class="w-4">
                  <CheckboxComponent :checked="data.checked" />
                </td>
                <!-- company -->
                <td
                  class="py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                >
                  <div class="flex">
                    <Image
                      :path="data.imageUrl"
                      :alt="data.alt"
                      class="mr-4 w-10 h-10"
                    />
                    <div class="company-title">
                      <p class="text-sm font-medium">{{ data.title }}</p>
                      <p class="text-gray-500 font-normal">
                        {{ data.subTitle }}
                      </p>
                    </div>
                  </div>
                </td>
                <!-- License use -->
                <td class="text-sm font-medium text-gray-500">
                  <div class="hidden sm:block w-[88px] bg-gray-200 h-2 rounded">
                    <div
                      class="bg-brand-purple-600 h-full rounded"
                      :style="`width: ${data.progress.lg}%`"
                    ></div>
                  </div>
                  <div class="block sm:hidden w-[69px] bg-gray-200 h-2 rounded">
                    <div
                      class="bg-brand-purple-600 h-full rounded"
                      :style="`width: ${data.progress.sm}%`"
                    ></div>
                  </div>
                </td>
                <!-- Status -->
                <td
                  class="py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                >
                  <span
                    class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full"
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
                <td
                  class="py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                >
                  <div class="app-custom-users flex">
                    <div
                      class="avatar border-[1.5px] border-solid border-white rounded-full bg-white -ml-2"
                      :class="user === 1 ? '-ml-0' : '-ml-2'"
                      v-for="user in 5"
                    >
                      <Image
                        :path="data.userGroup + `${user}.png`"
                        alt="User group Avatar"
                        class="w-6 h-6"
                      />
                    </div>
                    <div
                      v-if="data.userCount.enabled"
                      class="avatar-count border-[1.5px] border-solid border-white rounded-full -ml-2 bg-[#F9F5FF] w-6 h-6 text-xs text-brand-purple-600 font-medium grid place-items-center"
                    >
                      {{ data.userCount.value }}
                    </div>
                  </div>
                </td>
                <!-- About -->
                <td class="py-4 text-sm font-medium whitespace-nowrap">
                  <div class="company-about-info">
                    <p>{{ data.About.title }}</p>
                    <p class="text-gray-500 font-normal">
                      {{ data.About.subTitle }}
                    </p>
                  </div>
                </td>
                <!-- Actions -->
                <td class="">
                  <div class="actions flex">
                    <div class="delete-icon mr-[28.17px] cursor-pointer">
                      <img src="@/assets/images/trash.svg" alt="Trash icon" />
                    </div>
                    <div class="edit-icon cursor-pointer">
                      <img src="@/assets/images/edit.svg" alt="Edit icon" />
                    </div>
                  </div>
                </td>
              </tr>
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
.table-layout {
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border: 1px solid #eaecf0;
}
.table-control {
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
}
</style>
