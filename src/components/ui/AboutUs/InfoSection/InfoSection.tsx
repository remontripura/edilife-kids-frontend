import MainContainer from "@/components/shared/Container/MainContainer";
import { AboutData } from "@/components/store";
import InfoCard from "./InfoCard";

const InfoSection = () => {
  return (
    <div className="py-6 bg-gray-50 px-3">
      <MainContainer>
        <section className="flex flex-col md:flex-row justify-center md:justify-between ">
          {AboutData.map((card) => (
            <InfoCard
              key={card.id}
              title={card.title}
              description={card.description}
              link={card.link}
              className={card.bgColor}
              icons={card.icons}
            />
          ))}
        </section>
      </MainContainer>
    </div>
  );
};

export default InfoSection;
