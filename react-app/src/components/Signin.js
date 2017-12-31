import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';


class Signin extends Component {
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



//   const {onSubmit = () => {}} = props;
  //  const DOMAIN = 'http://www.eventbriteapi.com/v3/users/me/?token=BOJPDFI7HSHDCV6WQZAL';
     handleSubmit = event => {
     event.preventDefault();
     console.log({target: event.target});
     console.log({target: event.target[0].value});
     console.log(this.inputNode.value);
     console.log(this.inputNode2.value);



  var formData = new FormData();
  formData.append("username", this.inputNode.value);
  formData.append("password", this.inputNode2.value);


  // let reqBody = {
  //      email: this.refs.email.value,
  //      password: this.refs.password.value,
  //      confirmPassword: this.refs.confirmPassword.value
  //    };
  // body: json.stringify(reqbody)



     fetch("http://localhost:3000/tokens",
         { method: 'POST',body: formData})
        .then(res => res.json())
         .then(res => (
           console.log(res.jwt),
           this.setState({username: this.inputNode.value},
           window.localStorage.setItem('jwt', res.jwt))
         )
       )

         .catch(function(error) {
  console.log('There has been a problem with your fetch operation: ', error.message);
});
this.props.history.push(`/welcome`);
// let nv = jwtDecode(window.localStorage.getItem('jwt'));
//   this.setState({username: nv.username});
//     const {currentTarget} = event;
//   const formData = new FormData(currentTarget);
//   onSubmit({
//     email: formData.get('email'),
//     password: formData.get('password')
//   });
 }

  render () {
    return (
  <div>
  
    <form onSubmit={this.handleSubmit}>
      <div>

        <label htmlFor='username'>username</label> <br />
        <input type='username' id='username' name='username' ref={node => (this.inputNode = node)}/>
      </div>

      <div>
        <label htmlFor='password'>Password</label> <br />
        <input type='password' id='password' name='password' ref={node => (this.inputNode2 = node)} />
      </div>
      {`${this.state.username}`}
      <div>
        <input type='submit' value='Sign In'/>
      </div>
    </form>
  </div>
  )
  }

}

export default Signin;
