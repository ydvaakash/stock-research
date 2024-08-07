/*
Stock Research: Market Insights for Smarter Decisions.
Copyright (C) [2024] [Aakash Yadav]
This file is part of [stock-research].

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/', (req, res) => {
  const { symbolToSearch } = req.body;
  const params = new URLSearchParams({
    symbol: symbolToSearch,
  });
  const API_BASE_URL = process.env.API_BASE_URL;

  const url = `${API_BASE_URL}?${params}`;

  const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.API_KEY,
    'x-rapidapi-host': process.env.API_HOST
  }
  };

  fetch(url, options)
  .then((response) => {
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    res.json(data);
  })
  .catch((error) => {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data.' }); // Send an error response
  });
});

export { router };