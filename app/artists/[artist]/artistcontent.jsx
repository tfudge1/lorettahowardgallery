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
                {artist.catalogues.map((catalogue) => (
                    <div key={catalogue.title}>
                        <p>{catalogue.title}</p>
                        <p>{catalogue.year}</p>
                        <Image 
                            src={catalogue.image_name}
                            alt="catalogue image"
                            width={200}
                            height={100}
                        />
                        <p>{catalogue.description}</p>
                        <a href={catalogue.pdf_link}>Download PDF</a>
                        <br />
                        <a href={catalogue.book_link}>Click Here to Purchase</a>
                    </div>
                  ))}
            </div>
        )
            break;//catalouges

        case display="press":
            content =  (
            <div>
                {artist.press.map((press) => (
                    <div key={press.title}>
                        <Image 
                            src={press.image_name}
                            alt="article image"
                            width={200}
                            height={100}
                        />
                        <p>{press.title}</p>
                        <p>{press.year}</p>
                        <p>{press.description}</p>
                        <a href={press.url}>View Article</a>
                    </div>
                  ))}
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

