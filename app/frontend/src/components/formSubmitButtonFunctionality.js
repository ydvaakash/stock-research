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

// 1. When form 'submit' button is clicked, use fetch() API to make a call to backend.

import { accessCompanySymbolToSearch, modifyStockDetailsObject } from '../utils/constants.js';
import { displayStockDetailsInDom } from './displayStockDetailsInDom.js';
import { displayErrorMessageInDom } from './displayErrorMessageInDom.js';

const formSubmitButtonFunctionality = (event) => {
  event.preventDefault();

  let localCompanySymbolToSearch = accessCompanySymbolToSearch();

  if(localCompanySymbolToSearch !== null) {
    const url = 'https://stock-research-blond.vercel.app/api/';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ symbolToSearch: localCompanySymbolToSearch })
    };

    fetch(url, options)
    .then((response) => {
      if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json();
    })
    .then((data) => {
      return modifyStockDetailsObject(data);
    })
    .then(() => {
      displayStockDetailsInDom();
    })
    .catch((error) => {
      displayErrorMessageInDom();
    });
  }
};

export { formSubmitButtonFunctionality };