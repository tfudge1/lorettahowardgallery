import Image from "next/image";

const Footer = () => {
  return (
        <div className="footer">
            <div>
                <p>Loretta Howard Gallery is committed to making its website accessible to all people, including individuals with disabilities. We are in the process of making sure our website, lorettahoward.com complies with best practices and standards as defined by Section 508 of the U.S. Rehabilitation Act and Level AA of the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines 2.0. </p>
                <p>If you would like additional assistance or have accessibility concerns, please contact gallery@lorettahoward.com</p>
                <p>Email: gallery@lorettahoward.com</p>
            </div>
            <a href="https://www.facebook.com/Lorettahowardgallery/">
                <Image 
                    src="/file.svg"
                    alt="facebook link"
                    width={50}
                    height={50}
                />
            </a>
            <a href="https://www.instagram.com/lorettahowardgallery/">
                <Image 
                    src="/file.svg"
                    alt="instagram link"
                    width={50}
                    height={50}
                />
            </a>
      </div>
  );
};

export default Footer;