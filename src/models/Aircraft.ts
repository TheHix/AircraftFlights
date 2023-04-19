export interface IFlightTime {
	departure: Date;
	landing: Date;
}

export interface IAircraft {
	sideNumber: string;
	flightTimeList: IFlightTime[];
}
