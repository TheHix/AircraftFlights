<script setup lang="ts">
import { ref, watch } from "vue";
import { IFlightTime } from "../models/IAircraft";
import AppInput from "./ui/AppInput.vue";

const props = defineProps<{ flightTime: IFlightTime }>();
const timeError = ref("");

watch(
	() => [props.flightTime.departure, props.flightTime.landing],
	([departure, landing]) => {
		const departureDateInMs = new Date(departure);
		const landingDateInMs = new Date(landing);

		if (departure && landing && departureDateInMs >= landingDateInMs) {
			timeError.value = "Дата вылета должна быть раньше даты посадки";
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
