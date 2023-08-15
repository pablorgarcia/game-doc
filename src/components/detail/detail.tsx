import './detail.css'

const detailParams = { /* arguments from the father */ }

function Detail({detailParams}) {
  return (
    <div>
        <img src={image}></img>
        <h1>{name}</h1>
        <p>{description}</p>
    </div>
  )
}

export default Detail