import React, { useEffect, memo } from 'react';
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import {
  makeSelectRules,
  makeSelectLoading,
  makeSelectError,
} from "containers/App/selectors";
import H1 from "components/H1";
import RulesList from '../../components/RulesList';

import { useParams } from 'react-router';


const key = "rules";

const rules = [
  {'name':'Eagle(everyday)','status':1, 'days_of_week': [0,1,2,3,4,5,6],'stores': [{}]},
  {'name':'Safe(everyday)','status':1, 'days_of_week': [0,1,2,3,4,5,6],'stores': [{'id':1,'name':'Loja 1'},{'id':2,'name':'Loja 2'},{'id':3,'name':'Loja 3'}]},
  {'name':'Safe(monday)', 'status':0,'days_of_week': [0],'stores': [{'id':1,'name':'Loja 1'},{'id':2,'name':'Loja 2'},{'id':3,'name':'Loja 3'}]}
];

export default function RulesPage({ 
  loading, 
  error,
  props
  }) {
   
   const rulesListProps = {
    loading,
    error: false,
    rules,
  };
  return (
    <div>
      <Helmet>
        <title>Rules </title>
        <meta name="description" content="Rules" />
      </Helmet>
      <H1>Rules</H1>
      <a href="/carriers"> Volver</a>

      <RulesList {...rulesListProps} />
    </div>
  );
}

RulesPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  rules: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};


