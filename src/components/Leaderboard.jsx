import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Leaderboard = () => {
  const [topCoaches, setTopCoaches] = useState([])

  useEffect(() => {
    // Fetch the top coaches from the server and update the state
    // Example data structure: [{ name: "Coach A", score: 100 }, { name: "Coach B", score: 90 }]
    const fetchedCoaches = [
        { name: "Tiger Woods       ", score: "12", avatar: "https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" },
  { name: "Phil Mickelson    ", score: "11", avatar: "https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" },
  { name: "Rory McIlroy      ", score: "10", avatar: "https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" },
  { name: "Jordan Spieth     ", score: "9", avatar: "https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" },
  { name: "Justin Thomas    ", score: "8", avatar: "https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" },
  { name: "Dustin Johnson   ", score: "7", avatar: "https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" },
  { name: "Jon Rahmmm        ", score: "5", avatar: "https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" },
  { name: "Collin Morikawa  ", score: "4", avatar: "https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" },
  { name: "Xander Scuffele", score: "3", avatar: "https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" },
 
    ];
    setTopCoaches(fetchedCoaches)
  }, [])

  return (
    
   
    <div className="leaderboard">
     
      <h2 className="leaderboard-title">Top Coaches</h2>
      
      <ul className="leaderboard-list">
        {topCoaches.map((coach, index) => (
          <li className="leaderboard-item" key={index}>
            <span className="leaderboard-rank">{index + 1}</span>
            <img className="leaderboard-avatar" src={coach.avatar} alt={`${coach.name} avatar`} />
            <span className="leaderboard-name">{coach.name}</span>
            <span className="leaderboard-score">{coach.score}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
