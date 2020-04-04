import React from "react"



class Summary extends React.Component {
    render(){
        return(
            <div className="Summary_styles">
                {this.props.summary}
            </div>
        )
    }    
}

export default Summary