import {
  CustomSanityTyper,
  DokumentNavn,
  SanityTyper,
  StegDokument,
  Steg,
  dokumentTittel,
} from '../../typer';

const personopplysningslenke: StegDokument = {
  steg: Steg.FORSIDE,
  title: dokumentTittel.FORSIDE_PERSONOPPLYSNINGSLENKE,
  name: DokumentNavn.FORSIDE_PERSONOPPLYSNINGSLENKE,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Personopplysningslenke',
      name: 'personopplysningslenke',
      description: 'Lenke til om hvordan NAV behandler personopplysninger (obligatorisk)',
      type: CustomSanityTyper.LOCALE_BLOCK,
      validation: Rule => Rule.required().error('Du må fylle inn en lenke'),
    },
  ],
};

export default personopplysningslenke;
