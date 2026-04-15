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
  const catalogues= data["catalogues"];
    return (
    <div>
        <div className="all_artists">
                  {catalogues.map((catalogues: any) => (
                    <div key={catalogues.title}>
                      <a href={`/catalogues/${catalogues.slug}`}>
                        <Image 
                          src={catalogues.image_name}
                          alt="catalouge image"
                          width={200}
                          height={100}
                        />
                        <h2>{catalogues.title}</h2>
                        <h3>{catalogues.year}</h3>
                      </a>
                    </div>
                  ))}
                </div>
    </div>
  )
}