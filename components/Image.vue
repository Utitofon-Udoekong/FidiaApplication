<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  path: {type: String},
  alt: {type: String},
})
const fileType = props.path.match(/\.[0-9a-z]+$/i)
const cleanPath = props.path.replace(fileType,'')
const pathArray = cleanPath.split('/')
const folderPath = pathArray[0]
const imagePath = pathArray[1]

const image = ref()
watchEffect(async () => {
  switch (fileType[0]) {
    case '.png':
      image.value = (await import(/* @vite-ignore */ `../assets/images/avatars/${folderPath}/${imagePath}.png`)).default
      break;
    case '.svg':
      image.value = (await import(/* @vite-ignore */ `../assets/images/${folderPath}/${imagePath}.svg`)).default
      break;
    default:
      console.log(`Sorry, the image component can't recognize the ${fileType} file type just yet.`);
  }
})
// watchEffect(async () => {
//   image.value = (await import(/* @vite-ignore */ `../assets/${props.path}.png`)).default
// })
</script>

<template>
  <img :src="image" :alt="alt" />
</template>