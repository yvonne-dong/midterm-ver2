import React, { Component } from 'react';
import Artwork from '../Artwork/Artwork';
import './Section3.css';

class Section3 extends Component {
    data = {
        sec3: [
            {
                id: 's3-1', title: 'Do Androids Dream of Electric Cows?', year: 2017, artist: 'Baoyang Chen',
                medium: 'VR, mirror maze, sound installation',
                text: 'Do Androids Dream of Electric Cows? disrupts the immersive and enclosed environment that VR exhibits with its onsite mirror glass structure. Presenting the experience that connects digital simulation with physical barriers, Chen explores the ontology and definition of “virtual reality”. The displayed virtual space is independent from the structure, imposing a restriction and dilemma on how the audience would navigate around the space. The mirror glass walls expose participants’ movements to outside viewers, and integrate this connection to complete the installation.',
                img: 'https://freight.cargo.site/t/original/i/b706b1bc7a8cc7e8eefb266627b66e17fc348293424ab23d2df5a9243dc78016/BCHEN_04.jpg'
            },
            {
                id: 's3-2', title: 'Studio Visit', year: 2018, artist: 'Theo Triantafyllidis',
                medium: 'Prints on plywood, HDTVs on wooden stands room, scale tracking, gaming PC, performance documentation',
                text: 'The installation of Studio Visit is a mixed reality experience about simulation and digital presence of the self. The installation combines sculptures with a virtual studio space showing the artist, an Ork avatar, working on digital models of those sculptures. Triantafyllidis breaks the physical-virtual separation through bringing objects across the border. By queering the Ork aesthetics, Triantafyllidis seeks the identity of gender and avatar presentations in the emerging digital social space.',
                img: 'http://slimetech.org/files/image45.jpg'
            },
            {
                id: 's3-3', title: 'Hyper-Reality', year: 2016, artist: 'Keiichi Matsuda',
                medium: '3D renderings, video',
                text: 'Hyper-Reality depicts a speculative future where the physical and virtual world has no separations, and the world is overloaded with augmented information and network connections. While the merging of digital space and reality saturated daily experience and pushed information accessibility to another level, Matsuda highlights the underlying concerns of the tendency. The artist argues that when this integrated world present convenience, it is also manipulating the ways people understand reality.',
                img: 'http://hyper-reality.co/assets/HQ_images/hyper-reality_02.jpg'
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
        let i = this.data.sec3.findIndex(record => record.id === e.target.id);
        this.setState({
            showArtwork: !this.state.showArtwork,
            selected: i
        });
    }

    render() {
        const idx = this.state.selected;
        let showArt = this.data.sec3[0];
        if (idx > -1) {
            showArt = this.data.sec3[idx];
        }

        const artworks = this.data.sec3.map(
            (t) =>
                <div className="sec3-titles" id={t.id} key={t.id}>
                    <div className="sec3-expand" id={t.id} onClick={this.toggleArtwork.bind(this)}>
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
            <div className="sec3-artworks">
                <img className="plan-img" src="https://66.media.tumblr.com/9f0b6fdcca0edce93b112abd5318bc71/b9de8cf3bf4db4e3-0c/s1280x1920/2a19250768001fd3a6316c1f121e476f08db4828.png" alt="" />
                {artworks}
            </div>
        );
    }
}

export default Section3;