import React from 'react';

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

export default class MyIcon extends React.Component {
    constructor() {
        super();
        this.state = { fade: false }
    }

    render() {
        const fade = this.state.fade;

        return (
            <span onClick={() => this.setState({ fade: true })}
                onAnimationEnd={() => { this.setState({ fade: false }); openInNewTab(this.props.uri) }}
                className={fade ? 'clickableIcon fade' : 'clickableIcon'}
            >
                <i className={this.props.icon + " " + this.state.fade}></i>
            </span>
        );
    }
}

