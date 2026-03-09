import Image from "next/image";

export default function Page({
  // params,
  // searchParams,
}: {
  // params: Promise<{ slug: string }>
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    return (
    <div>
        <Image 
          src="/About1.jpeg"
          alt="featured image"
          width={200}
          height={100}
        />
        <p>Loretta Howard Gallery specializes in classic Post War American art with an emphasis on artists who came to prominence in the 1950s and 1960s. Gallery artists are associated with major movements of the period including Abstract Expressionism, Op Art, Minimalism and Color Field. In addition, the gallery represents a select group of mid-career artists. The gallery presents exhibitions and advises private and corporate collections. 

Loretta Howard, currently Owner of Loretta Howard Gallery, and Executive Director of On This Spot NYC: Stories of Pioneering Women Artist was a longtime Director of the Andre Emmerich Gallery. Loretta completed her MA degree and continued on in the PhD program in Art History at New York University’s Institute of Fine Arts where she is a member of the Connoisseurs Circle Council. She graduated from Amherst College in 1983. She serves on the Board of the Mead Art Museum at Amherst College as Vice Chairman. In the 1980's she was a founding member of New York Cares.</p>
        <Image 
          src="/About2.jpeg"
          alt="featured image"
          width={200}
          height={100}
        />
        <p>Anthony Torrano, Gallery, and Media Manager. Prior to working at Loretta Howard Gallery, Anthony was the director of the Arts & Crafts Cooperative, Inc. in Berkeley, CA. He is a graduate of the University of California, Santa Cruz with a Bachelors degree in Business Management and Art. Originally from San Francisco, Anthony maintains his painting practice and is a current Hunter MFA Candidate.

For further information, please contact us.</p>
    </div>
  )
}