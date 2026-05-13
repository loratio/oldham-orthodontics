type VideoSectionProps = {
  image: string;
  imageAlt?: string;
};

export default function VideoSection({ image, imageAlt = "Video preview" }: VideoSectionProps) {
  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-overlay"></div>
        <img src={image} alt={imageAlt} className="video-bg" />
      </div>
    </section>
  );
}
