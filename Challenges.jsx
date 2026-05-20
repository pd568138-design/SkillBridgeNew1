import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function Challenges(){

  const [task,setTask] = useState("");

  const [difficulty,setDifficulty] =
    useState("");

  const [tasks,setTasks] = useState(() => {

    const saved =
      localStorage.getItem("tasks");

    return saved
      ? JSON.parse(saved)
      : [];

  });

  const [coins,setCoins] = useState(() => {

    return Number(
      localStorage.getItem("coins")
    ) || 0;

  });

  useEffect(()=>{

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );

  },[tasks]);

  useEffect(()=>{

    localStorage.setItem(
      "coins",
      coins
    );

  },[coins]);

  const addTask = () => {

    if(task==="" || difficulty===""){

      alert("Fill all fields");

      return;

    }

    const newTask = {

      id:Date.now(),
      text:task,
      difficulty,
      completed:false

    };

    setTasks([...tasks,newTask]);

    setTask("");
    setDifficulty("");

  };

  const completeTask = (id) => {

    const updatedTasks =
      tasks.map((item)=>{

        if(item.id===id){

          return{
            ...item,
            completed:true
          };

        }

        return item;

      });

    setTasks(updatedTasks);

    setCoins(coins + 10);

  };

  const deleteTask = (id) => {

    const updated =
      tasks.filter(
        (item)=>item.id !== id
      );

    setTasks(updated);

  };

  return(

    <div className="main-container">

      <Sidebar />

      <div className="content">

        <div className="top-section">

          <h1>Weekly Challenges 🚀</h1>

          <p>
            Complete challenges and improve skills.
          </p>

        </div>

        <div className="challenge-form">

          <input
            type="text"
            placeholder="Enter challenge"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
          />

          <select
            value={difficulty}
            onChange={(e)=>
              setDifficulty(e.target.value)
            }
          >

            <option value="">
              Difficulty
            </option>

            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>

          </select>

          <button onClick={addTask}>
            Add Challenge
          </button>

        </div>

        <div className="challenge-grid">

          {
            tasks.map((item)=>(

              <div
                className="challenge-card"
                key={item.id}
              >

                <div className="top-row">

                  <div className="badge">
                    {item.difficulty}
                  </div>

                  <div className="coin-box">
                    🪙 +10
                  </div>

                </div>

                <h3>{item.text}</h3>

                <p className="challenge-desc">

                  Complete this challenge to
                  improve your technical skills.

                </p>

                <div className="status-box">

                  {
                    item.completed
                    ? "✅ Completed"
                    : "⏳ Pending"
                  }

                </div>

                <div className="btn-group">

                  <button
                    onClick={()=>
                      completeTask(item.id)
                    }
                  >
                    Complete
                  </button>

                  <button
                    className="delete-btn"
                    onClick={()=>
                      deleteTask(item.id)
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div>

  );
}

export default Challenges;