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
        border: '1px solid rgba(211,211,211,0.6)', cursor: "pointer", background: "radial-gradient(#F1948A, #F5B7B1)"
      }}
    >
      <CardHeader title="Sida/VIH" onClick={() => setOpen(!open)} />
      <div style={{ backgroundColor: 'rgba(211,211,211,0.4)' }}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CardContent>
            <Container sx={{ lineHeight: 1 }}>
            <h5> LE VIH/SIDA, C’EST QUOI ? </h5> Son nom signifie Virus de
                l’Immunodéficience Humaine. Il attaque le système immunitaire
                des personnes porteuses et le détruit petit à petit. Le Sida
                (Syndrome d’Immunodéficience Acquise) est un stade avancé du
                VIH. Attention : il ne faut pas confondre VIH et Sida. Une
                personne qui est porteuse du VIH n’a pas nécessairement « le
                sida ». Si elle prend un traitement, elle n’atteindra pas ce
                stade. <h5> COMMENT SE TRANSMET-IL ? </h5> Le VIH est présent
                dans le sang, les sécrétions sexuelles (sperme, sécrétions
                vaginales), et le lait maternel. Mais cela ne signifie pas qu’il
                se transmet par simple contact d’un de ces liquides avec la peau
                ! Contrairement à ce que beaucoup pensent, ce virus ne peut se
                transmettre dans la vie quotidienne : il ne se transmet pas en
                embrassant, touchant une personne, ni en touchant
                accidentellement du sang sur une surface, ni par une piqûre de
                moustique… Il a des modes de transmissions bien spécifiques !
                Par exemple, au niveau sexuel, il peut se transmettre par :
                Pénétration vaginale ou anale non protégée, Fellation faite. Il
                peut aussi se transmettre de la mère à l’enfant lors de la
                grossesse ou de l’allaitement, ou par partage de seringue ou de
                matériel lors de la consommation de drogues par voie
                intraveineuse. <h5> QUELS SONT LES SYMPTÔMES ? </h5> En début
                d’infection (environ 15 à 21 jours après) peuvent apparaître des
                symptômes rappelant une grosse grippe. Ces symptômes
                n’apparaissent pas toujours, et surtout ils ne sont pas
                spécifiques au VIH. Inutile donc de paniquer dès la première
                angine hivernale : si vous avez un doute sur une situation, il
                faut surtout faire un dépistage. Lors de la phase chronique,
                celle ou le virus agit au niveau du système immunitaire, il y a
                généralement peu de symptômes. On peut constater un
                amaigrissement, une dégradation de l’état physique sur plusieurs
                années. Le stade Sida est un stade où la dégradation du système
                immunitaire (qui sert à défendre le corps contre les maladie)
                est telle que la personne n’est plus protégée. Des infections
                surviennent : on les appelle des maladies opportunistes. Sans
                danger pour la population générale, ces infections sont graves
                pour des personnes ayant un système immunitaire dégradé.{' '}
                <h5> COMMENT SE DÉPISTE-T-IL ? </h5> Le VIH peut se dépister par
                prise de sang. Ce test peut être réalisé dans un laboratoire
                d’analyses médicales (avec une ordonnance de votre médecin pour
                être remboursé par la sécurité sociale), ou dans un centre de
                dépistage gratuit (Cegidd). Le VIH peut également se dépister
                par un test rapide, qui consiste à prélever quelques gouttes de
                sang au bout du doigt et de le mélanger à des réactifs qui
                génèrent une réponse positive ou négative. Ces tests sont
                entièrement fiables 3 mois après le dernier rapport non protégé.
                Il existe deux sortes de tests rapides : Le TROD, qui est
                toujours réalisé par une personne formée (professionnel-le de
                santé, membre d’une association) et l’autotest, qui peut être
                acheté en pharmacie et réalisé seul-e ou accompagné-e.{' '}
                <h5> COMMENT SE TRAITE-T-IL ? </h5> Le traitement repose sur des
                médicaments antirétroviraux. Il empêche la reproduction du
                virus, et donc la destruction du système immunitaire mais ne
                guérit pas le VIH. Il doit être pris quotidiennement. En
                empêchant la multiplication du virus, il réduit progressivement
                la quantité de virus qui circule dans le sang jusqu’à sa
                disparition. <h5> COMMENT S’EN PROTÉGER ? </h5> Le préservatif
                protège du VIH lorsqu’il est utilisé pour protéger les relations
                sexuelles avec des personnes dont vous ne connaissez pas le
                statut vis-à-vis du VIH, ou qui sont séropositives et dont la
                charge virale n’est pas indétectable. Le TasP signifie
                Traitement Comme Prévention. On ne le redira jamais assez: une
                personne séropositive sous traitement avec une charge virale
                indétectable ne peut plus transmettre le virus. La PrEP est un
                traitement préventif qui permet à des personnes qui ont des
                difficultés à se protéger par le préservatif d’éviter une
                infection par le VIH. Le TPE ou Traitement Post Exposition est
                un traitement qui doit être pris juste après un risque (dans les
                48h maximum). Ce traitement d’une durée de 28 jours empêche le
                VIH de pénétrer dans les cellules, et donc de vous infecter. Il
                est prescrit, après évaluation du risque par un médecin, dans
                tous les Cegidd, dans les services de maladies infectieuses et
                dans les services d’urgences.
            </Container>
          </CardContent>
        </Collapse>
      </div>
    </Card>
  );
}
