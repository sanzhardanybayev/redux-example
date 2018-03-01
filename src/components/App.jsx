import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ToTopButton from './common/toTopButton';
import { bindActionCreators } from "redux";
import { ToastContainer, toast } from 'react-toastify';
import { companyCreated, newClient, removeClient } from "../actions/topClassActions";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addCompany = this.addCompany.bind(this);
    this.removeClient = this.removeClient.bind(this);
  }

  addCompany(e) {
    e.preventDefault();
    const companyName = document.querySelector("#companyName").value;

    if (this.props.clients.filter(function(e) { return e.name === companyName; }).length > 0) {
      /* vendors contains the element we're looking for */
      toast.error("Компания уже существует! 😯")
    } else {
      this.props.newClient({ name:  companyName});
      toast("Компания успешно добавлена!");
    }
  }

  removeClient(e){
    e.preventDefault();
    this.props.removeClient({ name: e.target.getAttribute("company_name")});
    toast.error("Компания удалена!");
  }

  render() {
    return (
      <div className={"container"} >
        <div className="row" >
          <h1 >Hello World, this is {this.props.topClass.companyName} 🎉 👋</h1 >
          <h3 >It's {(new Date()).toString()} </h3 >
        </div >
        <div className="row" >
          <table className="table table-dark col-sm-12 col-md-2 offset-md-5" >
            <thead >
            <tr >
              <th scope="column" >
                Company Name
              </th >
            </tr >
            </thead >
            <tbody >
            {this.props.clients.map(client =>
              <tr >
                <td scope="row" className="col-md-12"> {client.name} </td >
                <td scope="row" className="col-md-12">
                  <button className="btn btn-danger" company_name={client.name} onClick={this.removeClient}>Remove</button>
                </td >
              </tr >
            )}
            </tbody >
          </table >
        </div >
        <div className="row" >
          <section className="col-12 col-md-3 offset-md-4" >
            <form >
              <div className="form-group" >
                <label for="companyName" >Company name</label >
                <input type="text" className="form-control" id="companyName" aria-describedby="emailHelp"
                       placeholder="Enter company name" />
              </div >
              <button type="submit" className="btn btn-primary" onClick={this.addCompany} >Add</button >
            </form >
          </section >
        </div >
        <ToastContainer/>
        <ToTopButton />
      </div >
    );
  }
}

App.defaultProps = {
  topClass: {
    companyName: 'TopClass'
  }
};

App.propTypes = {
  topClass: PropTypes.object
};


const mapStateToProps = (state) => {
  return {
    topClass: state.topClass,
    clients: state.clients
  };
};


const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    priceIncreased: companyCreated,
    newClient: newClient,
    removeClient: removeClient
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);
