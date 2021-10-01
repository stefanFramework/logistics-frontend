import React from 'react';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';

// import H1 from 'components/H1';
// import messages from './messages';
// import List from './List';
// import ListItem from './ListItem';
// import ListItemTitle from './ListItemTitle';

export default function MyPage() {
  return (
    <div>
      <Helmet>
        <title>My Page in React</title>
        <meta
          name="description"
          content="My frist react page"
        />
      </Helmet>
    </div>
  );
}
