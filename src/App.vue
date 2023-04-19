<script setup lang="ts">
import { ref } from "vue";
import AircraftFlightMap from "./components/AircraftFlightMap.vue";
import AircraftList from "./components/AircraftList.vue";
import { IAircraft } from "./models/Aircraft";

const aircraftList = ref<IAircraft[]>([]);

const addAircraft = (aircraft: IAircraft) => {
	aircraftList.value.push(aircraft);
};
</script>

<template>
	<div class="app">
		<AircraftList @add-aircraft="addAircraft" class="app__aircraft-list" />
		<AircraftFlightMap class="app__aircraft-flight-map" />
	</div>
</template>

<style scoped>
.app {
	margin: 0 auto;
	max-width: 980px;
	width: 100%;
}
.app__aircraft-list {
	margin-top: 40px;
}

.app__aircraft-flight-map {
	margin-top: 30px;
}
</style>
