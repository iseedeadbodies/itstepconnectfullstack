import { Box, Typography } from "@mui/material";
import { useAppContext } from "../context/AppContext";
import InfoCard from "../components/InfoCard";

function Profile() {
  const { user } = useAppContext();

  return (
    <Box>
      <Typography variant="h4" className="page-title">Profile</Typography>

      <InfoCard
        title={`${user.firstName} ${user.lastName}`}
        text={`Email: ${user.email}`}
        extra={`Group: ${user.group} | Direction: ${user.direction} | Role: ${user.role}`}
      />

      <InfoCard title="About me" text={user.bio} />
    </Box>
  );
}

export default Profile;