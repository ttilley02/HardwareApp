import React from "react"


class Features extends React.Component {
    render(){
        return(
            <div className="features_Styles">
                {this.props.features}
            </div>
        )
    }    
}

export default Features