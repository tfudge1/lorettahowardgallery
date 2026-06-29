import { useState } from 'react';
import Image from "next/image";
import data from "../../../public/content.json";


function ArtistContent (display) {
    let content;
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
            let bio = artist.biography;
            console.log(bio);
            if(bio != undefined){
            const bio_paragraphs = bio.split("<br />");
            let temp_content = <p></p>;
            let linebreak = <br />;
            console.log(bio_paragraphs[0]);
            console.log(bio_paragraphs[1]);
            for(let i =0; i < bio_paragraphs.length; i++){
                temp_content = temp_content + bio_paragraphs[i];
                temp_content = temp_content + linebreak;
            }
            
            content =  (
            <div className='second-level-content-display'>
                <ul>
                    {bio_paragraphs.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        )
        }else{
            content = (
                <div></div>
            )
        }
            break;//bio

        case display="videos":
            console.log(artist.videos);
            if(artist.videos != undefined){
            content =  (
            <div className='second-level-content-display'>
                {artist.videos.map((video) => (
                    <div key={video.url}>
                        <iframe src={video.url} allowFullScreen />
                        <p>{video.description}</p>
                    </div>
                  ))}
                
            </div>
        )
        }else{
            content = (<div></div>)
        }
            break;//videos

        case display="exhibitions":
            if(artist.exhibitions != undefined){
            let display_exhibitions_list = (<p></p>);
            for(let artists_exhibitions = 0; artists_exhibitions < artist.exhibitions.length; artists_exhibitions++){
                let current_artist_slug = artist.exhibitions[artists_exhibitions];
                for(let all_exhibitions_i = 0; all_exhibitions_i < data.exhibitions.length; all_exhibitions_i++){
                    let current_exhibition = data.exhibitions[all_exhibitions_i];
                    if(current_artist_slug.slug == current_exhibition.slug){
                        display_exhibitions_list = (
                        <div>
                            <Image 
                            src={current_exhibition.art[0].url}
                            alt="exhibition image"
                            width={200}
                            height={100}
                        />
                        <h2>{current_exhibition.title}</h2>
                        <p>{current_exhibition.date_range}, {current_exhibition.year}</p>
                        <a href={`/exhibitions/${current_exhibition.slug}`}><p>View Exhibition</p></a>
                        {display_exhibitions_list}
                        </div>
                        );
                    }
                }

            }
            
            content =  (
            <div className='second-level-content-display'>
                {display_exhibitions_list}
            </div>
            )
        }else{
            content = (<div></div>)
        }

            break;//exhibitions

        case display="catalouges":
            if(artist.catalogues != undefined){

            let display_catalouges_list = (<p></p>);
            console.log("artist.catalogues.length: " + artist.catalogues);
            for(let artists_catalouges = 0; artists_catalouges < artist.catalogues.length; artists_catalouges++){
                console.log("artists_catalouges: " + artists_catalouges);
                console.log("artist.catalouges[0]: " + artist.catalogues[0]);
                let current_artist_slug = artist.catalogues[artists_catalouges];
                for(let all_catalouges_i = 0; all_catalouges_i < data.catalogues.length; all_catalouges_i++){
                    let current_catalouge = data.catalogues[all_catalouges_i];
                    if(current_artist_slug.slug == current_catalouge.slug){
                        display_catalouges_list = (
                        <div>
                            <Image 
                            src={current_catalouge.image_name}
                            alt="exhibition image"
                            width={200}
                            height={100}
                        />
                        <h2>{current_catalouge.title}</h2>
                        <p>{current_catalouge.year}</p>
                        <a href={`/catalogues/${current_catalouge.slug}`}><p>View Catalogue</p></a>
                        {display_catalouges_list}
                        </div>
                        );
                    }
                }

            }
            
            content =  (
            <div className='second-level-content-display'>
                {display_catalouges_list}
            </div>
            )
        }else{
            content = (<div></div>)
        }
            break;//catalouges

        case display="press":
            if(artist.press != undefined){
            content =  (
            <div className='second-level-content-display'>
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
        }else{
            content = (<div></div>);
        }
            break;//press
    
        default:
            content = (
            <div className='second-level-content-display'>
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

