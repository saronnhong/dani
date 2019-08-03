import React, { Component } from "react";
import * as Sphere from 'photo-sphere-viewer'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.min.css'

class SphereComponent extends Component {
  constructor(props) {
    super(props)
    this.divStyle = {
      width: '100%',
      height: '600px'
    }
    this.sphereDiv = element => {
      this.photoSphereViewer = element
    }
    this.sphereDiv.appendChild = elem => {
      this.subDiv.appendChild(elem)
    }
  }

  componentDidMount() {
    this.psv = Sphere({
      parent: this,
      container: this.sphereDiv,
      panorama: this.props.panorama,
      navbar: ['autorotate', 'zoom', 'fullscreen']
    })
  }

  // when the component updates
  componentDidUpdate(prevProps) {
    // check if there is a new value for the panorama prop
    if (prevProps.panorama !== this.props.panorama) {
      // load a new panoramic image in the viewer
      this.psv.setPanorama(this.props.panorama)
    }
  }

  render() {
    return (
      <div style={this.divStyle} ref={this.sphereDiv} id="viewer">
        <div ref={node => (this.subDiv = node)} style={this.divStyle} />
      </div>
    )
  }
}

export default SphereComponent;