// model for launch objects pulled from API

export interface Launch {
    flight_number: number;
    launch_year: number;
    rocket: {
        rocket_name: string;
    };
    details: string;
    links: {
        presskit: string;
    };
}
