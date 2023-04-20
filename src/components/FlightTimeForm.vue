<script setup lang="ts">
import { ref, watch } from "vue";
import { IFlightTime } from "../models/IAircraft";
import AppInput from "./ui/AppInput.vue";

const props = defineProps<{ flightTime: IFlightTime }>();
const timeError = ref("");

watch(
	() => [props.flightTime.departure, props.flightTime.landing],
	([departure, landing]) => {
		const departureDate = new Date(departure);
		const landingDate = new Date(landing);
		const currentDate = new Date();

		if (!departure || !landing) {
			timeError.value = "";
		}

		if (departureDate >= landingDate) {
			timeError.value = "Дата вылета должна быть раньше даты посадки";
		} else if (departureDate < currentDate) {
			timeError.value = "Дата вылета должна быть позже текущего времени";
		} else {
			timeError.value = "";
		}
	}
);
</script>

<template>
	<div class="flight-time-form">
		<AppInput
			class="flight-time-form__input"
			:label="'Вылет:'"
			:type="'datetime-local'"
			v-model="flightTime.departure"
		/>

		<AppInput
			class="flight-time-form__input"
			:label="'Посадка:'"
			:type="'datetime-local'"
			v-model="flightTime.landing"
		/>
	</div>

	<span class="flight-time-error" v-if="timeError">{{ timeError }}</span>
</template>

<style scoped>
.flight-time-form {
	display: flex;
}
.flight-time-form__input:not(:last-child) {
	margin-right: 15px;
	margin-bottom: 10px;
}
.flight-time-error {
	color: red;
}
</style>
