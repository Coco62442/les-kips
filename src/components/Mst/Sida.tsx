import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Collapse from '@mui/material/Collapse';

export default function Sida() {
  const [open, setOpen] = useState(false);
  return (
    <Card
      sx={{
        border: '1px solid rgba(211,211,211,0.6)', cursor: "pointer"
      }}
    >
      <CardHeader title="SIDA/VIH" onClick={() => setOpen(!open)} />
      <div style={{ backgroundColor: 'rgba(211,211,211,0.4)' }}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CardContent>
            <Container sx={{ lineHeight: 1 }}>
                Test.
            </Container>
          </CardContent>
        </Collapse>
      </div>
    </Card>
  );
}
