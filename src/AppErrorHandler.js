import React from 'react';

class AppErrorHandler extends React.Component {
   constructor() {
      super();
      this.state = {
         err: false,
      };
   }
   componentDidCatch(error) {
      this.setState({
         err: true,
      });
   }
   render() {
      return (
         <div>
            {this.state.err ? (
               <div style={{border: '2px solid red',}}>
                  Error
               </div>
               ) : (
               <Comp/>
            )}
         </div>
      );
   }
}
class Comp extends React.Component {
   render() {
      return <h1></h1>;
   }
}
export default AppErrorHandler;