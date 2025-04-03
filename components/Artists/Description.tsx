type Props = {
  name: string;
  paragraph: string[];
};

const Description: React.FC<Props> = ({ name, paragraph }) => {
  return (
    <section className="container mx-auto px-4 lg:px-0 py-24">
      <h3 className="text-4xl mb-10 text-primary uppercase font-bold font-vietnam-pro">
        {name}
      </h3>
      <div className="max-w-[750px] lg:text-center mx-auto flex flex-col gap-10 lg:gap-16">
        {paragraph.map((elem, i) => {
          return (
            <p key={i} className="font-vietnam-pro uppercase">
              {elem}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default Description;
