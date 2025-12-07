import React from "react";

const SocialIcon = ({ icon, alt, href }: { icon: string; alt: string; href: string }) => {
  return (
    <a href={href}>
      <img className="w-6 h-6" src={icon} alt={alt} />
    </a>
  );
};

export default SocialIcon;
