<script lang="ts" setup></script>
<template>
    <div class="flex items-center">
      <input
        type="checkbox"
        class="opacity-0 absolute h-5 w-5"
        checked
      />
      <div
        class="bg-white border rounded-md border-gray-300 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2"
      >
      <img src="@/assets/images/minus.svg" class="fill-current hidden pointer-events-none" alt="">
      </div>
    </div>
</template>
<style>
input:checked + div {
  @apply border-[#7F56D9];
}
input:checked + div img {
  @apply block;
}
</style>
