import Tags from "./Tags"

interface DogData {
  name: string
  src: string
  description: string
  race: string
}

interface CardProps {
  data: DogData[];
}

const Card: React.FC<CardProps> = ({ data }) => {
    return (
        <div className='dog-cards-container'>
          {data.map((perrito) => (
            <div key={perrito.name} className="dog-card">
              <img src={perrito.src} alt={perrito.name} />
              <h3>{perrito.name}</h3>
              <p>{perrito.description}</p>
              <Tags race={perrito.race} ></Tags>
            </div>
          ))}
        </div>
    );
}

export default Card;