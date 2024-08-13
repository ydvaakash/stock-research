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

// 1. Display error message in the DOM if company details couldn't be fetched.

import { accessCompanySymbolToSearch, accessnseListedCompaniesListObject } from '../utils/constants.js';

const displayErrorMessageInDom = () => {
  const companySearchBoxElement = document.getElementById('companySearchBox');
  const stockDetailsContainerElement = document.getElementById('stockDetailsContainer');
  const localCompanySymbolToSearch = accessCompanySymbolToSearch();
  const localNseListedCompaniesListObject = accessnseListedCompaniesListObject();
  const mainContentElement = document.getElementById('mainContent');
  const searchBoxAndSuggestionsListContainerElement = document.getElementById('searchBoxAndSuggestionsListContainer');
  let tempCompanyName = null;

  stockDetailsContainerElement.innerHTML = '';

  for(const nseListedCompanyObject of localNseListedCompaniesListObject) {
    const { 'Symbol': symbol, 'Company Name': companyName } = nseListedCompanyObject;
    if(localCompanySymbolToSearch === symbol) {
      tempCompanyName = companyName;
      break;
    }
  }

  const errorMessageContainerElement = document.createElement('div');
  errorMessageContainerElement.id = 'errorMessageContainerElement';
  const errorMessagePrimaryTextString = document.createElement('p');
  errorMessagePrimaryTextString.id = 'errorMessagePrimaryTextString';
  errorMessagePrimaryTextString.innerText = `Oops! Couldn\'t fetch details for \'${tempCompanyName}\'`;
  const errorMessageSecondaryTextString = document.createElement('p');
  errorMessageSecondaryTextString.id = 'errorMessageSecondaryTextString';
  errorMessageSecondaryTextString.innerText = 'Please try searching for some other company.';
  errorMessageContainerElement.appendChild(errorMessagePrimaryTextString);
  errorMessageContainerElement.appendChild(errorMessageSecondaryTextString);
  stockDetailsContainerElement.appendChild(errorMessageContainerElement);

  companySearchBoxElement.value = '';
  mainContentElement.style.justifyContent = 'space-between';
  mainContentElement.style.rowGap = '1rem';
  searchBoxAndSuggestionsListContainerElement.style.width = '100%';
  stockDetailsContainerElement.style.flexGrow = '1';
  stockDetailsContainerElement.style.width = '100%';
  stockDetailsContainerElement.style.display = 'flex';
  stockDetailsContainerElement.style.flexDirection = 'column';
  stockDetailsContainerElement.style.alignItems = 'center';
  stockDetailsContainerElement.style.justifyContent = 'center';
  errorMessageContainerElement.style.display = 'flex';
};

export { displayErrorMessageInDom };