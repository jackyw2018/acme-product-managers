import React from 'react';
import { connect } from 'react-redux';

import { putProduct } from '../store';

class Product extends React.Component {
  state = {
    manager: this.props.user ? this.props.user.id : '0',
    valueChanged: false,
  };

  onSelectChange = event => {
    const valueChanged =
      (this.props.user ? this.props.user.id : '0') != event.target.value;
    this.setState({ manager: event.target.value, valueChanged });
  };

  onButtonClick = () => {
    // console.log('Id, type', this.state.manager, typeof this.state.manager)
    this.props.putProduct(this.props.productId, this.state.manager);
    this.setState({ ...this.state, valueChanged: false });
  };

  render() {
    const { productName, managers } = this.props;
    return (
      <li className="list-group-item">
        <div>
          <h6>{productName}</h6>
          <div className="form-group">
            <label>
              <em>Product Manager</em>
            </label>
            <select
              name="managerId"
              className="form-control"
              value={this.state.manager}
              onChange={this.onSelectChange}
            >
              <option value={0}>-- none --</option>
              {managers.map(({ name, id }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <button
            className="btn btn-primary"
            onClick={this.onButtonClick}
            disabled={!this.state.valueChanged}
          >
            Save
          </button>
        </div>
      </li>
    );
  }
}

const mapStateToProps = ({ managers }, ownProps) => ({
  managers,
  productName: ownProps.productName,
  user: ownProps.user,
  productId: ownProps.productId,
});

const mapDispatchToProps = () => dispatch => ({
  putProduct: (id, managerId) => dispatch(putProduct(id, managerId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
