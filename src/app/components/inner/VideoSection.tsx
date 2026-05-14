type VideoSectionProps = {
  image: string;
  imageAlt?: string;
};

export default function VideoSection({ image, imageAlt = "Video preview" }: VideoSectionProps) {
  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-overlay"></div>
        <img src={image} alt={imageAlt} className="video-bg" width={1600} height={900} loading="lazy" />
      </div>
    </section>
  );
}
