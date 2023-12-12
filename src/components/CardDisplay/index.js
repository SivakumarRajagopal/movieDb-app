import './index.css'
import EachCard from '../EachCard'

const CardDisplay = props => {
  const {formattedData} = props
  return (
    <ul className="card-list">
      {formattedData.map(eachItem => (
        <EachCard key={eachItem.id} eachItemDetails={eachItem} />
      ))}
    </ul>
  )
}

export default CardDisplay
