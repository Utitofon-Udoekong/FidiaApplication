<script lang="ts" setup>
import { useAppActivities } from "~~/composables/useAppActivities";

const appActivities = useAppActivities();

</script>

<template>
    <div class="app-activities flex justify-evenly gap-6 mb-[7px]">
        <div class="app-activity-card border border-[#EAECF0] rounded-lg p-6 w-full" v-for="(appActivity, index) in appActivities"  :key="index">
            <span class="app-activity-title flex justify-between">
                <p class="text-base font-medium text-gray-900">{{appActivity.title}}</p>
                <img src="@/assets/images/more-vert.svg" alt="More Vertical Options" class="cursor-pointer"/>
            </span>
            <div class="app-activity">
                <div class="app-activity-numbers">
                    <p class="text-4xl font-semibold text-gray-900 pt-6 pb-4">{{appActivity.total_activity}}</p>
                    <span class="flex items-center">
                        <!-- {{appActivity.profit_or_loss === "profit" ? }} -->
                        <img v-if="appActivity.profit_or_loss === 'profit'" src="@/assets/images/profit.svg" alt="Profit" />
                        <img v-else src="@/assets/images/loss.svg" alt="Loss" />
                        <p class="text-sm font-medium pl-[8.17px]" :class="appActivity.profit_or_loss === 'profit' ? 'text-brand-success' : 'text-brand-error'">
                            {{appActivity.percentage}}
                            <span class="text-gray-500">vs last month</span>
                        </p>
                    </span>
                </div>
                <div class="app-activity-graph"></div>
            </div>
        </div>
    </div>
</template>
<style>
.app-activity-card {
    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
        0px 1px 2px rgba(16, 24, 40, 0.06);
}
</style>