/**
 * RuleListItem
 *
 * Lists the name 
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListItem from 'components/ListItem';
import StatusIcon from './StatusIcon';
import DaysOfWeek from './DaysOfWeeks';
import RuleLink from './RuleLink';
import Wrapper from './Wrapper';

export function RuleListItem(props) {
  const { item } = props;

  // Put together the content of the repository
  const content = (
    <Wrapper>
      <RuleLink href={item.html_url} target="_blank" >
        { item.name} 
      </RuleLink>
      <StatusIcon status={item.status} />
      <DaysOfWeek daysofweek={item.days_of_week} />
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`rule-list-item-${item.name}`} item={content} />;
}

RuleListItem.propTypes = {
  item: PropTypes.object,
};

export default connect(
)(RuleListItem);
