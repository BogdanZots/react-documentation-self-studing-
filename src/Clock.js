import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    changeState() {
        this.setState({
            date : new Date
        })
    }
    update(){
      this.TidemId = setInterval(this.changeState.bind(this),1000)
    }

    componentDidMount(){
        {this.update()}
    }
    componentWillUnmount(){
        clearInterval(this.TidemId)
    }

    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
                <button onClick={this.componentWillUnmount.bind(this)}></button>
            </div>
        );
    }
} 

export default Clock;
