import React, {Component}          from "react";
import { connect }                 from "react-redux";
import { bindActionCreators }      from "redux";
import {
  createTransaction
}                                  from "../redux/actions";

class PaymentModal extends Component {

  state = {
    amount: 0,
    customerEmail: '',
    customerPhone: ''
  }

  handleChangeAmount = (e) => {
    this.setState({amount: e.target.value})
  };

  handleChangeEmail = (e) => {
    this.setState({customerEmail: e.target.value})
  };

  handleChangePhone = (e) => {
    this.setState({customerPhone: e.target.value})
  };

  handleformSubmit = () => {
    const {amount, customerEmail, customerPhone} = this.state;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(customerEmail)) {
      let params = {
        amount: amount,
        customer_email: customerEmail,
        customer_phone: customerPhone
      }
      this.props.createTransaction(params);
    }
    else {
      alert('Invalid Email');
    }
  };

  render(){
    const {amount, customerEmail, customerPhone} = this.state;
    return (
      <React.Fragment>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#paymentModal">
          Create Payment
        </button>

        <div className="modal fade" id="paymentModal" tabIndex="-1" role="dialog" aria-labelledby="paymentModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="paymentModalLabel">Create a Transation/Payment</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

                <div className="form-group row">
                  <label htmlFor="customer-email" className="col-4 col-form-label">Customer Email</label>
                  <div className="col-8">
                    <input
                      className="form-control"
                      type="email"
                      value={customerEmail}
                      id="customer-email"
                      placeholder="test@example.com"
                      onChange={(e) => this.handleChangeEmail(e)}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="customer-phone" className="col-4 col-form-label">Customer Phone</label>
                  <div className="col-8">
                    <input
                      className="form-control"
                      type="tel"
                      placeholder="1(555)555-5555"
                      value={customerPhone}
                      id="customer-phone"
                      onChange={(e) => this.handleChangePhone(e)}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="amount" className="col-4 col-form-label">Amount</label>
                  <div className="col-8">
                    <input
                      className="form-control"
                      placeholder="15.5"
                      min={0} step={0.1}
                      type="number"
                      value={amount}
                      id="amount"
                      onChange={(e) => this.handleChangeAmount(e)}
                    />
                  </div>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={this.handleformSubmit}>Create Payment</button>
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
    createTransaction          :  createTransaction
  }, dispatch);
};

// const mapStateToProps = state => {
//   return {
//     relatedTransactions      : state.transactions.relatedTransactions
//   };
// };

export default connect(null, mapDispatchToProps)(PaymentModal);
