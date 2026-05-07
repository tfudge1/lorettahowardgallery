import { useState } from 'react';
import Image from "next/image";
import data from "../../../public/content.json";


function ExhibitionContent (display) {
    let content;
    console.log("dsplay:" + display.title);
    const _data = data["exhibitions"];
    // console.log(_data);
    let exhibition;
    for (let index = 0; index < _data.length; index++) {
        if (_data[index].title == display.title) {
            exhibition = _data[index];
        }
    }
    switch (display.display) {
        case display="PressRelease":
            content =  (
            <div>
                <p>{exhibition.description}</p>
            </div>
        )
            break;//bio

        case display="Artists":
            content =  (
            <div>
                <p>Artists</p>
            </div>
        )
            break;//videos
    
        default:
            content = (
            <div>
                {/* {artist.works.map((work) => (
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
                  ))} */}
            </div>
            )
            break;//selectedWorks
    }
    return content;
};

export default ExhibitionContent;

