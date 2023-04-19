<script setup lang="ts">
import { IAircraft } from "../models/IAircraft";
import AircraftFlightMap from "./AircraftFlightMap.vue";
const props = defineProps<{ aircraftList: IAircraft[] }>();
</script>

<template>
	<div class="aircraft-flight-map-list">
		<div
			class="aircraft-flight-map"
			v-for="aircraft in aircraftList"
			:key="aircraft.sideNumber"
		>
			<AircraftFlightMap :aircraft="aircraft" v-if="!!aircraft.sideNumber" />
		</div>
	</div>
</template>

<style scoped>
.aircraft-flight-map:not(:last-child) {
	margin-bottom: 20px;
}
</style>
