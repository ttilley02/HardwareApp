import React from 'react'

class Total extends React.Component{
    render(){
        const total = Object.keys(this.props.Total).reduce(
            (acc, curr) => acc + this.props.Total[curr].cost,
            0
          );
        const totalFinal = this.props.USD.format(total)
       
    
      
        return(
            <div className= "totals">
                {totalFinal}

            </div>
        )
    }
}



export default Total
