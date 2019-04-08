import React from 'react';
import { connect } from 'react-redux';

import { hasOpening } from '../utils';

const Home = ({ hasOpening }) => {
  return (
    <div>
      We {hasOpening ? 'HAVE' : 'DO NOT HAVE'} openings for Product Managers!
    </div>
  );
};

const mapStateToProps = ({ products }) => {
  return {
    hasOpening: hasOpening(products),
  };
};

export default connect(mapStateToProps)(Home);
