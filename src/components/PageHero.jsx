const PageHero = ({ title, subtitle, image }) => {
  return (
    <section
      className="relative h-64 md:h-80 flex items-center justify-center bg-primary bg-cover bg-center"
      style={image ? { backgroundImage: `url(${image})` } : {}}
    >
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center text-primary-foreground px-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-lg opacity-80 max-w-xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;