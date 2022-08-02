import { Link } from "react-router-dom";

function Nav()
{
    return(
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
        <div className="container">
            <h2 className="navbar-brand"><img src="../images/scp_logo.gif" alt="SCP logo" width={70} /></h2> 
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>            
            <div className="collapse navbar-collapse" id="n_bar">
                <ul className="navbar-nav nav-fill w-100">                
                    <li className="nav-item active "><Link to="/"  className="nav-link">Home</Link></li>
                    <li className="nav-item "><Link to="/SCP002" className="nav-link">SCP-002</Link></li>
                    <li className="nav-item"><Link to="/SCP003" className="nav-link">SCP-003</Link></li>
                    <li className="nav-item"><Link to="/SCP004" className="nav-link">SCP-004</Link></li>
                    <li className="nav-item"><Link to="/SCP005" className="nav-link">SCP-005</Link></li>
                    <li className="nav-item"><Link to="/SCP006" className="nav-link">SCP-006</Link></li>
                </ul> 
            </div>  
        </div>   
        </nav>)
}

export default Nav;