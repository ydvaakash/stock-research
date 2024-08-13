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

// 1. Generate list of companies to suggest basis value of companySearchBoxQuery
// 2. Display list of suggested companies

import { accessCompanySearchBoxQuery, accessnseListedCompaniesListObject } from '../utils/constants.js';

const suggestionsListContainer = document.getElementById('suggestionsListContainer');
const companySearchBoxElement = document.getElementById('companySearchBox');

const generateCompanySuggestionsList = () => {
  let localCompanySearchBoxQuery = accessCompanySearchBoxQuery();
  let localNseListedCompaniesListObject = accessnseListedCompaniesListObject();

  let matchingCompaniesObjects = localNseListedCompaniesListObject.filter((individualCompanyObject) => {
    let {'Company Name': companyName} = individualCompanyObject;

    if(companyName.toLowerCase().startsWith(localCompanySearchBoxQuery)) {
      return true;
    }
    return false;
  });

  displayCompanySuggestionsList(matchingCompaniesObjects);

};

const displayCompanySuggestionsList = (companyDetailsObjects) => {
  suggestionsListContainer.replaceChildren();

  if(Object.keys(companyDetailsObjects).length > 0) {
    companyDetailsObjects.forEach((companyDetailObject) => {
      let {'Company Name': companyName} = companyDetailObject;
  
      const companyNameContainer = document.createElement('div');
      companyNameContainer.className = 'suggestedCompanyNameContainer';
  
      const companyNameSpan = document.createElement('span');
      companyNameSpan.className = 'companyNameText';
  
      companyNameSpan.textContent = companyName;
  
      companyNameContainer.appendChild(companyNameSpan);
      suggestionsListContainer.appendChild(companyNameContainer);
    });

    const rect = companySearchBoxElement.getBoundingClientRect();
    const baseFontSize = 16;

    suggestionsListContainer.style.top = `${(rect.bottom + (0.2*baseFontSize))/baseFontSize}rem`;
    suggestionsListContainer.style.left = `${rect.left/baseFontSize}rem`; // Align to the left
    suggestionsListContainer.style.width = `${rect.width/baseFontSize}rem`; // Match the width of the input box
    suggestionsListContainer.style.display = 'block';
  } else {
    suggestionsListContainer.style.display = 'none';
  }
};

export { generateCompanySuggestionsList };