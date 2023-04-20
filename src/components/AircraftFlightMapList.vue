<script setup lang="ts">
import { IAircraft } from "../models/IAircraft";
import AircraftFlightMap from "./AircraftFlightMap.vue";
defineProps<{ aircraftList: IAircraft[] }>();
</script>

<template>
	<div class="aircraft-flight-map-list">
		<AircraftFlightMap
			class="aircraft-flight-map"
			:aircraft="aircraft"
			v-for="aircraft in aircraftList"
			:key="aircraft.sideNumber"
		/>
	</div>
</template>

<style scoped>
.aircraft-flight-map:not(:last-child) {
	margin-bottom: 20px;
}
</style>
