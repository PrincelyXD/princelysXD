import { features } from "../../resources/Constants";

const FeatureCards = () => {
  return (
    <div className="padding-x-lg my-10 md:my-20 w-full">
      <div className="grid-3-cols mx-auto">
        {features.map(({ imgPath, title, description }, idx) => (
          <div
            key={idx}
            className="card-border flex flex-col gap-4 rounded-xl p-8"
          >
            <div className="flex size-14 items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>

            <p className="text-white-50 text-lg"> {description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
