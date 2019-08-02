import React, { Component } from "react";
import API from './../../utils/API';
import withAuth from './../withAuth';


class Image360 extends Component {
    state = {
        metricID: "",
        metrics: []
    }

    componentDidMount() {
        API.getUser(this.props.user.id).then(res => {
            this.setState({
                metricID: res.data.metric
            })
            let pageOn = this.props.history.location.pathname.replace("/", "")
            API.addToMetrics(res.data.metric, pageOn)
        });
    }

    render() {
        return (
            <div>
                <iframe title="360 demo" src="https://marinadelkovamoro.github.io/360viewer/"></iframe>
            </div>
        )

}
}
export default withAuth(Image360);