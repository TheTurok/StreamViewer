import React, { Component } from 'react';
import {GoogleLogin} from 'react-google-login';

const CLIENT_ID = '976903879431-dn3gmb86cdtp557lj21pgisc1av0qc5l.apps.googleusercontent.com';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    }

  }


  render() {
    const responseGoogle = (response) => {
      console.log(response);
    }

    return(
    <div className = "row text-center col">
      <h1> StreamViewer </h1>
      <GoogleLogin
        clientId= {CLIENT_ID}
        buttonText="Google Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        />
    </div>
    );
  }
}

export default Login;
