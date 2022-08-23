import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../../typer';
import opplysningspaminnelse from './opplysningspaminnelse';

const adopsjon: StegDokument = {
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_ADOPSJON,
  name: DokumentNavn.OM_BARNET_ADOPSJON,
  type: SanityTyper.DOCUMENT,
  fields: [
    opplysningspaminnelse,
    {
      name: 'foreldrepengerEllerEngangsstonad',
      title: 'Utbetaling av foreldrepenger eller engangstønad',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [
        {
          name: 'sporsmal',
          title: 'Spørsmål',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
        },
        {
          name: 'feilmelding',
          title: 'Feilmelding',
          description: '(obligatorisk)',
          type: CustomSanityTyper.LOCALE_STRING,
          validation: Rule => Rule.required().error('Du må fylle inn feilmelding'),
        },
      ],
    },
  ],
};

export default adopsjon;
