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
  <div class="flex flex-col">
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <div class="inline-block min-w-full align-middle">
        <div class="">
          <table class="min-w-full">
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
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr class="w-full odd:bg-gray-50 even:bg-white">
                <td class="py-4 w-14">
                  <CheckboxComponent checked="checked" />
                </td>
                <td class="text-sm font-medium text-gray-900 whitespace-nowrap">
                  <div class="flex">
                    <img
                      src="@/assets/images/companies/catalog.svg"
                      alt="Catalog"
                    />
                    <div class="company-title">
                      <p>Catalog</p>
                      <p class="text-gray-500 font-normal">catalogapp.io</p>
                    </div>
                  </div>
                </td>
                <td class="text-sm font-medium text-gray-500 ">
                  <div class="w-[88px] bg-gray-200 h-2 mb-6 rounded">
                    <div class="bg-brand-purple-600 h-2 rounded" style="width: 100%"></div>
                  </div>
                </td>
                <td class="text-sm font-medium text-gray-900 whitespace-nowrap">
                  $1999
                </td>
                <td class="text-sm font-medium text-gray-900 whitespace-nowrap">
                  $1999
                </td>
                <td class="text-sm font-medium whitespace-nowrap">
                  <a href="#" class="text-blue-600 hover:underline">Edit</a>
                </td>
              </tr>
              <tr class="w-full odd:bg-gray-50 even:bg-white">
                <td class="py-4 w-14">
                  <CheckboxComponent checked="checked" />
                </td>
                <td class="text-sm font-medium text-gray-900 whitespace-nowrap">
                  Apple MacBook Pro 17"
                </td>
                <td class="text-sm font-medium text-gray-500 whitespace-nowrap">
                  Laptop
                </td>
                <td class="text-sm font-medium text-gray-900 whitespace-nowrap">
                  $2999
                </td>
                <td class="text-sm font-medium text-gray-900 whitespace-nowrap">
                  $2999
                </td>
                <td class="text-sm font-medium whitespace-nowrap">
                  <a href="#" class="text-blue-600 hover:underline">Edit</a>
                </td>
              </tr>
              <tr class="w-full odd:bg-gray-50 even:bg-white">
                <td class="py-4 w-14">
                  <CheckboxComponent checked="checked" />
                </td>
                <td class="text-sm font-medium text-gray-900 whitespace-nowrap">
                  iPhone 13 Pro
                </td>
                <td class="text-sm font-medium text-gray-500 whitespace-nowrap">
                  Phone
                </td>
                <td class="text-sm font-medium text-gray-900 whitespace-nowrap">
                  $999
                </td>
                <td class="text-sm font-medium text-gray-900 whitespace-nowrap">
                  $999
                </td>
                <td class="text-sm font-medium whitespace-nowrap">
                  <a href="#" class="text-blue-600 hover:underline">Edit</a>
                </td>
              </tr>
              <tr class="w-full odd:bg-gray-50 even:bg-white">
                <td class="py-4 w-14">
                  <CheckboxComponent checked="unchecked" />
                </td>
                <td class="text-sm font-medium text-gray-900 whitespace-nowrap">
                  Apple Magic Mouse 2
                </td>
                <td class="text-sm font-medium text-gray-500 whitespace-nowrap">
                  Accessories
                </td>
                <td class="text-sm font-medium text-gray-900 whitespace-nowrap">
                  $99
                </td>
                <td class="text-sm font-medium text-gray-900 whitespace-nowrap">
                  $99
                </td>
                <td class="text-sm font-medium whitespace-nowrap">
                  <a href="#" class="text-blue-600 hover:underline">Edit</a>
                </td>
              </tr>
              <tr class="w-full odd:bg-gray-50 even:bg-white">
                <td class="py-4 w-14">
                  <CheckboxComponent />
                </td>
                <td class="text-sm font-medium text-gray-900 whitespace-nowrap">
                  Apple Watch Series 7
                </td>
                <td class="text-sm font-medium text-gray-500 whitespace-nowrap">
                  Accessories
                </td>
                <td class="text-sm font-medium text-gray-900 whitespace-nowrap">
                  $599
                </td>
                <td class="text-sm font-medium text-gray-900 whitespace-nowrap">
                  $599
                </td>
                <td class="text-sm font-medium whitespace-nowrap">
                  <a href="#" class="text-blue-600 hover:underline">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
