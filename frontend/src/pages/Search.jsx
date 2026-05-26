import { Box, Typography, TextField } from "@mui/material";
import { useAppContext } from "../context/AppContext";
import InfoCard from "../components/InfoCard";

function Search() {
  const { posts, clubs, news, search, setSearch } = useAppContext();

  const filteredPosts = posts.filter((p) =>
    p.title?.toLowerCase().includes(search.toLowerCase())
  );

  const filteredClubs = clubs.filter((c) =>
    c.name?.toLowerCase().includes(search.toLowerCase())
  );

  const filteredNews = news.filter((n) =>
    n.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h4" className="page-title">Search</Typography>

      <Box className="form-card">
        <TextField
          fullWidth
          label="Search posts, clubs, news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      <Typography variant="h5" className="page-title">Posts</Typography>
      {filteredPosts.map((post) => (
        <InfoCard key={post.ID} title={post.title} text={post.content} />
      ))}

      <Typography variant="h5" className="page-title">Clubs</Typography>
      {filteredClubs.map((club) => (
        <InfoCard key={club.ID} title={club.name} text={club.description} />
      ))}

      <Typography variant="h5" className="page-title">News</Typography>
      {filteredNews.map((item) => (
        <InfoCard key={item.ID} title={item.title} text={item.content} />
      ))}
    </Box>
  );
}

export default Search;