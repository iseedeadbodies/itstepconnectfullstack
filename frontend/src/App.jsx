import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:8080";

function App() {
  const [page, setPage] = useState("posts");
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState([
    {
      ID: 1,
      title: "Student Life",
      content: "Welcome to ITSTEP Connect",
    },
  ]);

  const [clubs, setClubs] = useState([
    {
      ID: 1,
      name: "Programming Club",
      description: "Club for students who learn coding",
      schedule: "Monday 16:00",
      contact: "teacher@itstep.kz",
    },
  ]);

  const [news, setNews] = useState([
    {
      ID: 1,
      title: "Exam Week",
      content: "Students should prepare projects",
    },
  ]);

  const [search, setSearch] = useState("");

  const loadData = async () => {
    try {
      setLoading(true);

      const postsRes = await axios.get(`${API_URL}/posts`);
      const clubsRes = await axios.get(`${API_URL}/clubs`);
      const newsRes = await axios.get(`${API_URL}/news`);

      if (postsRes.data.length > 0) setPosts(postsRes.data);
      if (clubsRes.data.length > 0) setClubs(clubsRes.data);
      if (newsRes.data.length > 0) setNews(newsRes.data);

      setLoading(false);
    } catch (error) {
      console.log("API error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>ITSTEP Connect</h1>

      <nav>
        <button onClick={() => setPage("profile")}>Profile</button>
        <button onClick={() => setPage("posts")}>Posts</button>
        <button onClick={() => setPage("clubs")}>Clubs</button>
        <button onClick={() => setPage("news")}>News</button>
        <button onClick={() => setPage("search")}>Search</button>
        <button onClick={() => setPage("navigation")}>Navigation</button>
        <button onClick={() => setPage("admin")}>Admin</button>
      </nav>

      {loading && (
        <div className="card">
          <h2>Loading...</h2>
        </div>
      )}

      {page === "profile" && (
        <div className="card">
          <h2>Student Profile</h2>
          <p><b>Name:</b> Edil Student</p>
          <p><b>Group:</b> ITSTEP Group</p>
          <p><b>Direction:</b> Web Development</p>
          <p><b>About:</b> Student interested in backend, frontend and databases.</p>
          <p><b>Interests:</b> Programming, clubs, college activities</p>
        </div>
      )}

      {page === "posts" && (
        <div>
          <h2>Posts Feed</h2>

          {posts.map((post) => (
            <div className="card" key={post.ID}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>👍 Reactions: demo</p>
              <p>💬 Comments: demo section</p>
            </div>
          ))}
        </div>
      )}

      {page === "clubs" && (
        <div>
          <h2>Clubs</h2>

          {clubs.map((club) => (
            <div className="card" key={club.ID}>
              <h3>{club.name}</h3>
              <p>{club.description}</p>
              <p><b>Schedule:</b> {club.schedule}</p>
              <p><b>Contact:</b> {club.contact}</p>
              <button>Join Club</button>
            </div>
          ))}
        </div>
      )}

      {page === "news" && (
        <div>
          <h2>College News</h2>

          {news.map((item) => (
            <div className="card" key={item.ID}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      )}

      {page === "search" && (
        <div>
          <h2>Search</h2>

          <div className="card">
            <input
              placeholder="Search posts, clubs, news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <h3>Posts</h3>
          {filteredPosts.map((post) => (
            <div className="card" key={post.ID}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}

          <h3>Clubs</h3>
          {filteredClubs.map((club) => (
            <div className="card" key={club.ID}>
              <h3>{club.name}</h3>
              <p>{club.description}</p>
            </div>
          ))}

          <h3>News</h3>
          {filteredNews.map((item) => (
            <div className="card" key={item.ID}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      )}

      {page === "navigation" && (
        <div>
          <h2>Student Navigation</h2>

          <div className="card">
            <h3>Useful Information</h3>
            <p>Clubs are available in the Clubs section.</p>
            <p>News and announcements are available in the News section.</p>
            <p>Student posts are available in the Posts section.</p>
            <p>Club contacts are shown inside club cards.</p>
          </div>
        </div>
      )}

      {page === "admin" && (
        <div>
          <h2>Admin Panel</h2>

          <div className="card">
            <p>Admin can manage posts, clubs and news through REST API.</p>
            <p>Protected backend routes use JWT middleware.</p>
            <p>Backend API was tested through Thunder Client.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;