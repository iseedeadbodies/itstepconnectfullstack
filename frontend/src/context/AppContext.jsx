import { createContext, useContext, useEffect, useState } from "react";
import { API } from "../api/api";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState({
    firstName: "Edil",
    lastName: "Student",
    email: "edil@test.com",
    group: "ITSTEP Group",
    direction: "Web Development",
    bio: "I am interested in React, Go backend and PostgreSQL databases.",
    role: "student",
  });

  const [token, setToken] = useState(localStorage.getItem("token") || "");

const [posts, setPosts] = useState([
  {
    ID: 1,
    title: "Student Life",
    content: "Welcome to ITSTEP Connect",
  },
  {
    ID: 2,
    title: "Project Week",
    content: "Students are preparing fullstack projects",
  },
  {
    ID: 3,
    title: "React Frontend",
    content: "Frontend was improved with pages, MUI and Context API",
  },
  {
    ID: 4,
    title: "Hackathon",
    content: "Students participated in the college hackathon",
  },
  {
    ID: 5,
    title: "Backend Development",
    content: "Go and Gin are used for REST API development",
  },
  {
    ID: 6,
    title: "Frontend Update",
    content: "React Router and MUI were added to the project",
  },
  {
    ID: 7,
    title: "Database Systems",
    content: "PostgreSQL is used as the main SQL database",
  },
  {
    ID: 8,
    title: "Student Community",
    content: "Students can communicate through clubs and posts",
  },
  {
    ID: 9,
    title: "Project Defense",
    content: "Students are preparing for final defense",
  },
  {
    ID: 10,
    title: "UI Improvements",
    content: "Modern responsive design was added",
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
    {
      ID: 2,
      name: "Design Club",
      description: "Club for students interested in UI and UX",
      schedule: "Wednesday 15:00",
      contact: "design@itstep.kz",
    },
  ]);

  const [news, setNews] = useState([
    { ID: 1, title: "Exam Week", content: "Students should prepare their projects" },
    { ID: 2, title: "College Event", content: "ITSTEP will hold a student meetup" },
  ]);

  const [friends, setFriends] = useState([
    { id: 1, name: "Beknazar", status: "Friend" },
    { id: 2, name: "Aruzhan", status: "Request sent" },
  ]);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadData = async () => {
    setLoading(true);
    setError("");

    try {
      const postsRes = await API.get("/posts");
      if (postsRes.data && postsRes.data.length > 0) {
        setPosts(postsRes.data);
      }
    } catch {
      console.log("Posts API not available");
    }

    try {
      const clubsRes = await API.get("/clubs");
      if (clubsRes.data && clubsRes.data.length > 0) {
        setClubs(clubsRes.data);
      }
    } catch {
      console.log("Clubs API not available");
    }

    try {
      const newsRes = await API.get("/news");
      if (newsRes.data && newsRes.data.length > 0) {
        setNews(newsRes.data);
      }
    } catch {
      console.log("News API not available");
    }

    setLoading(false);
  };

  const login = async (email, password) => {
    try {
      const res = await API.post("/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      setUser((prev) => ({ ...prev, email }));
      return true;
    } catch {
      setError("Login failed. Backend may be unavailable.");
      return false;
    }
  };

  const register = async (data) => {
    try {
      await API.post("/register", {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
      });
      return true;
    } catch {
      setError("Register failed. Backend may be unavailable.");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  const addFriend = (name) => {
    setFriends((prev) => [
      ...prev,
      { id: Date.now(), name, status: "Request sent" },
    ]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        token,
        posts,
        clubs,
        news,
        friends,
        search,
        setSearch,
        loading,
        error,
        login,
        register,
        logout,
        addFriend,
        loadData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}