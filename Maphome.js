import React from 'react'
import Map from './Map';

class Maphome extends React.Component {
    render() {
      return(
          <div style={{magin:'50px'}}>
          <Map
       google={this.props.google}
       center={{lat: 9.66845, lng: 80.00742}}
       height='300px'
       width='500px'
       zoom={25}
      />
      </div>
        )
    }
  }
  export default Maphome