import {
  CustomSanityTyper,
  DokumentNavn,
  SanityTyper,
  StegDokument,
  Steg,
  dokumentTittel,
} from '../../typer';

const soknadstittel: StegDokument = {
  steg: Steg.FORSIDE,
  title: dokumentTittel.FORSIDE_TITTEL,
  name: DokumentNavn.FORSIDE_TITTEL,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Søknadstittel',
      name: 'soknadstittel',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn en tittel på søknaden'),
    },
  ],
};

export default soknadstittel;
