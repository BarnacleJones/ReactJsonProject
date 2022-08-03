import Content from "../scp.json";
import { Link } from "react-router-dom";

const SCPCards = Content.map(
  (file) => {return(
    <div key={file.Item} className="card bg-secondary mb-3" id="cardImage">  
  <img src={file.Image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{file.Item}</h5> 
    <button id="home-buttons" className="btn btn-secondary"><Link to={file.Item}>ENTER</Link></button>
  </div>
</div>
  )
  });
  

  export default SCPCards;