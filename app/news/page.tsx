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
  const news= data["news"];
    return (
    <div>
        <div className="all_items">
                  {news.map((news: any) => (
                    <div key={news.title} className="individual_items">
                      <a href={`/news/${news.slug}`}>
                        <Image 
                        src={news.image_name}
                        alt="featured image"
                        width={200}
                        height={100}
                        />
                        <h2>{news.title}</h2>
                        <h4>{news.content}</h4>
                        {/* trim the content here so that it does not fill the entire page with a long article */}
                      </a>
                    </div>
                  ))}
                </div>
    </div>
  )
}