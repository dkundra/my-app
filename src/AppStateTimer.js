import React from "react";

class AppStateTimer extends React.Component {
constructor() {
    super();
    this.state = {
        count: 0
    }
}

update = () => {
       this.setState( {
           count: this.state.count +1
               })
}

handleClick = (e) => {
    this.interval = setInterval(this.update,1000);
}
render() {
     return (
         <React.Fragment><br/><br/>
         <button onClick = {this.handleClick}>Star Timer</button>
           <h2>Seconds Elapsed: {this.state.count}</h2>       
         </React.Fragment>
     )

}

}

export default AppStateTimer;