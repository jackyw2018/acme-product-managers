import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import { sortArrayOfObjectsById } from '../utils';

const Products = ({ products }) => {
  return (
    <ul className="list-group">
      {products.map(({ name, id, user }) => (
        <Product productName={name} key={id} user={user} productId={id} />
      ))}
    </ul>
  );
};

const mapStateToProps = ({ products }) => ({
  products: sortArrayOfObjectsById(products),
});

export default connect(mapStateToProps)(Products);
