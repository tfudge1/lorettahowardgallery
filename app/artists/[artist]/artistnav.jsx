'use client';

import { useState } from 'react';
import Image from "next/image";
import ArtistContent from "./artistcontent.jsx";

function ArtistNav (props) {
  const [content, setContent] = useState(0);
  const artistName = props.name;
  return (
    <div className="artist-nav">
        <p>{artistName}</p>
        <ul>
            <li><a onClick={() => setContent("selectedWorks")}>Selected Works</a></li>
            <li><a onClick={() => setContent("biography")}>Biography</a></li>
            <li><a onClick={() => setContent("videos")}>Videos</a></li>
            <li><a onClick={() => setContent("exhibitions")}>Exhibitions</a></li>
            <li><a onClick={() => setContent("catalouges")}>Catalogues</a></li>
            <li><a onClick={() => setContent("news")}>News</a></li>
            <li><a onClick={() => setContent("press")}>Press</a></li>
        </ul>

      <ArtistContent name={artistName} display={content} /> 

    </div>
  );
};

export default ArtistNav;

