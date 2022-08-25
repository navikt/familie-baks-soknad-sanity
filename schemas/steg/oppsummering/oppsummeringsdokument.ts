import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../typer';

const oppsummeringsdokument: StegDokument = {
  title: dokumentTittel.OPPSUMMERING,
  name: DokumentNavn.OPPSUMMERING,
  steg: Steg.OPPSUMMERING,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Tittel',
      name: 'tittel',
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn tittel til steget'),
    },
    {
      title: 'Oppsummering infotekst',
      name: 'infotekst',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn infotekst'),
    },
    {
      title: 'Endre svar-lenketekst',
      name: 'endreSvarLenketekst',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn lenketekst'),
    },
  ],
};

export default oppsummeringsdokument;
