import {
  CustomSanityTyper,
  DokumentNavn,
  SanityTyper,
  StegDokument,
  Steg,
  dokumentTittel,
} from '../../typer';

const bekreftelsesboks: StegDokument = {
  steg: Steg.FORSIDE,
  title: dokumentTittel.FORSIDE_BEKREFTELSESBOKS,
  name: DokumentNavn.FORSIDE_BEKREFTELSESBOKS,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Tittel',
      name: 'tittel',
      description: 'Overskrift over bekreftelsesboksen (obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn tittel'),
    },
    {
      title: 'Brødtekst',
      name: 'brodtekst',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn brødtekst'),
    },
    {
      title: 'Erklæring',
      name: 'erklaering',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn erklæring'),
    },
    {
      title: 'Feilmelding',
      name: 'feilmelding',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn feilmelding'),
    },
  ],
};

export default bekreftelsesboks;
