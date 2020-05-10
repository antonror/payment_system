import React, {Component}          from "react";
import { connect }                 from "react-redux";
import { bindActionCreators }      from "redux";
import {
  getCurrentUser
}                                  from "../redux/actions";

class Transactions extends Component {

  componentDidMount() {

  };

  render(){

    return (
      <div className="tsransactions-list">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
