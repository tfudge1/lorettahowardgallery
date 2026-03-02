import Image from "next/image";
import Link from "next/link";
import content from "../public/content.json";

async function getData() {
  const res = content
  return res
}

export default async function Home() {
  const data = await getData();
  const featured_art= data["featured_art"];
  const featured_exhibitions= data["featured-exhibitions"];

  return (
    <div>
        <main>
        <div className="featured-art">
          <Image 
            src={featured_art[0]["image_name"]}
            alt="featured image"
            width={200}
            height={100}
          />
          <h2>{featured_art[0].artist}</h2>
          <p>{featured_art[0].title}</p>
          <p>{featured_art[0].medium}</p>
          <p>{featured_art[0].dimentions}</p>
          <p>{featured_art[0].description}</p>
        </div>{/*  featured-art */}

        <div className="featured-exhibition">
          {featured_exhibitions.map((exhibitions: any) => (
            <div key={exhibitions.slug}>
              <Image 
              src={exhibitions.image_name}
              alt="featured image"
              width={200}
              height={100}
              />
              <h2>{exhibitions.title}</h2>
              <p>{exhibitions.description}</p>
              <p> <a href={exhibitions.slug}>View Exhibition</a></p>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
