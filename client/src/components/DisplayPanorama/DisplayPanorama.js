import React from 'react'
import SphereComponent from '../Image360'
import './App.css'

const panorama1 = 'http://reznik.lt/wp-content/uploads/2017/09/preview3000.jpg'
// const panorama2 =
//   'https://photo-sphere-viewer.js.org/assets/Bryce-Canyon-National-Park-Mark-Doliner.jpg'

class DisplayPanorama extends React.Component {
  // state = {
  //   panorama: panorama1
  // }

  // togglePanorama = () => {
  //   let { panorama } = this.state
  //   panorama = panorama === panorama1 ? panorama2 : panorama1
  //   this.setState({ panorama })
  // }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        {/* <button
          onClick={this.togglePanorama}
          className="btn btn-block btn-lg btn-primary mt-3"
        >
          Toggle Panorama
        </button> */}
        <div className="m-5">
          <SphereComponent panorama={panorama1} />
        </div>
      </div>
    )
  }
}

export default DisplayPanorama