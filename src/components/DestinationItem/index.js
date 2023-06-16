// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userDestinationDetails} = props
  const {name, imageUrl} = userDestinationDetails

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt={name} />
      <p className="description">{name}</p>
    </li>
  )
}
export default DestinationItem
