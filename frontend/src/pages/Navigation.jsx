import { Box, Typography } from "@mui/material";
import InfoCard from "../components/InfoCard";

function Navigation() {
  return (
    <Box>
      <Typography variant="h4" className="page-title">Student Navigation</Typography>

      <InfoCard title="Clubs" text="Students can find available clubs and activities." />
      <InfoCard title="News" text="College announcements and deadlines are shown in News." />
      <InfoCard title="Contacts" text="Responsible teachers and club contacts are displayed in club cards." />
    </Box>
  );
}

export default Navigation;