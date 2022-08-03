import SCPCards from "./HomeCards";
function Home()
{    
  return(
    <div className="container">
        <div className="card_display">
            <h1>Welcome to the SCP Foundation</h1>
            <h2>All items listed here are <br></br> TOP SECRET</h2>
            <div className="card_area">
            {SCPCards[0]}
            {SCPCards[1]}
            {SCPCards[2]}
            {SCPCards[3]}
            {SCPCards[4]}
            </div>       
        </div>
    </div>
  )
      
}

export default Home;