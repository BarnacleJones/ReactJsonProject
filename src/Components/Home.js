import SCPCards from "./HomeCards";
function Home()
{    
  return(
    <div className="card_display">
        <h1>Please use navigation above to view the SCP files on record</h1>
        <div className="card_area">
        {SCPCards[0]}
        {SCPCards[1]}
        {SCPCards[2]}
        {SCPCards[3]}
        {SCPCards[4]}
        </div>
       
    </div>
  )
      
}

export default Home;