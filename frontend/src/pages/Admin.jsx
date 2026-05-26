import { Box, Typography } from "@mui/material";
import InfoCard from "../components/InfoCard";

function Admin() {
  return (
    <Box>
      <Typography variant="h4" className="page-title">Admin Panel</Typography>

      <InfoCard title="Posts Moderation" text="Admin can manage and moderate student posts through REST API." />
      <InfoCard title="News Management" text="Admin can create, update and delete college news." />
      <InfoCard title="Clubs Management" text="Admin can manage clubs, schedules and contacts." />
    </Box>
  );
}

export default Admin;