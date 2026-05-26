import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import InfoCard from "../components/InfoCard";

function Friends() {
  const { friends, addFriend } = useAppContext();
  const [name, setName] = useState("");

  return (
    <Box>
      <Typography variant="h4" className="page-title">Friends</Typography>

      <Box className="form-card">
        <TextField
          fullWidth
          label="Friend name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button
          variant="contained"
          onClick={() => {
            if (!name.trim()) return;
            addFriend(name);
            setName("");
          }}
        >
          Send Request
        </Button>
      </Box>

      {friends.map((friend) => (
        <InfoCard
          key={friend.id}
          title={friend.name}
          text={`Status: ${friend.status}`}
        />
      ))}
    </Box>
  );
}

export default Friends;