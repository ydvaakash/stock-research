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

// 1. When an 'input' event happen in the search box, update companySearchBoxQuery.
// 2. Call generateCompanySuggestionsList()
// 3. Attach 'click' event listener to each company name displayed in the suggestions list.

import { modifyCompanySearchBoxQuery } from '../utils/constants.js';
import { generateCompanySuggestionsList } from './suggestionsList.js';
import { attachClickEventListenerToCompanyNameContainers } from '../utils/suggestedCompaniesClickEventListener.js';

const companySearchBoxFunctionality = async () => {
  const companySearchBox = document.getElementById('companySearchBox');
  let searchQueryInput = null;

  companySearchBox.addEventListener('input', () => {
    searchQueryInput = companySearchBox.value;

    modifyCompanySearchBoxQuery(searchQueryInput.toLowerCase());

    generateCompanySuggestionsList();
    attachClickEventListenerToCompanyNameContainers();
  })
};

export { companySearchBoxFunctionality };