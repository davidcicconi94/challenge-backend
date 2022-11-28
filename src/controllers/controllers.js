import { Airlines } from "../models/Airlines.js";
import { Airports } from "../models/Airports.js";

// Airlines
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
