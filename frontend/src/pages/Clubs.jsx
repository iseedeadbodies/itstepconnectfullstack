import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import { useAppContext } from "../context/AppContext";
import InfoCard from "../components/InfoCard";

function Clubs() {
  const { clubs, loading, error } = useAppContext();

  return (
    <Box>
      <Typography variant="h4" className="page-title">Clubs</Typography>

      {loading && <CircularProgress />}
      {error && <Alert severity="warning">{error}</Alert>}

      {clubs.map((club) => (
        <InfoCard
          key={club.ID}
          title={club.name}
          text={club.description}
          extra={`Schedule: ${club.schedule} | Contact: ${club.contact}`}
          button="Join Club"
        />
      ))}
    </Box>
  );
}

export default Clubs;