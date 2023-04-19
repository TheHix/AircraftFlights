<script setup lang="ts"></script>

<template>
	<button class="button"><slot></slot></button>
</template>

<style scoped>
.button {
	cursor: pointer;
	background-color: transparent;
	padding: 0px 15px;
	height: 30px;
	border: 1px solid var(--primary-color);
	color: var(--primary-color);
}
</style>
