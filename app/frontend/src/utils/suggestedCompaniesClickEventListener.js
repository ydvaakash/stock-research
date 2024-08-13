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

// 1. Attach 'click' event listener to each company name in the suggestions list.

import { accessnseListedCompaniesListObject, modifyCompanySymbolToSearch } from './constants.js';

const attachClickEventListenerToCompanyNameContainers = async () => {
  const suggestionsListContainer = document.getElementById('suggestionsListContainer');
  const companySearchBox = document.getElementById('companySearchBox');
  let allCompanyNameContainers = Array.from(document.getElementsByClassName('suggestedCompanyNameContainer'));
  const nseListedCompaniesListObject = accessnseListedCompaniesListObject();

  let localTargetCompanyName = null;

  allCompanyNameContainers.forEach((companyNameContainer) => {
    companyNameContainer.addEventListener('click', () => {
      localTargetCompanyName = companyNameContainer.querySelector('.companyNameText').innerText;

      companySearchBox.value = localTargetCompanyName;
      suggestionsListContainer.replaceChildren();

      for(const individualCompanyDetailObject of nseListedCompaniesListObject) {
        let {'Company Name': tempCompanyName} = individualCompanyDetailObject;
        let {'Symbol': companySymbol} = individualCompanyDetailObject;

        if(tempCompanyName === localTargetCompanyName) {
          modifyCompanySymbolToSearch(companySymbol);
          break;
        }
      }
    });
  });

};

export { attachClickEventListenerToCompanyNameContainers };