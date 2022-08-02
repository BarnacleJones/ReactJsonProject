import Content from "../scp.json";

const SCPCards = Content.map(
  (file) => {return(
    <div key={file.Item} className="card bg-secondary mb-3" id="cardImage">  
  <img src={file.Image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{file.Item}</h5>   
    <h5 className="card-text">TOP SECRET</h5>        
  </div>
</div>
  )
  });
  

  export default SCPCards;