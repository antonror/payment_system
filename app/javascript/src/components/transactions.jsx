import React, {Component}          from "react";
import { connect }                 from "react-redux";
import { bindActionCreators }      from "redux";
import {
  getTransactions
}                                  from "../redux/actions";

class Transactions extends Component {

  componentDidMount() {
    this.props.getTransactions();
  };

  render(){
    const {relatedTransactions, getTransactions} = this.props;
    return (
      <div className="transactions-list">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Customer Email</th>
              <th scope="col">Status</th>
              <th scope="col">Amount</th>
              <th scope="col">Created At</th>
              <th scope="col">Detail Info</th>
            </tr>
          </thead>
          <tbody>
            { relatedTransactions && relatedTransactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.type ? transaction.type : 'Transaction'}</td>
                <td>{transaction.customer_email}</td>
                <td className="text-capitalize">{transaction.status}</td>
                <td>${transaction.amount ? transaction.amount : 0}</td>
                <td>{transaction.created_at}</td>
                <td>info</td>
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
    getTransactions          :  getTransactions
  }, dispatch);
};

const mapStateToProps = state => {
  return {
    relatedTransactions      : state.transactions.relatedTransactions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
