import Badge from 'react-bootstrap/Badge'

interface DogRace {
	race: string
  }

const myBadge: React.FC<DogRace> = ( dog ) => {
	let badgeColor = "success"

	if (dog.race === "Mestizo") {
		badgeColor = "primary"
	} else if (dog.race === "Golden Retriever") {
		badgeColor = "secondary"
	} else if (dog.race === "Pastor alemán") {
		badgeColor = "danger"
	} else if (dog.race === "Chihuahua") {
		badgeColor = "warning"
	} else if (dog.race === "Dalmata") {
		badgeColor = "dark"
	}

	return (
		<Badge pill bg={badgeColor}>{dog.race}</Badge>
	)
}

export default myBadge