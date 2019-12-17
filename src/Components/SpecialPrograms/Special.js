import React, { Component } from 'react';
import Artwork from '../Artwork/Artwork';
import './Special.css';

class Special extends Component {
    data = {
        spec: [
            {
                id: 's4-1', title: 'Augmented Reality Monuments Tour', year: 2017, artist: 'Movers and Shakers',
                medium: 'AR',
                text: 'IN PROGRESS',
                img: 'https://images.squarespace-cdn.com/content/v1/593f0d1a37c58186b664781b/1541656298816-NE7NKTSN4XYZYX7YD11F/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/DSC07461.jpg'
            },
            {
                id: 's4-2', title: '4th Wall AR', year: 2018, artist: 'Nancy Baker Cahill',
                medium: 'AR',
                text: 'IN PROGRESS',
                img: 'https://www.artnews.com/wp-content/uploads/2018/08/tzolkin-memorial-finalnuevolaredomexicophotocreditalejandra-munoz.jpg?w=1024'
            },
            {
                id: 's4-3', title: 'The Internet Yami-ichi', year: "2012-", artist: '',
                medium: 'Event',
                text: 'IN PROGRESS',
                img: 'http://yami-ichi.biz/assets/images/bologna.jpg'
            },
            {
                id: 's4-4', title: 'Anti-Gone', year: 2019, artist: 'Theo Triantafyllidis',
                medium: 'Mixed Reality Performance',
                text: 'IN PROGRESS',
                img: 'https://humanresourcesla.com/wp-content/uploads/2019/05/screen_6160x4620_2019-04-29_19-40-38-1024x768.jpg'
            }
        ],
        selected: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            showArtwork: false
        };
    }

    toggleArtwork = (e) => {
        let i = this.data.spec.findIndex(record => record.id === e.target.id);
        this.setState({
            showArtwork: !this.state.showArtwork,
            selected: i
        });
    }

    render() {
        const idx = this.state.selected;
        let showArt = this.data.spec[0];
        if (idx > -1) {
            showArt = this.data.spec[idx];
        }

        const artworks = this.data.spec.map(
            (t) =>
                <div className="spec-titles" id={t.id} key={t.id}>
                    <div className="spec-expand" id={t.id} onClick={this.toggleArtwork.bind(this)}>
                        {t.title}
                    </div>
                    {this.state.showArtwork && this.state.selected > -1 ?
                        <Artwork
                            img={showArt.img}
                            title={showArt.title}
                            artist={showArt.artist}
                            year={showArt.year}
                            medium={showArt.medium}
                            text={showArt.text}
                            closeArtwork={this.toggleArtwork.bind(this)} />
                        : null
                    }
                </div>
        );

        return (
            <div className="spec-main">
                <div className="program-title">
                    <h1>Special Programs:</h1>
                    <h2 id="description">Event<br></br> Internet Yami-Ichi (Internet black market)</h2>
                    <h2 id="description">Performance<br></br>Anti-Gone by Theo Triantafyllidis</h2>
                    <h2 id="description">AR platform<br></br>4th Wall AR <br></br> Augmented Reality Monument Tour</h2>
                </div>
                <div className="spec-artworks">
                    {artworks}
                </div>
            </div>
        );
    }
}

export default Special;