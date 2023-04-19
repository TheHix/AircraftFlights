<script setup lang="ts">
import { ref } from "vue";
import AircraftList from "./components/AircraftList.vue";
import { IAircraft } from "./models/IAircraft";
import AircraftFlightMapList from "./components/AircraftFlightMapList.vue";

const initialAircraftList = [
	{
		flightTimeList: [{ departure: "", landing: "" }],
		sideNumber: "FAS-1243124",
	},
];
const aircraftList = ref<IAircraft[]>(initialAircraftList);
</script>

<template>
	<div class="app">
		<AircraftList class="app__aircraft-list" :aircraft-list="aircraftList" />

		<AircraftFlightMapList
			class="app__aircraft-flight-map-list"
			:aircraft-list="aircraftList"
		/>
	</div>
</template>

<style scoped>
.app {
	padding: 0px 10px;
	margin: 0 auto;
	max-width: 1000px;
	width: 100%;
	display: flex;
	flex-direction: column;
}
.app__aircraft-list {
	margin-top: 40px;
}

.app__aircraft-flight-map-list {
	margin-top: 30px;
}
</style>
