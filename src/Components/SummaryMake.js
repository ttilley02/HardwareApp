import React from "react"



class SummaryMake extends React.Component {
    render(){
        
        return(
            <div className="summary__option" key={this.props.featureHash}>
                <div className="summary__option__label">{this.props.featureHash} </div>
                <div className="summary__option__value">{this.props.selectedOption.name}</div>
                <div className="summary__option__cost">
                {this.props.USD.format(this.props.selectedOption.cost)}
                </div>
            </div>
        )
    }    
}

export default SummaryMake


