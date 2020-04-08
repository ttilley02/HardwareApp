import React from "react"
import Options from './Options';
import Hardware from './Hardware';
import slugify from 'slugify';
import './App.css'



class Features extends React.Component {
    render(){
       const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
              <>
                <Options
                key={itemHash}
                id={itemHash}
                name={slugify(feature)}
                checked={item.name === this.props.stateSelected[feature].name}

                onChange={e => this.props.updateFeature(feature, item)}
                /> 
                
                <label htmlFor={itemHash} className="feature__label">
                {item.name} ({this.props.USD.format(item.cost)})
                </label>
              </>
              );
            });
      
            return (
      
              <Hardware 
              title={feature}
              featureHash={featureHash}
              options = {options}     
              />
      
            );
          });
        return(
            <div className="features_Styles">
                {features}
            </div>
        )
    }    
}

export default Features