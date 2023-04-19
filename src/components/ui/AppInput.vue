<script setup lang="ts">
import { computed } from "@vue/reactivity";

interface AppInputProps {
	label?: string;
	type?: string;
	placeholder?: string;
	modelValue: string | number;
}
const props = withDefaults(defineProps<AppInputProps>(), {
	type: "text",
});

interface AppInputEmits {
	(e: "update:modelValue", value: string | number): void;
}
const emit = defineEmits<AppInputEmits>();

function onInput(event: Event) {
	const target = event.target as HTMLInputElement;
	emit("update:modelValue", target.value);
}
</script>

<template>
	<label>
		<span class="label-span">{{ label }}</span>

		<input
			class="input"
			:type="type"
			:placeholder="placeholder"
			:value="modelValue"
			@input="onInput"
		/>
	</label>
</template>

<style scoped>
.input {
	padding: 0 5px;
	height: 30px;
	outline: none;
	background: transparent;
	border: 1px solid var(--primary-color);
}
.label-span {
	margin-right: 15px;
}
</style>
