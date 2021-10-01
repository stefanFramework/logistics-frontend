import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import RuleListItem from 'containers/RuleListItem';

function RulesList({ loading, error, rules }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (rules !== false) {
    return <List items={rules} component={RuleListItem} />;
  }

  return null;
}

RulesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  rules: PropTypes.any,
};

export default RulesList;
