import { useState } from 'react';
import Image from "next/image";
import data from "../../../public/content.json";


function ArtistContent (display) {
    let content;
    console.log("dsplay:" + display.name);
    const _data = data["artists"];
    // console.log(_data);
    let artist;
    for (let index = 0; index < _data.length; index++) {
        if (_data[index].name == display.name) {
            artist = _data[index];
        }
    }
    switch (display.display) {
        case display="biography":
            content =  (
            <div>
                <p>{artist.biography}</p>
            </div>
        )
            break;//bio

        case display="videos":
            content =  (
            <div>
                {artist.videos.map((video) => (
                    <div key={video.description}>
                        <iframe src={video.url} allowFullScreen />
                        <p>{video.description}</p>
                    </div>
                  ))}
                
            </div>
        )
            break;//videos

        case display="exhibitions":
            content =  (
            <div>
                <p>exhibitions here</p>
            </div>
        )
            break;//exhibitions

        case display="catalouges":
            content =  (
            <div>
                <p>catalouges here</p>
            </div>
        )
            break;//catalouges

        case display="news":
            content =  (
            <div>
                <p>news here</p>
            </div>
        )
            break;//news

        case display="press":
            content =  (
            <div>
                <p>press here</p>
            </div>
        )
            break;//press
    
        default:
            content = (
            <div>
                {artist.works.map((work) => (
                    <div key={work.title}>
                        <Image 
                            src={work.image_name}
                            alt="featured image"
                            width={200}
                            height={100}
                        />
                        <p>{work.title}</p>
                        <p>{work.year}</p>
                        <p>{work.medium}</p>
                        <p>{work.dimentions}</p>
                    </div>
                  ))}
            </div>
            )
            break;//selectedWorks
    }
    return content;
};

export default ArtistContent;

