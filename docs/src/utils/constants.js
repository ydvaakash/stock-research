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

// 1. Declare Global constants
// 2. Define functions to access and modify these global constants

let companySearchBoxQuery = null;
let nesListedCompaniesListObject = null;
let companySymbolToSearch = null;
let stockDetailsObject = null;

const accessCompanySearchBoxQuery = () => {
  return companySearchBoxQuery;
};

const modifyCompanySearchBoxQuery = (updatedQuery) => {
  companySearchBoxQuery = updatedQuery;
};

const accessnseListedCompaniesListObject = () => {
  return nesListedCompaniesListObject;
};

const modifyNseListedCompaniesListObject = (newObject) => {
  nesListedCompaniesListObject = newObject;
};

const accessCompanySymbolToSearch = () => {
  return companySymbolToSearch;
};

const modifyCompanySymbolToSearch = (newSymbol) => {
  companySymbolToSearch = newSymbol;
};

const accessStockDetailsObject = () => {
  return stockDetailsObject;
};

const modifyStockDetailsObject = (newObjectValue) => {
  stockDetailsObject = newObjectValue;
};

export { accessCompanySearchBoxQuery, modifyCompanySearchBoxQuery, accessnseListedCompaniesListObject, modifyNseListedCompaniesListObject, accessCompanySymbolToSearch, modifyCompanySymbolToSearch, accessStockDetailsObject, modifyStockDetailsObject };