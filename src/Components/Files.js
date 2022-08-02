import Content from "../scp.json";

const SCPFiles = Content.map(
  (file) => {return(
    <div key={file.Item} className="container">
      <h1>{file.Item}</h1>    
      <br />
      <h3>Special Containment Procedures:</h3>  
      <p>{file.SpecialContainmentProcedures}</p>
      <br />
      <h3>Description:</h3>
      <p>{file.Description}</p>
      <h3>Additional information:</h3>
      <p>{file.AdditionalInformation}</p>
      <p className="text-center"><img src={file.Image} style={{maxWidth:"250px"}} alt="the monster" className="text-center border rounded"/></p>
    </div>
  )
  });
  

  export default SCPFiles;