import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductManagers } from '../utils';

const Nav = ({ managersCount }) => {
  return (
    <ul className="nav nav-pills" style={{ marginBottom: '20px' }}>
      <li className="nav-item">
        <NavLink exact to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/products" className="nav-link" activeClassName="active">
          Products
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/managers" className="nav-link" activeClassName="active">
          Managers ({managersCount})
        </NavLink>
      </li>
    </ul>
  );
};

const mapStateToProps = ({ products }) => ({
  managersCount: getProductManagers(products).length,
});

export default connect(mapStateToProps)(Nav);
