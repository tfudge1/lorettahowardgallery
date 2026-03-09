'use client';

import { useState } from 'react';
import Image from "next/image";

function ArtistContent (display) {
    let content;
    // console.log("dsplay:" + display.display);
    switch (display.display) {
        case display="selectedWorks":
            content = (
            <div>
                <p>Selected Works here</p>
            </div>
        )
            break;//selectedWorks

        case display="biography":
            content =  (
            <div>
                <p>biography here</p>
            </div>
        )
            break;//bio

        case display="videos":
            content =  (
            <div>
                <p>videos here</p>
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
                <p>default</p>
            </div>
            )
            break;
    }
    return content;
};

export default ArtistContent;

