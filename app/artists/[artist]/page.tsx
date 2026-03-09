'use client'

import content from "../../../public/content.json";
import { NextRequest } from 'next/server';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import ArtistNav from "./artistnav";

export default function Page() {
const pathname = usePathname().slice(9);
  const res = content
  const _res = res.artists
  let artist;
  for (let index = 0; index < _res.length; index++) {
    if (_res[index].slug == pathname) {
        artist = _res[index];
    }
  }

  return(
    <div>
        <ArtistNav name={artist?.name} />
    </div>
  )
}