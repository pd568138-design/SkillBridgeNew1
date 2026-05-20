import { Link } from "react-router-dom";

function Sidebar(){

  return(

    <div className="sidebar">

      <h2>SkillBridge</h2>

      <Link to="/dashboard">
        Dashboard
      </Link>

      <Link to="/challenges">
        Challenges
      </Link>
      <Link to="/profile">
  Profile Setup
</Link>
      <Link to="/portfolio">
        Portfolio
      </Link>

    </div>

  );
}

export default Sidebar;