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

// 1. JavaScript entry file for the app.

import { companySearchBoxFunctionality } from './components/companySearchBox.js';
import { readySuggestionsListObject } from './services/readySuggestionsListObject.js';
import { formSubmitButtonFunctionality } from './components/formSubmitButtonFunctionality.js';
import { checkForClickEventOutsideSuggestionsListContainer } from './utils/checkForClickEventOutsideSuggestionsListContainer.js';

document.addEventListener('DOMContentLoaded', async () => {
  const companySearchBoxForm = document.getElementById('companySearchBoxForm');

  readySuggestionsListObject();  
  companySearchBoxFunctionality();

  companySearchBoxForm.addEventListener('submit', formSubmitButtonFunctionality);

  document.addEventListener('click', checkForClickEventOutsideSuggestionsListContainer);
});