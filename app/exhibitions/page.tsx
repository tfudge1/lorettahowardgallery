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
  const exhibitions= data["exhibitions"];
    return (
    <div>
        <div className="all_items">
                  {exhibitions.map((exhibition: any) => (
                    <div key={exhibition.title} className="individual_items">
                      <a href={`/exhibitions/${exhibition.slug}`}>
                        <Image 
                        src={exhibition.art[0].url}
                        alt="featured image"
                        width={200}
                        height={100}
                        />
                        <h2>{exhibition.title}</h2>
                        <h4>{exhibition.date_range}</h4>
                      </a>
                    </div>
                  ))}
                </div>
    </div>
  )
}