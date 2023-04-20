<script setup lang="ts">
import { IAircraft } from "../models/IAircraft";
import { useMovingAircraft } from "../hooks/useMovingAircraft";

const props = defineProps<{ aircraft: IAircraft }>();

const canvasWidth = 960;
const canvasHeight = 150;

const { canvasRef } = useMovingAircraft(
	props.aircraft.flightTimeList,
	canvasWidth,
	canvasHeight
);
</script>

<template>
	<div class="canvas-wrapper">
		<h3>{{ aircraft.sideNumber }}</h3>

		<canvas
			:width="canvasWidth"
			:height="canvasHeight"
			class="canvas"
			ref="canvasRef"
		></canvas>
	</div>
</template>

<style scoped>
.canvas-wrapper {
	overflow-x: auto;
}

.canvas {
	background-color: aliceblue;
}
</style>
