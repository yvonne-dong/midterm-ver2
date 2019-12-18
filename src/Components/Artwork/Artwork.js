import React, { Component } from 'react';
import { Palette } from 'react-palette'
import './Artwork.css';


class Artwork extends Component {

    render() {
        return (
            // <Palette src={this.props.img}>
            //     {({ data, loading, error }) => (

            //     )}
            // </Palette>
            // <div className="artwork" style={{ backgroundColor: data.muted }}>

            <div className="artwork">
                <div className="artworkInner">
                    <div className="label">
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.artist}, {this.props.year}</h2>
                        <h3>{this.props.medium}</h3>
                    </div>

                    <div className="description">
                        <p>{this.props.text}</p>
                        <div className="artwork-close" onClick={this.props.closeArtwork}>back</div>
                    </div>
                </div>
                <img className="artwork-img" src={this.props.img} alt="" />
            </div>
        );
    }
}

export default Artwork;