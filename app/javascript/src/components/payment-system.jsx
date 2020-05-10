import React, {Component}          from "react";
import { connect }                 from "react-redux";
import { bindActionCreators }      from "redux";
import {
  getCurrentUser,
  updateCurrentState
}                                  from "../redux/actions";
import Merchants                   from "./merchants";
import Transactions                from "./transactions";

class PaymentSystem extends Component {

  componentDidMount() {
    this.props.getCurrentUser();
  };

  render(){
    const {currentState, updateCurrentState, currentUser} = this.props;
    return (
      <div className="app container">
        <div className="card mb-3">
          <div className="card-body text-center">
            <h2>
              Profile
            </h2>
            { currentUser &&
              <React.Fragment>
                <div> <b>Name: </b> {currentUser.name}</div>
                <div> <b>Role: </b> {currentUser.role}</div>
                <div> <b>Amount: $</b> {currentUser.amount ? currentUser.amount : 0}</div>
                <div> <b>Description: </b> {currentUser.description}</div>
              </React.Fragment>
            }
          </div>
        </div>
        { currentUser && currentUser.role === 'merchant' &&
          <Transactions />
        }
        { currentUser && currentUser.role === 'admin' &&
          <div>
            <nav>
              <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                <a
                  className="nav-item nav-link active"
                  id="nav-merchants-tab"
                  data-toggle="tab"
                  href="#nav-merchants"
                  role="tab"
                  aria-controls="nav-merchants"
                  aria-selected="false"
                  onClick={() => updateCurrentState("merchants")}
                >
                  Merchants
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-transactions-tab"
                  data-toggle="tab"
                  href="#nav-transactions"
                  role="tab"
                  aria-controls="nav-transactions"
                  aria-selected="true"
                  onClick={() => updateCurrentState("transactions")}
                >
                  Transactions
                </a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              { currentState === "merchants" &&
                <div
                  className="tab-pane fade show active"
                  id="nav-merchants"
                  role="tabpanel"
                  aria-labelledby="nav-merchants-tab"
                >
                  <Merchants />
                </div>
              }
              { currentState === "transactions" &&
                <div
                  className="tab-pane fade show active"
                  id="nav-transactions"
                  role="tabpanel"
                  aria-labelledby="nav-transactions-tab"
                >
                  <Transactions />
                </div>
              }
            </div>
          </div>
        }
      </div>
    )
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCurrentUser:        getCurrentUser,
    updateCurrentState:    updateCurrentState
  }, dispatch);
};

const mapStateToProps = state => {
  return {
    currentState:          state.user.currentState,
    currentUser:           state.user.currentUser
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentSystem);
