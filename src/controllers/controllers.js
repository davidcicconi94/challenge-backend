import { Airlines } from "../models/Airlines.js";
import { Airports } from "../models/Airports.js";
import { Flights } from "../models/Flights.js";

// AIRLINES
export const getAirlines = async (req, res) => {
  try {
    const airlines = await Airlines.findAll();
    res.json(airlines);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAirlineById = async (req, res) => {
  try {
    const { id } = req.params;

    const airline = await Airlines.findOne({
      where: {
        id,
      },
    });
    res.json(airline);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const createAirline = async (req, res) => {
  const { iata_code, airline } = req.body;
  try {
    const newAirline = await Airlines.create({
      iata_code,
      airline,
    });

    res.json(newAirline);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateAirline = async (req, res) => {
  try {
    const { id } = req.params;
    const { iata_code, airline } = req.body;

    const airlineById = await Airlines.findByPk(id);

    airlineById.iata_code = iata_code;
    airlineById.airline = airline;

    await airlineById.save();

    console.log(airlineById);

    res.send("Updated!");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteAirline = async (req, res) => {
  try {
    const { id } = req.params;

    await Airlines.destroy({
      where: {
        id,
      },
    });
    res.send("Airline deleted");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// AIRPORTS
export const getAirports = async (req, res) => {
  try {
    const airport = await Airports.findAll();
    res.json(airport);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getAirportById = async (req, res) => {
  try {
    const { id } = req.params;

    const airport = await Airports.findOne({
      where: {
        id,
      },
    });
    res.json(airport);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateAirport = async (req, res) => {
  try {
    const { id } = req.params;
    const { iata_code, airport, city, state, country, latitude, longitude } =
      req.body;

    const airportById = await Airports.findByPk(id);

    airportById.iata_code = iata_code;
    airportById.airport = airport;
    airportById.city = city;
    airportById.country = country;
    airportById.latitude = latitude;
    airportById.longitude = longitude;

    await airportById.save();

    res.send("Updated");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteAirport = async (req, res) => {
  try {
    const { id } = req.params;

    await Airports.destroy({
      where: {
        id,
      },
    });
    res.send("Airport deleted");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createAirport = async (req, res) => {
  const { iata_code, airport, city, state, country, latitude, longitude } =
    req.body;
  try {
    const newAirport = await Airports.create({
      iata_code,
      airport,
      city,
      state,
      country,
      latitude,
      longitude,
    });

    res.json(newAirport);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// FLIGHTS
export const getFlights = async (req, res) => {
  try {
    const flights = await new Flights.findAll();
    res.json(flights);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getFlightsById = async (req, res) => {
  try {
    const { id } = req.params;
    const flightsById = await Flights.findOne({
      where: {
        id,
      },
    });
    res.json(flightsById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createFlight = async (req, res) => {
  try {
    const {
      year,
      month,
      day,
      day_of_week,
      airline,
      flight_number,
      tail_number,
      origin_airport,
      destination_airport,
      scheduled_departure,
      departure_time,
      departure_delay,
      taxi_out,
      wheels_off,
      scheduled_time,
      elapsed_time,
      air_time,
      distance,
      wheels_on,
      taxi_in,
      scheduled_arrival,
      arrival_time,
      arrival_delay,
      diverted,
      cancelled,
      cancellation_reason,
      air_system_delay,
      security_delay,
      airline_delay,
      late_aircraft_delay,
      weather_delay,
    } = req.body;

    const newFlight = Flights.create({
      year,
      month,
      day,
      day_of_week,
      airline,
      flight_number,
      tail_number,
      origin_airport,
      destination_airport,
      scheduled_departure,
      departure_time,
      departure_delay,
      taxi_out,
      wheels_off,
      scheduled_time,
      elapsed_time,
      air_time,
      distance,
      wheels_on,
      taxi_in,
      scheduled_arrival,
      arrival_time,
      arrival_delay,
      diverted,
      cancelled,
      cancellation_reason,
      air_system_delay,
      security_delay,
      airline_delay,
      late_aircraft_delay,
      weather_delay,
    });
    res.json(newFlight);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateFlight = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      year,
      month,
      day,
      day_of_week,
      airline,
      flight_number,
      tail_number,
      origin_airport,
      destination_airport,
      scheduled_departure,
      departure_time,
      departure_delay,
      taxi_out,
      wheels_off,
      scheduled_time,
      elapsed_time,
      air_time,
      distance,
      wheels_on,
      taxi_in,
      scheduled_arrival,
      arrival_time,
      arrival_delay,
      diverted,
      cancelled,
      cancellation_reason,
      air_system_delay,
      security_delay,
      airline_delay,
      late_aircraft_delay,
      weather_delay,
    } = req.body;

    const flight = await Flights.findByPk(id);

    flight.year = year;
    flight.month = month;
    flight.day = day;
    flight.day_of_week = day_of_week;
    flight.airline = airline;
    flight.flight_number = flight_number;
    flight.yetail_numberar = tail_number;
    flight.origin_airport = origin_airport;
    flight.destination_airport = destination_airport;
    flight.scheduled_departure = scheduled_departure;
    flight.departure_time = departure_time;
    flight.departure_delay = departure_delay;
    flight.taxi_out = taxi_out;
    flight.wheels_off = wheels_off;
    flight.scheduled_time = scheduled_time;
    flight.elapsed_time = elapsed_time;
    flight.air_time = air_time;
    flight.distance = distance;
    flight.wheels_on = wheels_on;
    flight.taxi_in = taxi_in;
    flight.scheduled_arrival = scheduled_arrival;
    flight.arrival_time = arrival_time;
    flight.arrival_delay = arrival_delay;
    flight.diverted = diverted;
    flight.cancelled = cancelled;
    flight.cancellation_reason = cancellation_reason;
    flight.air_system_delay = air_system_delay;
    flight.security_delay = security_delay;
    flight.airline_delay = airline_delay;
    flight.late_aircraft_delay = late_aircraft_delay;
    flight.weather_delay = weather_delay;

    await flight.save();
    res.send("Updated");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteFlight = async (req, res) => {
  try {
    const { id } = req.params;

    await Flights.destroy({
      where: {
        id,
      },
    });
    res.send("Flight deleted");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
