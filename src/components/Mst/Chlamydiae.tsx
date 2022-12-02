import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Collapse from '@mui/material/Collapse';

export default function Chlamydiae() {
  const [open, setOpen] = useState(false);
  return (
    <Card
      sx={{
        border: '1px solid rgba(211,211,211,0.6)', cursor: "pointer",
      }}
    >
      <CardHeader title="Chlamydiae" onClick={() => setOpen(!open)} />
      <div style={{ backgroundColor: 'rgba(211,211,211,0.4)' }}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CardContent>
            <Container sx={{ lineHeight: 1 }}>
              <h5> LES CHLAMYDIAES, C’EST QUOI ? </h5> Parmi les infections
              sexuellement transmissibles bactériennes, l’infection à chlamydiae
              est l’une des plus fréquentes. C’est la grande gagnante parmi les
              jeunes (16-25 ans). La raison de ce succès ? Elle se transmet
              facilement, ne donne pas toujours des symptômes, et manque de
              visibilité…
              <h5>COMMENT SE TRANSMETTENT-ELLES ? </h5>Tout contact sexuel peut
              mener à une transmission des chlamydiae : frottements sexe contre
              sexe, pénétrations, fellations, cunnilingus…{' '}
              <h5>QUELS SONT LES SYMPTÔMES ?</h5>
              Les chlamydiae ne donnent pas toujours de symptôme ! Elle peut
              causer des symptômes pendant quelques jours qui s’estompent
              d’eux-mêmes. Cette infection est souvent silencieuse sur une
              longue durée avant de présenter des complications : Au niveau
              vaginal : Brûlures urinaires, douleurs dans le bas-ventre, pertes
              anormales Au niveau du pénis : Brûlures/inconfort en urinant,
              écoulement blanchâtre intermittent Au niveau anal : Démangeaisons,
              fausses envies d’aller à la selle, écoulements Si le diagnostic
              est tardif, des complications peuvent survenir (stérilité,
              endométrites, prostatites, épididymites…)
              <h5> COMMENT SE FAIRE DÉPISTER ?</h5> Les chlamydiae se dépistent
              par analyse d’urine, idéalement sur le premier jet d’urine du
              matin, ou par prélèvement local (vaginal, urétral, anal,
              oro-pharyngé…). En cas de symptômes, consultez rapidement. En
              l’absence de symptômes et si vous avez un doute sur un rapport,
              votre dépistage peut être positif dès la fin de la première
              semaine suivant votre rapport. Si ce test est négatif, un contrôle
              est recommandé 3 à 6 semaines après.{' '}
              <h5>LES CHLAMYDIAES, C’EST QUOI ?</h5> Parmi les infections
              sexuellement transmissibles bactériennes, l’infection à chlamydiae
              est l’une des plus fréquentes. C’est la grande gagnante parmi les
              jeunes (16-25 ans). La raison de ce succès ? Elle se transmet
              facilement, ne donne pas toujours des symptômes, et manque de
              visibilité… <h5>COMMENT SE TRANSMETTENT-ELLES ?</h5> Tout contact
              sexuel peut mener à une transmission des chlamydiae : frottements
              sexe contre sexe, pénétrations, fellations, cunnilingus…{' '}
              <h5>QUELS SONT LES SYMPTÔMES ?</h5> Les chlamydiae ne donnent pas
              toujours de symptôme ! Elle peut causer des symptômes pendant
              quelques jours qui s’estompent d’eux-mêmes. Cette infection est
              souvent silencieuse sur une longue durée avant de présenter des
              complications : Au niveau vaginal : Brûlures urinaires, douleurs
              dans le bas-ventre, pertes anormales Au niveau du pénis :
              Brûlures/inconfort en urinant, écoulement blanchâtre intermittent
              Au niveau anal : Démangeaisons, fausses envies d’aller à la selle,
              écoulements Si le diagnostic est tardif, des complications peuvent
              survenir (stérilité, endométrites, prostatites, épididymites…){' '}
              <h5>COMMENT SE FAIRE DÉPISTER ?</h5> Les chlamydiae se dépistent
              par analyse d’urine, idéalement sur le premier jet d’urine du
              matin, ou par prélèvement local (vaginal, urétral, anal,
              oro-pharyngé…). En cas de symptômes, consultez rapidement. En
              l’absence de symptômes et si vous avez un doute sur un rapport,
              votre dépistage peut être positif dès la fin de la première
              semaine suivant votre rapport. Si ce test est négatif, un contrôle
              est recommandé 3 à 6 semaines après.
            </Container>
          </CardContent>
        </Collapse>
      </div>
    </Card>
  );
}
