import React from 'react'
import { Link } from 'react-router-dom'

import SphereComponent from '../Image360'
import './App.css'


class DisplayPanorama extends React.Component {

  render() {

    const imageFile = process.env.PUBLIC_URL + '/img/panoramaImages/' + this.props.match.params.image + '.jpg'

    return (
      <div className="container">
        <div className="m-5">
          <SphereComponent panorama={imageFile} />
        </div>
        < button type="button" className="btn btn-success" >
          <Link className="back-btn" to="/Images-360"> BACK </Link>
        </button >
      </div>
    )
  }
}

export default DisplayPanorama;