'use client';

import { useState } from 'react';
import Image from "next/image";
import ExhibitionContent from "./exhibitioncontent.jsx";

function ExhibitionNav (props) {
  const [content, setContent] = useState(0);
  const exhibitionTitle = props.title;
  const dateRange = props.date_range;
  return (
    <div className="exhibition-nav">
        <p>{exhibitionTitle}</p>
        <p>{dateRange}</p>
        <ul>
            <li><a onClick={() => setContent("InstallationViews")}>Installation Views</a></li>
            <li><a onClick={() => setContent("PressRelease")}>Press Release</a></li>
            <li><a onClick={() => setContent("Artists")}>Artists</a></li>
        </ul>

      <ExhibitionContent title={exhibitionTitle} display={content} /> 

    </div>
  );
};

export default ExhibitionNav;

