<script setup lang="ts">
import AppInput from "./ui/AppInput.vue";
import { IAircraft } from "../models/IAircraft";
import FlightTimeFormList from "./FlightTimeFormList.vue";

defineProps<{ aircraft: IAircraft }>();
</script>

<template>
	<div class="aircraft">
		<AppInput :label="'Бортовой номер'" v-model="aircraft.sideNumber" />
		<FlightTimeFormList :flight-time-list="aircraft.flightTimeList" />
	</div>
</template>

<style scoped>
.aircraft {
	display: flex;
	flex-direction: column;
	padding: 15px;
	border: 1px solid var(--primary-color);
}
</style>
