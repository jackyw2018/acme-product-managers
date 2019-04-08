import React from 'react';
import { connect } from 'react-redux';
import { getProductManagers, sortArrayOfObjectsByName } from '../utils';

const Managers = ({ managers }) => {
  return (
    <ul>
      {managers.map(manager => (
        <li key={manager.id}>{manager.name}</li>
      ))}
    </ul>
  );
};

// Need to be fixed
const mapStateToProps = ({ products }) => {
  const productManagers = getProductManagers(products);

  return {
    managers: sortArrayOfObjectsByName(productManagers),
  };
};

export default connect(mapStateToProps)(Managers);
