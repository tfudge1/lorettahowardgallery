import { useState } from 'react';
import Image from "next/image";
import data from "../../../public/content.json";


function ExhibitionContent (display) {
    let content;
    console.log("dsplay:" + display.title);
    const artist_data = data["artists"];
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
                        let display_artists = (<p></p>);
            // let first_run = true;
            for (let ex_artist_index = 0; ex_artist_index < exhibition.artists.length; ex_artist_index++){
                for (let aritst_index = 0; aritst_index < artist_data.length; aritst_index++){
                    // console.log("exhibition.artists.slug = " + exhibition.artists.slug);
                    // console.log("artist_data[aritst_index].slug = " + artist_data[aritst_index].slug);
                    if (exhibition.artists[ex_artist_index].slug == artist_data[aritst_index].slug){
                        // console.log("MATCHED!");
                        // console.log("going to add to display artists:" + display_artists);
                        display_artists = (<div>
                            <a href={`/artists/${artist_data[aritst_index].slug}`}>
                            <Image 
                            src={artist_data[aritst_index].image_name}
                            alt="featured image"
                            width={200}
                            height={100}
                        />
                        <h2>{artist_data[aritst_index].name}</h2>
                        </a>
                        {display_artists}
                        </div>);
                        // console.log("added new entry to display artists:" + display_artists);
                        
                    }else{
                        // console.log("NOT MATCHED");
                    }
                }
            }
            // console.log("finished display artists, about to display:" + display_artists);
            content = (
            <div>
                {display_artists}
            </div>
            )            
            break;//videos
    
        default:

            content =  (
            <div>
                <p>Images</p>
            </div>
        )

            break;//selectedWorks
    }
    return content;
};

export default ExhibitionContent;

