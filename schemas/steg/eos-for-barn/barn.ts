import sporsmalMedFeilmeldingBlock from '../../felles/sporsmalMedFeilmeldingBlock';
import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../typer';
import adresse from './adresse';
import idnummer from './idnummer';
import slektsforhold from './slektsforhold';

const barn: StegDokument = {
  steg: Steg.EØS_FOR_BARN,
  title: dokumentTittel.EOS_FOR_BARN_BARNET,
  name: DokumentNavn.EOS_FOR_BARN_BARNET,
  type: SanityTyper.DOCUMENT,
  fields: [
    idnummer,
    adresse,
    ...slektsforhold,
    {
      name: 'borMedAndreForelder',
      title: 'Bor med andre forelder',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
    },
    {
      name: 'borMedOmsorgsperson',
      title: 'Bor med omsorgsperson',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
    },
  ],
};

export default barn;
