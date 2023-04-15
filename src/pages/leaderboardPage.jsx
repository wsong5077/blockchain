import { Leaderboard } from "../components/Leaderboard";
import { Link } from 'react-router-dom';

export const LeaderboardPage = () => {
  return (
    <div className="leaderboard-page">
      <Link to="/" className="back-to-home">
          Back to Home
      </Link>
      <Leaderboard />
    </div>
  );
};
