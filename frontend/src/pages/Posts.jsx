import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import { useAppContext } from "../context/AppContext";
import InfoCard from "../components/InfoCard";

function Posts() {
  const { posts, loading, error } = useAppContext();

  return (
    <Box>
      <Typography variant="h4" className="page-title">Posts Feed</Typography>

      {loading && <CircularProgress />}
      {error && <Alert severity="warning">{error}</Alert>}

      {posts.map((post) => (
        <InfoCard
          key={post.ID}
          title={post.title}
          text={post.content}
          extra="👍 Reactions: demo | 💬 Comments: demo"
        />
      ))}
    </Box>
  );
}

export default Posts;