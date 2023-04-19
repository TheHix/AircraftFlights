<script setup lang="ts">
import { ref } from "vue";
import FlightTimeForm from "./FlightTimeForm.vue";
import AppButton from "./ui/AppButton.vue";
import AppInput from "./ui/AppInput.vue";
import { IAircraft, IFlightTime } from "../models/Aircraft";

const sideNumber = ref("");
const flightTimeList = ref<IFlightTime[]>([]);

const emit = defineEmits<{
	(e: "add-aircraft", aircraft: IAircraft): void;
}>();

const addAircraft = () => {
	const aircraft: IAircraft = {
		sideNumber: sideNumber.value,
		flightTimeList: flightTimeList.value,
	};

	emit("add-aircraft", aircraft);
};

const addFlightTime = () => {};
</script>

<template>
	<div class="wrapper">
		<AppInput :label="'Бортовой номер'" v-model="sideNumber" />
		<FlightTimeForm />

		<AppButton @click="addAircraft" class="button">Добавить перелет</AppButton>
	</div>
</template>

<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	padding: 15px;
	border: 1px solid var(--primary-color);
}
.button {
	border: 1px solid var(--primary-color);
	margin-left: auto;
}
</style>
