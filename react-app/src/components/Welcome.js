import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';



class Welcome extends Component {
  state = {username: undefined, user: undefined}
  constructor (props) {
    super(props);

  //  this.createToken = this.createToken.bind(this);
  }

  componentDidMount () {
  let nv = jwtDecode(window.localStorage.getItem('jwt'));
  if (nv !== null) {

    this.setState({user: `Hello  ${nv.username}`})
  //  this.setState({isSignedIn: !!window.localStorage.getItem('jwt')});
   }

}


  render () {
    const divStyle = {
    color: 'white',
    backgroundImage: 'url(http://vancouver.ca/images/cov/feature/about-vancouver-facebook-size.jpg)',
    width: "100%",
    height: "700px",
    flex: 1
  };

    return (
      <div style={divStyle}>

           <h1>  {`${this.state.user}`} </h1>

    </div>
  )
}
}

export default Welcome;
