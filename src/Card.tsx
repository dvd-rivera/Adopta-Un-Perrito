
interface DogData {
  name: string
  src: string
  description: string
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
            </div>
          ))}
        </div>
    );
}

export default Card;
