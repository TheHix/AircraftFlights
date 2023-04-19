<script setup lang="ts">
import { ref } from "vue";
import { IAircraft } from "../models/IAircraft";
defineProps<{ aircraft: IAircraft }>();
const canvas = ref();
</script>

<template>
	<div class="canvas-wrapper">
		<h3>{{ aircraft.sideNumber }}</h3>
		<canvas class="canvas" :ref="canvas"></canvas>
	</div>
</template>

<style scoped>
.canvas-wrapper {
	overflow-x: auto;
}

.canvas {
	background-color: aliceblue;
	width: 980px;
	height: 150px;
}
</style>
