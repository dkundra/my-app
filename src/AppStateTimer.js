import React from "react";

class AppStateTimer extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
}

start = () => {
    this.setState({
    count: this.state.count + 1
    });
}
render() {
    if (this.state.count > 5) {
        throw new Error('Count cannot be greater than 5 ')
    }
    return ( <React.Fragment>
            <h1>{this.state.count}</h1><br/>
           <button onClick={this.start}>Updated</button> 
        </React.Fragment>);
    }

}

export default AppStateTimer;