<script lang="ts" setup>
import CheckboxComponent from '~~/components/CheckboxComponent.vue';
</script>
<template>
<div class="">
    <header>
    <Navigation/>
    <Toolbar/>
    </header>
    <main class="px-28">
        <DashboardHeader/>
        <AppActivityCards/>
        <FilterToolBar/>
        <div class="table-component vue">
            <TableComponent/>
        </div>
    </main>
</div>
</template>
<style>
</style>