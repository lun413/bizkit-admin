import React from "react";
import { Switch, Route } from 'react-router-dom';
import CompaniesEditPage from './companies/edit';
import CompaniesIndexPage from './companies/index';

const CompaniesPage = ({match, ...props}) => {
  return (
    <Switch >
      <Route path="/companies/:company_id/edit">
        <CompaniesEditPage />
      </Route>
      <Route path="/companies">
        <CompaniesIndexPage />
      </Route>
    </Switch>
  )
}

export default CompaniesPage;