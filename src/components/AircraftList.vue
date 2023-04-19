<script setup lang="ts">
import { IAircraft } from "../models/IAircraft";
import Aircraft from "./Aircraft.vue";
import AppButton from "./ui/AppButton.vue";

const props = defineProps<{ aircraftList: IAircraft[] }>();

const addAircraft = () => {
	const aircraft: IAircraft = {
		sideNumber: "",
		flightTimeList: [{ departure: "", landing: "" }],
	};
	props.aircraftList.push(aircraft);
};
</script>

<template>
	<div class="aircraft-list">
		<Aircraft
			v-for="(aircraft, index) in aircraftList"
			:aircraft="aircraft"
			:key="index"
			class="aircraft"
		/>

		<AppButton @click="addAircraft" class="aircraft-list__button">
			Добавить воздушное судно
		</AppButton>
	</div>
</template>

<style scoped>
.aircraft:not(:last-child) {
	margin-bottom: 20px;
}
.aircraft-list__button {
	margin-top: 15px;
	margin-right: auto;
}
</style>
