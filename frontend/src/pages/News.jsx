import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import { useAppContext } from "../context/AppContext";
import InfoCard from "../components/InfoCard";

function News() {
  const { news, loading, error } = useAppContext();

  return (
    <Box>
      <Typography variant="h4" className="page-title">College News</Typography>

      {loading && <CircularProgress />}
      {error && <Alert severity="warning">{error}</Alert>}

      {news.map((item) => (
        <InfoCard key={item.ID} title={item.title} text={item.content} />
      ))}
    </Box>
  );
}

export default News;