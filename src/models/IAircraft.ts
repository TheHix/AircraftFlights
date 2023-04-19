export interface IFlightTime {
	departure: string;
	landing: string;
}

export interface IAircraft {
	sideNumber: string;
	flightTimeList: IFlightTime[];
}
