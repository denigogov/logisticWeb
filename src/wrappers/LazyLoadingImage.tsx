interface LazyLoadingImageProps {
  src: string;
  alt: string;
}

const LazyLoadingImage: React.FC<LazyLoadingImageProps> = ({ src, alt }) => {
  return <img loading="lazy" src={src} alt={alt} />;
};

export default LazyLoadingImage;
