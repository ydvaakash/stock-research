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
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './routes/index.js';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/api', router);

// Export the app for Vercel
export default app;

// If you want to run locally (not in production), uncomment the following lines
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on PORT: ${PORT}`);
// });
