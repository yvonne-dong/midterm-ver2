import React, { Component } from 'react';
import Artwork from '../Artwork/Artwork';
import './Section2.css';

class Section2 extends Component {
    data = {
        sec2: [
            {
                id: 's2-1', title: 'Unnumbered Sparks', year: 2014, artist: 'Janet Echelman, Aaron Koblin',
                medium: 'Fiber, Google Chrome, Go, Web Sockets, Web audio, WebGL, Polymer',
                text: 'Unnumbered Sparks is a large-scale sculpture that is constantly changing based on visitor interactions. By connecting mobile devices with the sculpture, visitors can directly influence the projected lighting on the sculpture in real time. Since the installation uses web technology to process and render received signals and visuals, it can be seen as a physical presentation of a browser window. Unnumbered Sparks reflects the characteristics of the Internet through its interactivity and collective creation experience.',
                img: 'http://www.unnumberedsparks.com/images/index/gallery-01.jpg'
            },
            {
                id: 's2-2', title: 'Immaterials: Light painting WiFi', year: 2011, artist: 'Timo Arnall, Jørn Knutsen and Einar Sneve Martinussen',
                medium: 'Video',
                text: 'Immaterials: Light painting WiFi is a short documentary about tracing the invisible landscape of WI-FI signals. Aiming to reveal the relationship between this immaterial field with the city space, the artist collective built a custom WI-FI measuring rod and used the technique of light painting to capture long-exposure photographs of the space. The results are images that display both the environment and an overlying structure of light.',
                img: 'http://res.cloudinary.com/voyoslo/image/upload/c_fill,dpr_3.0,h_231,q_60,w_382/aho_wifi'
            },
            {
                id: 's2-3', title: 'Alpha 3.4', year: 2002, artist: 'tsunamii.net',
                medium: 'Web browser, web server, live stream displays',
                text: 'Alpha 3.4 is a performance that emphasizes the infrastructure of the Internet. With documentation of the entire journey from the exhibition site to its website server, Charles Lim Li Yong and Woon Tien Wei explores the physicality of a seemingly immaterial presence. The gallery installation consists of a webcam live-stream of the server and four screens displaying the walking journey. The screens show the walker’s location interpreted as IP address, a web page of the IP address, the location on a map, and the traceroute to the IP address. ',
                img: 'http://universes-in-universe.de/car/documenta/11/brau/img/tsunamii-1.jpg'
            },
            {
                id: 's2-4', title: 'One Thousand And One Market Caps', year: 2018, artist: 'Aram Bartholl',
                medium: 'Printed wallpaper, books, printed coffee mugs, coffee machine, surveillance camera, table, chairs',
                text: 'One Thousand And One Market Caps is a “room” installation consists of a table and seating area displaying 2 printed books on most valuable cryptocurrency coins, a shelf of coffee mugs with printed messages and tweets about cryptocurrency, and a coffee machine. Visitors are welcomed to sit down, pour themselves a coffee and flip through the books. By taking the intangible digital asset and carefully designed marketing websites out of their digital context with printed screenshots, Bartholl challenges how cryptocurrency is being portrayed and perceived, and its digital presence in the actual space.',
                img: 'https://arambartholl.com/wwwppp/wp-content/uploads/2018/07/1001-market-caps-melle-biennale-aram-bartholl-2018-02-600x400.jpg'
            },
            {
                id: 's2-5', title: 'Offline Monochrome', year: 2013, artist: 'Aram Bartholl',
                medium: 'Offline routers',
                text: 'Each router of Offline Monochrome displays a single monochrome webpage. Normally used for hosting Internet connection, these routers are reprogrammed for working offline. By giving his net art pieces a physical presence, Bartholl also raises the question about the characteristics and accessibility of net art in a different environment.',
                img: 'https://arambartholl.com/wwwppp/wp-content/uploads/2018/05/Aram_Bartholl_Offline_Monochrome_01-800x533.jpg'
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
        let i = this.data.sec2.findIndex(record => record.id === e.target.id);
        this.setState({
            showArtwork: !this.state.showArtwork,
            selected: i
        });
    }

    render() {
        const idx = this.state.selected;
        let showArt = this.data.sec2[0];
        if (idx > -1) {
            showArt = this.data.sec2[idx];
        }

        const artworks = this.data.sec2.map(
            (t) =>
                <div className="sec2-titles" id={t.id} key={t.id}>
                    <div className="sec2-expand" id={t.id} onClick={this.toggleArtwork.bind(this)}>
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
            <div className="sec2-artworks">
                <img className="plan-img" src="https://66.media.tumblr.com/49482d1ec3e53e47abbf949dcaf32d47/b9de8cf3bf4db4e3-ec/s1280x1920/80c88a119ebf88f57cf0d3fdfc8612f2059886f2.png" alt="" />
                {artworks}
            </div>
        );
    }
}

export default Section2;