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

// 1. Dynamically create HTML elements and display stock details in DOM

import { accessStockDetailsObject, accessnseListedCompaniesListObject } from '../utils/constants.js';

const displayStockDetailsInDom = async () => {
  const companySearchBoxElement = document.getElementById('companySearchBox');
  const mainContentElement = document.getElementById('mainContent');
  const searchBoxAndSuggestionsListContainerElement = document.getElementById('searchBoxAndSuggestionsListContainer');
  const stockDetailsContainerElement = document.getElementById('stockDetailsContainer');

  const localStockDetailsObject = accessStockDetailsObject();
  const localNseListedCompaniesListObject = accessnseListedCompaniesListObject();

  stockDetailsContainerElement.innerHTML = '';

  const { 'breakout(30days)': breakout30days, consolidating, 'ltp': lastTradingPrice, 'ma_signal': movingAverageSignal, rsi, symbol, 'trend(30days)': trend30Days, volume } = await localStockDetailsObject;

  // create elements to display 'Company Name'
  const companyNameContainerElement = document.createElement('div');
  companyNameContainerElement.className = 'individudalDetailContainer';
  const companyNameHeadingInHtml = document.createElement('p');
  companyNameHeadingInHtml.className = 'individualDetailHeading';
  companyNameHeadingInHtml.innerText = 'Company name';
  const companyNameValueInHtml = document.createElement('p');
  companyNameValueInHtml.className = 'individualDetailValue';
  companyNameValueInHtml.id = 'companyNameValueInHtml'
  companyNameValueInHtml.innerText = '';
  if(symbol !== '') {
    for(const individualCompanyDetailObject of localNseListedCompaniesListObject) {
      const { 'Symbol': nseCompanySymbol, 'Company Name': fullCompanyName } = individualCompanyDetailObject;
  
      if(symbol === nseCompanySymbol) {
        companyNameValueInHtml.innerText = fullCompanyName;
        break;
      }
    }
  }
  if(companyNameValueInHtml.innerText === '') {
    companyNameValueInHtml.innerText = 'Details not available';
  }
  companyNameContainerElement.appendChild(companyNameHeadingInHtml);
  companyNameContainerElement.appendChild(companyNameValueInHtml);
  stockDetailsContainerElement.appendChild(companyNameContainerElement);

  // create elements to display 'Symbol'
  const symbolContainerElement = document.createElement('div');
  symbolContainerElement.className = 'individudalDetailContainer';
  const symbolHeadingInHtml = document.createElement('p');
  symbolHeadingInHtml.className = 'individualDetailHeading';
  symbolHeadingInHtml.innerText = 'Symbol';
  const symbolValueInHtml = document.createElement('p');
  symbolValueInHtml.className = 'individualDetailValue';
  if(symbol === '') {
    symbolValueInHtml.innerText = 'Details not available';
  } else {
    symbolValueInHtml.innerText = symbol;
  }
  symbolContainerElement.appendChild(symbolHeadingInHtml);
  symbolContainerElement.appendChild(symbolValueInHtml);
  stockDetailsContainerElement.appendChild(symbolContainerElement);

  // create elements to display 'Last Trading Price'
  const lastTradingPriceContainerElement = document.createElement('div');
  lastTradingPriceContainerElement.className = 'individudalDetailContainer';
  const lastTradingPriceHeadingInHtml = document.createElement('p');
  lastTradingPriceHeadingInHtml.className = 'individualDetailHeading';
  lastTradingPriceHeadingInHtml.innerText = 'Last Trading Price (INR)';
  const lastTradingPriceValueInHtml = document.createElement('p');
  lastTradingPriceValueInHtml.className = 'individualDetailValue';
  if(lastTradingPrice === '') {
    lastTradingPriceValueInHtml.innerText = 'Details not available';
  } else {
    lastTradingPriceValueInHtml.innerText = lastTradingPrice;
  }
  lastTradingPriceContainerElement.appendChild(lastTradingPriceHeadingInHtml);
  lastTradingPriceContainerElement.appendChild(lastTradingPriceValueInHtml);
  stockDetailsContainerElement.appendChild(lastTradingPriceContainerElement);

  // create elements to display '30-days Breakout'
  const breakout30daysContainerElement = document.createElement('div');
  breakout30daysContainerElement.className = 'individudalDetailContainer';
  const breakout30daysHeadingInHtml = document.createElement('p');
  breakout30daysHeadingInHtml.className = 'individualDetailHeading';
  breakout30daysHeadingInHtml.innerText = '30-days Breakout (INR)';
  const breakout30daysValueInHtml = document.createElement('p');
  breakout30daysValueInHtml.className = 'individualDetailValue';
  if(breakout30days === '') {
    breakout30daysValueInHtml.innerText = 'Details not available';
  } else {
    breakout30daysValueInHtml.innerText = breakout30days;
  }
  breakout30daysContainerElement.appendChild(breakout30daysHeadingInHtml);
  breakout30daysContainerElement.appendChild(breakout30daysValueInHtml);
  stockDetailsContainerElement.appendChild(breakout30daysContainerElement);

  // create elements to display 'Volume'
  const volumeContainerElement = document.createElement('div');
  volumeContainerElement.className = 'individudalDetailContainer';
  const volumeHeadingInHtml = document.createElement('p');
  volumeHeadingInHtml.className = 'individualDetailHeading';
  volumeHeadingInHtml.innerText = 'Volume';
  const volumeValueInHtml = document.createElement('p');
  volumeValueInHtml.className = 'individualDetailValue';
  if(volume === '') {
    volumeValueInHtml.innerText = 'Details not available';
  } else {
    volumeValueInHtml.innerText = volume;
  }
  volumeContainerElement.appendChild(volumeHeadingInHtml);
  volumeContainerElement.appendChild(volumeValueInHtml);
  stockDetailsContainerElement.appendChild(volumeContainerElement);

  // create elements to display 'rsi'
  const rsiContainerElement = document.createElement('div');
  rsiContainerElement.className = 'individudalDetailContainer';
  const rsiHeadingInHtml = document.createElement('p');
  rsiHeadingInHtml.className = 'individualDetailHeading';
  rsiHeadingInHtml.innerText = 'RSI';
  const rsiValueInHtml = document.createElement('p');
  rsiValueInHtml.className = 'individualDetailValue';
  if(rsi === '') {
    rsiValueInHtml.innerText = 'Details not available';
  } else {
    rsiValueInHtml.innerText = rsi;
  }
  rsiContainerElement.appendChild(rsiHeadingInHtml);
  rsiContainerElement.appendChild(rsiValueInHtml);
  stockDetailsContainerElement.appendChild(rsiContainerElement);

  // create elements to display 'Consolidating'
  const consolidatingContainerElement = document.createElement('div');
  consolidatingContainerElement.className = 'individudalDetailContainer';
  const consolidatingHeadingInHtml = document.createElement('p');
  consolidatingHeadingInHtml.className = 'individualDetailHeading';
  consolidatingHeadingInHtml.innerText = 'Consolidating';
  const consolidatingValueInHtml = document.createElement('p');
  consolidatingValueInHtml.className = 'individualDetailValue';
  if(consolidating === '') {
    consolidatingValueInHtml.innerText = 'Details not available';
  } else {
    consolidatingValueInHtml.innerText = consolidating;
  }
  consolidatingContainerElement.appendChild(consolidatingHeadingInHtml);
  consolidatingContainerElement.appendChild(consolidatingValueInHtml);
  stockDetailsContainerElement.appendChild(consolidatingContainerElement);

  // create elements to display 'Moving Average Signal
  const movingAverageSignalContainerElement = document.createElement('div');
  movingAverageSignalContainerElement.className = 'individudalDetailContainer';
  const movingAverageSignalHeadingInHtml = document.createElement('p');
  movingAverageSignalHeadingInHtml.className = 'individualDetailHeading';
  movingAverageSignalHeadingInHtml.innerText = 'Moving Average Signal';
  const movingAverageSignalValueInHtml = document.createElement('p');
  movingAverageSignalValueInHtml.className = 'individualDetailValue';
  if(movingAverageSignal === '') {
    movingAverageSignalValueInHtml.innerText = 'Details not available';
  } else {
    movingAverageSignalValueInHtml.innerText = movingAverageSignal;
  }
  movingAverageSignalContainerElement.appendChild(movingAverageSignalHeadingInHtml);
  movingAverageSignalContainerElement.appendChild(movingAverageSignalValueInHtml);
  stockDetailsContainerElement.appendChild(movingAverageSignalContainerElement);

  // create elements to display '30-days Trend'
  const trend30DaysContainerElement = document.createElement('div');
  trend30DaysContainerElement.className = 'individudalDetailContainer';
  const trend30DaysHeadingInHtml = document.createElement('p');
  trend30DaysHeadingInHtml.className = 'individualDetailHeading';
  trend30DaysHeadingInHtml.innerText = '30-days Trend';
  const trend30DaysValueInHtml = document.createElement('p');
  trend30DaysValueInHtml.className = 'individualDetailValue';
  if(trend30Days === '') {
    trend30DaysValueInHtml.innerText = 'Details not available';
  } else {
    trend30DaysValueInHtml.innerText = trend30Days;
  }
  trend30DaysContainerElement.appendChild(trend30DaysHeadingInHtml);
  trend30DaysContainerElement.appendChild(trend30DaysValueInHtml);
  stockDetailsContainerElement.appendChild(trend30DaysContainerElement);

  companySearchBoxElement.value = '';

  mainContentElement.style.justifyContent = 'space-between';
  searchBoxAndSuggestionsListContainerElement.style.width = '100%';
  stockDetailsContainerElement.style.flexGrow = '1';
  stockDetailsContainerElement.style.width = '100%';
  stockDetailsContainerElement.style.display = 'grid';
};

export { displayStockDetailsInDom };