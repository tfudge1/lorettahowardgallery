import content from "../../public/content.json";
import Image from "next/image";

async function getData() {
  const res = content
  return res
}

export default async function Page({
  // params,
  // searchParams,
}: {
  // params: Promise<{ slug: string }>
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  
}) {
  const data = await getData();
  const artists= data["artists"];
    return (
    <div>
        <div className="all_artists">
                  {artists.map((artist: any) => (
                    <div key={artist.name}>
                      <a href={`/artists/${artist.slug}`}>
                        <Image 
                        src={artist.image_name}
                        alt="featured image"
                        width={200}
                        height={100}
                        />
                        <h2>{artist.name}</h2>
                      </a>
                    </div>
                  ))}
                </div>
    </div>
  )
}