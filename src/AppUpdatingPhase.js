import React from "react";

class AppUpdatingPhase extends React.Component {
    constructor(props) {
        super();
        this.state = {
            count: 0
        }
    }

    update = () => {
       this.setState ({count: this.state.count +1})
    }

    componentDidMount = () => {
          this.interval = setInterval(this.update,2000);
    }

     
    render() {
        return(<React.Fragment>
            <Updates new = {this.state.count} ></Updates>
        </React.Fragment>)
    }
}

class Updates extends React.Component {
    shouldComponentUpdate(newProps, newState) {
        if (this.props.new <= 3) {
            console.log('shouldComponentUpdate:', newProps);
                return false;
            } else {
                 return true;
            }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Previous value destroyed:', prevProps);
        console.log('Updated');
    } 
    render() {
    return ( <React.Fragment>
                <h2> Seconds Elapsed: {this.props.new} </h2> 
            </React.Fragment>);
        }
}

export default AppUpdatingPhase;