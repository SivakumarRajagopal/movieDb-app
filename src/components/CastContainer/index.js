import './index.css'
import CastCard from '../CastCard'

const CastContainer = props => {
  const {CastData} = props
  console.log(CastData)

  return (
    <ul className="cast-container">
      {CastData.map(eachItem => (
        <CastCard key={eachItem.id} castDetails={eachItem} />
      ))}
    </ul>
  )
}

export default CastContainer
