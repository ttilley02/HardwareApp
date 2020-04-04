import React from "react"



class Options extends React.Component {
    render(){
        return(
            <div key={this.props.key} className="feature__item">
                <input
                type="radio"
                id={this.props.id}
                className="feature__option"
                name={this.props.name}
                checked={this.props.checked}
                onChange={this.props.onChange}
                />
            </div>

        )
    }    
}

export default Options