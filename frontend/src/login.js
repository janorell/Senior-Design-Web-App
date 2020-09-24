
import React , { Component }  from 'react';
import auth0Client from './auth';
import { withRouter } from "react-router";
import * as d3 from "d3";
import Button from '@material-ui/core/Button';


class Login extends Component {
auth = auth0Client.isAuthenticated();
render() {
  //console.log("Login page");
  //console.log(this.props.location.pathname);

  return (
    <div>
    <br/> <h1 style={{marginTop: "10%", marginLeft: "30%" }}>  Welcome to Our Weather App! </h1>  <br/>
    <Button  color="primary" variant="contained" style={{ fontSize: 40, fontWeight: '700',marginTop: "10%", marginLeft: "35%" }} onClick={auth0Client.signIn}>Sign In Here</Button>
    <br/>
    </div>
  )
}

}

export default withRouter(Login);
