import React from 'react';   
   
class Login extends React.Component {
      
    render() {
            let element = null;
            let isLoggedIn = false
            if(isLoggedIn) {
                    element = <h2>Welcome Admin</h2>
             }
            else {
                     element = <h2>Please Login</h2>
            }  
            return (<React.Fragment>
                    {element}
            </React.Fragment>)  
    }
}
export default Login;
