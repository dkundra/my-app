import React from 'react';

class AppComponentDidMount extends React.Component {
        constructor() {
            super();
            this.state = {
                count: 0
            };
        }
        start = () => {
            this.setState({
                count: this.state.count + 1
            });
        }
        componentDidMount() {
            this.interval = setInterval(this.start, 1000);
        }
        render() {
            return ( <React.Fragment>
                    <h2> Seconds Elapsed: {this.state.count} </h2>
                </React.Fragment>);
            }
        }
export default AppComponentDidMount;
