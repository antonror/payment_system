import React, {Component}          from "react";
import { connect }                 from "react-redux";
import { bindActionCreators }      from "redux";
import {
  updateTransactionStatus
}                                  from "../redux/actions";

class DetailTransactionModal extends Component {

  changeTransactionStatus = (id, status) => {
    this.props.updateTransactionStatus(id, status);
  };

  fillTransactionData = (transaction) => {
    return (
      <div className="text-center">
        <h4 className="text-capitalize">{transaction.status} Transaction</h4>
        <div><b>Type: </b>{transaction.type ? transaction.type : 'Transaction'}</div>
        <div className="text-capitalize"> <b>Status: </b> {transaction.status}</div>
        <div><b>Amount: </b> ${transaction.amount}</div>
        <div><b> Customer Email: </b> {transaction.customer_email}</div>
        <div><b> Customer Phone: </b> {transaction.customer_phone}</div>
      </div>
    );
  };

  render(){
    const {transaction, role} = this.props;
    let markup = '';
    markup = (
      <div className="row">
        <div className="col-sm border py-3">
          {this.fillTransactionData(transaction)}
          {transaction.status === 'authorized' && role === 'admin' &&
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => this.changeTransactionStatus(transaction.id, 'approved')}
              >
                Charge
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => this.changeTransactionStatus(transaction.id, 'reversed')}
              >
                Reverse
              </button>
            </div>
          }
          {transaction.status === 'approved' && role === 'admin' &&
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => this.changeTransactionStatus(transaction.id, 'refunded')}
              >
                Refund
              </button>
            </div>
          }
        </div>
      </div>
    );

    return (
      <React.Fragment>
        <button type="button" className="btn btn-info" data-toggle="modal" data-target={`#${transaction.id}`}>
          Detail
        </button>

        <div className="modal fade" id={transaction.id} tabIndex="-1" role="dialog" aria-labelledby={`${transaction.id}Label`} aria-hidden="true">
          <div
            className="modal-dialog"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={`${transaction.id}Label`}>Deatil of Transation/Payment</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container">
                  {markup}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateTransactionStatus          :  updateTransactionStatus
  }, dispatch);
};

const mapStateToProps = state => {
  return {
    role:          state.user.currentUser.role
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailTransactionModal);
