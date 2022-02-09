<script lang="ts" setup>
</script>
<template>
<div class="">
    <header>
        <Navigation/>
        <Toolbar/>
    </header>
    <main class="sm:px-28 px-4">
        <DashboardHeader/>
        <AppActivityCards/>
        <FilterToolBar/>
            </main>
       <section class="table sm:px-28 px-0">
           <TableComponent/>
       </section>
</div>
</template>
<style>
</style>