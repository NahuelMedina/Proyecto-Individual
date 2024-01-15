import Card from "../Card/Card";

const Cards = ({ info }) => {
  console.log(info);
  return (
    <div className="cards-container">
      {info?.map((d) =>
        d.code ? (
          <Card
            key={d.id}
            name={d.name.forename}
            lastName={d.name.surname}
            teams={d.teams}
            image={d.image.url}
          />
        ) : (
          <Card
            key={d.id}
            name={d.name}
            lastName={d.lastName}
            image={d.image}
          />
        )
      )}
    </div>
  );
};

export default Cards;
