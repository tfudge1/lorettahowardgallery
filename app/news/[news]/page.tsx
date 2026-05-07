'use client'

import content from "../../../public/content.json";
import { NextRequest } from 'next/server';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import Image from "next/image";

export default function Page() {
const pathname = usePathname().slice(6);
  const res = content
  const _res = res.news
  let news;
  for (let index = 0; index < _res.length; index++) {
    if (_res[index].slug == pathname) {
        news = _res[index];
    }
  }
 let display_content;
  if(news != undefined){

    display_content = (
        <div>
        <h2>{news.title}</h2>
        <p>{news.content}</p>

        <Image 
            src={news.image_name}
            alt="featured image"
            width={200}
            height={100}
            />
            </div>
    );
  }

  return(
    display_content
  )
}