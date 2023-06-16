// Write your code here
import './index.css'

const DestinationItem = props => {
  const {DestinationDetails} = props
  const {name, imageUrl} = DestinationDetails

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt={name} />
      <p className="description">{name}</p>
    </li>
  )
}
export default DestinationItem
