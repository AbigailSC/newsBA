import { socialMedia } from '@utils';

const SocialMedia = () => {
  const applyStyles = (socialMedia) => {
    return socialMedia.map((media, index) => (
      <a
        key={index}
        href={media.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex gap-2 items-center justify-center h-10 text-white ${media.color} hover:opacity-80 transition-opacity`}
      >
        {media.icon}
        <span className="hidden md:block">{media.name}</span>
      </a>
    ));
  };

  return (
    <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(47px,1fr))] grid-auto-columns-[minmax(47px,1fr)] grid-auto-flow-column overflow-x-auto overflow-y-hidden grid-column-1 grid-column-gap-0.5rem mb-8">
      {applyStyles(socialMedia)}
    </div>
  );
};

export default SocialMedia;
