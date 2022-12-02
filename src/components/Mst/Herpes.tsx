import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Collapse from '@mui/material/Collapse';

export default function Herpes() {
  const [open, setOpen] = useState(false);
  return (
    <Card
      sx={{
        border: '1px solid rgba(211,211,211,0.6)', cursor: "pointer"
      }}
    >
      <CardHeader title="Herpes" onClick={() => setOpen(!open)} />
      <div style={{ backgroundColor: 'rgba(211,211,211,0.4)' }}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CardContent>
            <Container sx={{ lineHeight: 1 }}>
              <h5> L’HERPÈS, C’EST QUOI ? </h5> L’ herpès est un virus.qui se
              décline en deux types: L’herpès 1 (HSV1), faussement appelé «
              herpès labial », est souvent responsable du fameux « bouton de
              fièvre » qui pousse au coin des lèvres. Il peut néanmoins être
              transmis à la zone génitale par contact direct ou indirect et
              devenir ainsi un herpès génital L’herpès 2 (HSV2), touche
              principalement la sphère génitale et péri-génitale. Nous parlerons
              plus spécifiquement de l’herpès génital.{' '}
              <h5>COMMENT SE TRANSMET-IL ?</h5> L’herpès peut se transmettre par
              n’importe quel contact sexuel. La transmission a généralement lieu
              avant, après ou au cours d’une poussée d’herpès. Il peut toutefois
              y avoir des transmissions lors de poussées asymptomatiques.{' '}
              <h5>QUELS SONT LES SYMPTÔMES ?</h5> La réaction aux virus de
              l’herpès varie énormément selon les personnes : certaines ne
              feront jamais de symptômes, d’autres feront une poussée peu après
              leur contamination. Avant la poussée: apparition de brûlures,
              d’irritations ou de picotements. Pendant la poussée: apparition de
              vésicules (boutons) ou ulcères inflammés au niveau génital, anal,
              ou autour de ces zones, qui cicatrisent et disparaissent en 8 à 15
              jours. <h5>COMMENT SE FAIRE DÉPISTER ?</h5> L’herpès ne se dépiste
              pas mais se diagnostique. <h5>QUEL TRAITEMENT ?</h5> Les crises
              d’herpès se traitent par un médicament antiviral en comprimés
              ainsi que par des crèmes favorisant la cicatrisation.{' '}
              <h5>DÉDRAMATISER L’HERPÈS</h5> L’herpès est un virus sans gravité.
              Chez certaines personnes, il peut se révéler handicapant lorsque
              les poussées sont très fréquentes. C’est pour ça qu’un traitement
              antiviral long peut être proposé pour calmer le virus. Néanmoins,
              dans les cas d’infections faibles à modérées, l’herpès est un
              passage douloureux et/ou inconfortable, mais bénin.
            </Container>
          </CardContent>
        </Collapse>
      </div>
    </Card>
  );
}
