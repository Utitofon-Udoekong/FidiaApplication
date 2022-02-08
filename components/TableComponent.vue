<script lang="ts" setup>
const activities = [
  {
    amount: "50,000",
    description: "Fort Dolar Purchased",
    date: new Date().toISOString().substr(0, 10),
    time: new Date().toLocaleTimeString(),
    status: "pending",
  },
];
</script>
<template>
  <div class="flex flex-col mb-96">
    <div class="table-layout overflow-x-auto rounded-lg">
      <div class="inline-block min-w-full align-middle">
        <div class="">
          <table class="min-w-full table-auto">
            <thead class="bg-white">
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
                      class="ml-[7.33px]"
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
                  class="text-xs font-medium text-left text-gray-500"
                >
                  <div class="">Actions</div>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr class="py-4 w-full odd:bg-gray-50 even:bg-white">
                <td class="w-14">
                  <CheckboxComponent checked="checked" />
                </td>
                <!-- company -->
                <td
                  class="py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                >
                  <div class="flex">
                    <img
                      src="@/assets/images/companies/catalog.svg"
                      alt="Catalog"
                      class="mr-4"
                    />
                    <div class="company-title">
                      <p>Catalog</p>
                      <p class="text-gray-500 font-normal">catalogapp.io</p>
                    </div>
                  </div>
                </td>
                <!-- License use -->
                <td class="text-sm font-medium text-gray-500">
                  <div class="progress-bar w-[88px] bg-gray-200 h-2 mb-6 rounded">
                    <div
                      class="bg-brand-purple-600 h-full rounded"
                      style="width: 100%"
                    ></div>
                  </div>
                </td>
                <!-- Status -->
                <td
                  class="py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                >
                  <span
                    class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#ECFDF3] text-brand-success"
                  >
                    Customer
                  </span>
                </td>
                <!-- Users -->
                <td
                  class="py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                >
                  <div class="app-custom-users flex">
                    <div class="avatar border-[1.5px] border-solid border-white rounded-full bg-white">
                      <img src="@/assets/images/avatars/g1/Avatar1.png" width="24" height="24" alt="">
                    </div>
                    <div class="avatar border-[1.5px] border-solid border-white rounded-full -ml-2 bg-white">
                      <img src="@/assets/images/avatars/g1/Avatar2.png" width="24" height="24" alt="">
                    </div>
                    <div class="avatar border-[1.5px] border-solid border-white rounded-full -ml-2 bg-white">
                      <img src="@/assets/images/avatars/g1/Avatar3.png" width="24" height="24" alt="">
                    </div>
                    <div class="avatar border-[1.5px] border-solid border-white rounded-full -ml-2 bg-white">
                      <img src="@/assets/images/avatars/g1/Avatar4.png" width="24" height="24" alt="">
                    </div>
                    <div class="avatar border-[1.5px] border-solid border-white rounded-full -ml-2 bg-white">
                      <img src="@/assets/images/avatars/g1/Avatar5.png" width="24" height="24" alt="">
                    </div>
                    <div class="avatar-count border-[1.5px] border-solid border-white rounded-full -ml-2 bg-[#F9F5FF] w-6 h-6 text-xs text-brand-purple-600 font-medium grid place-items-center">
                      +5
                    </div>
                  </div>
                </td>
                <!-- About -->
                <td class="py-4 text-sm font-medium whitespace-nowrap">
                  <div class="company-about-info">
                    <p>Content curating app</p>
                    <p class="text-gray-500 font-normal">Brings all your news into one place</p>
                  </div>
                </td>
                <!-- Actions -->
                <td class="">
                  <div class="actions flex">
                    <div class="delete-icon mr-[28.17px] cursor-pointer">
                      <img src="@/assets/images/trash.svg"  alt="Trash icon">
                    </div>
                    <div class="edit-icon cursor-pointer">
                      <img src="@/assets/images/edit.svg" alt="Edit icon">
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
</style>
