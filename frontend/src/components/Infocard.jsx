import { Card, CardContent, Typography, Button } from "@mui/material";

function InfoCard({ title, text, extra, button }) {
  return (
    <Card className="info-card">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body1" className="card-text">
          {text}
        </Typography>

        {extra && (
          <Typography variant="body2" className="card-extra">
            {extra}
          </Typography>
        )}

        {button && (
          <Button variant="contained" sx={{ mt: 2 }}>
            {button}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default InfoCard;