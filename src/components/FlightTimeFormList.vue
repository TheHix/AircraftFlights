<script setup lang="ts">
import { IFlightTime } from "../models/IAircraft";
import FlightTimeForm from "./FlightTimeForm.vue";
import AppButton from "./ui/AppButton.vue";

const props = defineProps<{ flightTimeList: IFlightTime[] }>();

const addAircraft = () => {
	const flightTime: IFlightTime = { departure: "", landing: "" };
	props.flightTimeList.push(flightTime);
};
</script>

<template>
	<div class="flight-time-form-list">
		<FlightTimeForm
			v-for="(flightTime, index) in flightTimeList"
			:key="index"
			:flightTime="flightTime"
		/>

		<AppButton @click="addAircraft" class="flight-time-form-list__button">
			Добавить перелет
		</AppButton>
	</div>
</template>

<style scoped>
.flight-time-form-list {
	display: flex;
	flex-direction: column;
	margin-top: 15px;
}
.flight-time-form-list__button {
	margin-top: 15px;
	border: 1px solid var(--primary-color);
	margin-right: auto;
}
</style>
