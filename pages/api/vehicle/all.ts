// pages/api/vehicle/all.ts
import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
import Vehicle from '../../../models/Vehicle';

// Path to the SQLite database
const dbPath = './db/database.db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Connect to the SQLite database
    const db = new sqlite3.Database(dbPath);

    // Retrieve all vehicles from the database
    db.all('SELECT * FROM vehicle', (err, rows) => {
      if (err) {
        console.error('Error retrieving vehicles from the database:', err);
        return res.status(500).json({ message: 'Internal Server Error', statusCode: 500 });
      }

      // Close the database connection
      db.close();

      // Format the retrieved data into Vehicle objects
      const vehicles: Vehicle[] = rows.map((row: any) => {
        return {
          id: row.id,
          bicycle: row.bicycle,
          color: row.color,
          fuel: row.fuel,
          manufacturer: row.manufacturer,
          model: row.model,
          type: row.type,
          vehicle: row.vehicle,
          vin: row.vin,
          vrm: row.vrm
        };
      });

      // Send the response with the retrieved vehicles
      res.status(200).json({
        message: 'Vehicles retrieved successfully.',
        content: vehicles,
        statusCode: 200
      });
    });
  } catch (error) {
    // Handle errors here
    console.error('An error occurred while retrieving vehicles:', error);
    res.status(500).json({ message: 'Internal Server Error', statusCode: 500 });
  }
};
