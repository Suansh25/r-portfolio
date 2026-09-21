function ImageGallery({ images }) {
  return (
    <div className="Images-scroll">
      {images.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

export default ImageGallery;