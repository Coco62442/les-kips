import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Collapse from '@mui/material/Collapse';

export default function Syphilis() {
  const [open, setOpen] = useState(false);
  return (
    <Card
      sx={{
        border: '1px solid rgba(211,211,211,0.6)', cursor: "pointer", background: "radial-gradient(#F1948A, #F5B7B1)"
      }}
    >
      <CardHeader title="Syphilis" onClick={() => setOpen(!open)} />
      <div style={{ backgroundColor: 'rgba(211,211,211,0.4)' }}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CardContent>
            <Container sx={{ lineHeight: 1 }}>
                <h5> LA SYPHILIS, C’EST QUOI ? </h5> La syphilis est une
                infection sexuellement transmissible bactérienne. Apparue au XVe
                siècle, elle a fait des ravages, causant jusqu’à 5 millions de
                morts en Europe jusqu’à la découverte d’un traitement efficace
                en 1943.
                <h5> QUELS SONT LES SYMPTÔMES ?</h5> L’apparition d’un chancre
                syphilitique sur le point d’entrée de la bactérie: la vulve, le
                vagin, le pénis, l’anus, la bouche ou la gorge. Le chancre est
                un ulcère indolore. Il apparaît en moyenne 20 jours après
                l’infection et disparaît spontanément 15 jours plus tard. Il
                peut passer complètement inaperçu selon l’endroit où il
                apparaît. Dans un second temps (6 à 16 semaines après
                l’infection) des manifestations de la peau peuvent apparaître,
                notamment des éruptions de tâches rose pâle qui disparaissent
                spontanément en quelques jours, et peuvent revenir par
                intermittence. Si elle n’est pas soignée au bout de plusieurs
                années, la syphilis peut causer des atteintes neurologiques,
                psychiatriques et cardio-vasculaires. Heureusement, c’est devenu
                rarissime depuis la découverte d’un traitement largement
                accessible. Comme beaucoup d’IST, la syphilis peut passer
                inaperçue. D’ailleurs, elle a longtemps été appelée « la grande
                simulatrice » en raison de ses symptômes très variés. Raison de
                plus pour se faire dépister de temps en temps !
                <h5>COMMENT SE TRANSMENT LA SYPHILIS ?</h5> La syphilis se
                transmet très majoritairement par un contact avec une lésion
                syphilitique, notamment un chancre, lors d’une pénétration
                sexuelle vaginale, anale, une fellation reçue ou pratiquée.
                <h5>COMMENT SE FAIRE DÉPISTER ?</h5> La syphilis se dépiste par
                une prise de sang. Afin d’être certain de la fiabilité de votre
                dépistage, mieux vaut attendre 5 semaines après votre dernier
                rapport sexuel. Celui-ci peut néanmoins se montrer positif
                avant. <h5>QUELS SONT LES TRAITEMENTS ? </h5>La syphilis étant
                une bactérie, elle se traite par antibiotiques : en
                l’occurrence, par l’injection de pénicilline.
            </Container>
          </CardContent>
        </Collapse>
      </div>
    </Card>
  );
}
