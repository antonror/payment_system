import React, {Component}          from "react";
import { connect }                 from "react-redux";
import { bindActionCreators }      from "redux";
import BootstrapSwitchButton       from 'bootstrap-switch-button-react'
import {
  getMerchants,
  updateMerchantStatus,
  destroyMarchent
}                                  from "../redux/actions";

class Merchants extends Component {

  componentDidMount() {
    this.props.getMerchants();
  };

  changeMerchantStatus = (id, status) => {
    this.props.updateMerchantStatus(id, status);
  };

  deleteMarchant = (id) => {
    this.props.destroyMarchent(id);
  };

  render(){
    const {merchants} = this.props;

    return (
      <div className="merchants-list">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            { merchants && merchants.map(merchant => (
              <tr key={merchant.id}>
                <td>{merchant.name}</td>
                <td>{merchant.email}</td>
                <td>${merchant.total_transaction_sum ? merchant.total_transaction_sum : 0}</td>
                <td>
                  <BootstrapSwitchButton
                    checked={merchant.status === "active" ? true : false}
                    onstyle="success"
                    offstyle="danger"
                    width={75}
                    onlabel="Active"
                    offlabel="Inactive"
                    onChange={() => this.changeMerchantStatus(merchant.id, merchant.status === "active" ? "inactive" : "active")}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => { if (window.confirm('Are you sure you want to delete this Merchant?')) this.deleteMarchant(merchant.id) } }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getMerchants                    : getMerchants,
    updateMerchantStatus            : updateMerchantStatus,
    destroyMarchent                 : destroyMarchent
  }, dispatch);
};

const mapStateToProps = state => {
  return {
    merchants       : state.user.merchants
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Merchants);
