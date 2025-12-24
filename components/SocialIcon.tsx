import Image from "next/image";

const SocialIcon = ({ icon, alt, href }: { icon: string; alt: string; href: string }) => {
  return (
    <a href={href}>
      {/* <img className="w-6 h-6" src={icon} alt={alt} /> */}
      <Image src={icon} alt={alt} width={27} height={27} />
    </a>
  );
};

export default SocialIcon;
