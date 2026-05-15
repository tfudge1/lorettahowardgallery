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
  const exhibitions = data["exhibitions"];
  const featured_exhibitions= data["featured-exhibitions"];
  let display_exhibitions = (<p></p>);
    for (let x = 0; x < featured_exhibitions.length; x++){ // iterate through features exhibitions slugs
      let _featured_exhibitions = featured_exhibitions[x].slug;
        for (let i = 0; i < exhibitions.length; i++){ // iterate through all exhibitons to find slug
          let _full_exhibition = exhibitions[i];
            if (_featured_exhibitions == _full_exhibition.slug){
              display_exhibitions = (<div key={_full_exhibition.slug}>
              <Image 
              src={_full_exhibition.art[0].url}
              alt="featured image"
              width={200}
              height={100}
              />
              <h2>{_full_exhibition.title}</h2>
              <p>{_full_exhibition.description}</p>
              <p> <a href={`/exhibitions/${_full_exhibition.slug}`}>View Exhibition</a></p>
              {display_exhibitions}
              </div>
              )
            }
        }
    }

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
          {display_exhibitions}
        </div>

      </main>
    </div>
  );
}
