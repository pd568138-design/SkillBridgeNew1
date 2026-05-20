import Sidebar from "../components/Sidebar";

function Dashboard(){

  const profile =
    JSON.parse(
      localStorage.getItem("profileData")
    ) || {};

  const coins =
    localStorage.getItem("coins") || 0;

  const tasks =
    JSON.parse(
      localStorage.getItem("tasks")
    ) || [];

  return(

    <div className="main-container">

      <Sidebar />

      <div className="content">

        <div className="dashboard-banner">

          <div>

            <h1>
              Hello, {profile.name || "Student"} 👋
            </h1>

            <p>
              Welcome to your SkillBridge dashboard.
            </p>

          </div>

          <div className="dashboard-coin">

            🪙 {coins}

          </div>

        </div>

        <div className="stats-row">

          <div className="mini-card">
            <h3>Total Challenges</h3>
            <p>{tasks.length}</p>
          </div>

          <div className="mini-card">
            <h3>Completed</h3>
            <p>
              {
                tasks.filter(
                  (item)=>item.completed
                ).length
              }
            </p>
          </div>

          <div className="mini-card">
            <h3>Hackathons</h3>
            <p>3</p>
          </div>

          <div className="mini-card">
            <h3>Skill Rank</h3>
            <p>Gold</p>
          </div>

        </div>

        <div className="dashboard-grid">

          <div className="dashboard-card-large">

            <h2>🔥 Weekly Goal</h2>

            <p>
              Complete 5 React challenges
              this week.
            </p>

            <div className="progress-bar">

              <div className="progress-fill">

              </div>

            </div>

          </div>

          <div className="dashboard-card-large">

            <h2>🚀 Top Skills</h2>

            <div className="skills">

              <span>React</span>
              <span>JavaScript</span>
              <span>DBMS</span>
              <span>DSA</span>

            </div>

          </div>

        </div>

        <div className="activity-section">

          <h2>Recent Activities</h2>

          <ul>

            <li>🪙 Earned 10 Coins</li>
            <li>🚀 Completed Weekly Challenge</li>
            <li>🏆 Portfolio Updated</li>

          </ul>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;