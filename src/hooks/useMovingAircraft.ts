import { onMounted, onUnmounted, ref } from "vue";
import { IFlightTime } from "../models/IAircraft";

export const useMovingAircraft = (
	flightTimeList: IFlightTime[],
	canvasWidth: number,
	canvasHeight: number
) => {
	let requestId: number | null = null;
	const canvasRef = ref<HTMLCanvasElement | null>(null);

	const moveFlights = (timestamp: number) => {
		const ctx = canvasRef.value?.getContext("2d");

		if (!ctx) return;

		ctx.clearRect(0, 0, canvasWidth, canvasHeight);

		flightTimeList.forEach((flight) => {
			const departureDate = new Date(flight.departure);
			const landingDate = new Date(flight.landing);

			const startOffset = departureDate.getTime() - Date.now();
			const intervalDuration = landingDate.getTime() - departureDate.getTime();

			if (
				timestamp >= startOffset &&
				timestamp <= startOffset + intervalDuration
			) {
				const progress = (timestamp - startOffset) / intervalDuration;

				const xOffset = canvasWidth * progress;
				const yOffset = 50;

				const rectWidth = 50;
				const rectHeigh = 50;

				ctx.fillStyle = "green";

				ctx.fillRect(xOffset, yOffset, rectWidth, rectHeigh);
			}
		});

		requestId = requestAnimationFrame(moveFlights);
	};

	onMounted(() => {
		requestId = requestAnimationFrame(moveFlights);
	});

	onUnmounted(() => {
		if (requestId) {
			cancelAnimationFrame(requestId);
			requestId = null;
		}
	});
	return {
		canvasRef,
	};
};
