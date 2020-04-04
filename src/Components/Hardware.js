import React from 'react'

class Hardware extends React.Component{
    render(){
        return(
            <fieldset className="feature" key={this.props.featureHash}>
                <legend className="feature__name">
                <h3 
                featureHash={this.props.featureHash}
                 >
                {this.props.title}
                
                </h3>
                </legend>
                {this.props.options}  
            </fieldset>
    
        )
    }
}



export default Hardware
