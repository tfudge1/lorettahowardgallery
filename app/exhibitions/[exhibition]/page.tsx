'use client'

import content from "../../../public/content.json";
import { NextRequest } from 'next/server';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import ExhibitionNav from "./exhibitionnav";

export default function Page() {
const pathname = usePathname().slice(13);
  const res = content
  const _res = res.exhibitions
  let exhibition;
  for (let index = 0; index < _res.length; index++) {
    if (_res[index].slug == pathname) {
        exhibition = _res[index];
    }
  }

  return(
    <div>
        <ExhibitionNav title={exhibition?.title} />
    </div>
  )
}