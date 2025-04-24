const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge font-clash">
        <p>{subtitle}</p>
      </div>
      <div className="text-center text-3xl font-semibold md:text-5xl">
        {title}
      </div>
    </div>
  );
};

export default SectionHeader;
