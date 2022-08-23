import { DokumentNavn, dokumentTittel, SanityTyper, Steg, StegDokument } from '../../../typer';
import sporsmalMedFeilmeldingString from '../sporsmalMedFeilmeldingString';
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
      fields: [...sporsmalMedFeilmeldingString],
    },
  ],
};

export default adopsjon;
