'use client'

import content from "../../../public/content.json";
import { NextRequest } from 'next/server';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import Image from "next/image";
// import ArtistNav from "./artistnav";

export default function Page() {
const pathname = usePathname().slice(12);
console.log(pathname);
  const res = content
  const _res = res.catalogues
  let catalogue: { map?: any; title: any; slug?: string; year?: string; image_name: string; description?: string; pdf_link?: string; book_link?: string; };
  let img_src = ""
  for (let index = 0; index < _res.length; index++) {
    
    if (_res[index].slug == pathname) {
        catalogue = _res[index];
        return(
          <div>
            <p>{catalogue.title}</p>
            <p>{catalogue.year}</p>
            <Image 
              src={catalogue.image_name} 
              alt="catalogue image" 
              width={200} 
              height={100} 
            />
            <p>{catalogue.description}</p>
            <a href={catalogue.pdf_link} download={catalogue.pdf_link}>Download PDF</a>
            <br />
            <a href={catalogue.book_link}>Click Here to Purchase</a>
          </div>
        )
    }
  }
  return (
        <div>
          <p>404</p>
        </div>
      )
}