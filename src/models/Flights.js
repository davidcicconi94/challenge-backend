import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Flights = sequelize.define(
  "flights",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    month: {
      type: DataTypes.INTEGER,
    },
    day: {
      type: DataTypes.INTEGER,
    },
    day_of_week: {
      type: DataTypes.INTEGER,
    },
    airline: {
      type: DataTypes.STRING,
    },
    flight_number: {
      type: DataTypes.INTEGER,
    },
    tail_number: {
      type: DataTypes.STRING,
    },
    origin_airport: {
      type: DataTypes.STRING,
    },
    destination_airport: {
      type: DataTypes.STRING,
    },
    scheduled_departure: {
      type: DataTypes.INTEGER,
    },
    departure_time: {
      type: DataTypes.INTEGER,
    },
    departure_delay: {
      type: DataTypes.INTEGER,
    },
    taxi_out: {
      type: DataTypes.INTEGER,
    },
    wheels_off: {
      type: DataTypes.INTEGER,
    },
    scheduled_time: {
      type: DataTypes.INTEGER,
    },
    elapsed_time: {
      type: DataTypes.INTEGER,
    },
    air_time: {
      type: DataTypes.INTEGER,
    },
    distance: {
      type: DataTypes.INTEGER,
    },
    wheels_on: {
      type: DataTypes.INTEGER,
    },
    taxi_in: {
      type: DataTypes.INTEGER,
    },
    scheduled_arrival: {
      type: DataTypes.INTEGER,
    },
    arrival_time: {
      type: DataTypes.INTEGER,
    },
    arrival_delay: {
      type: DataTypes.INTEGER,
    },
    diverted: {
      type: DataTypes.INTEGER,
    },
    cancelled: {
      type: DataTypes.INTEGER,
    },
    cancellation_reason: {
      type: DataTypes.STRING,
    },
    air_system_delay: {
      type: DataTypes.INTEGER,
    },
    security_delay: {
      type: DataTypes.INTEGER,
    },
    airline_delay: {
      type: DataTypes.INTEGER,
    },
    late_aircraft_delay: {
      type: DataTypes.INTEGER,
    },
    weather_delay: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamp: false,
  }
);
