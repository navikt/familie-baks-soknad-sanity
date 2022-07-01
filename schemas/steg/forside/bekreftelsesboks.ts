import { CustomSanityTyper, DokumentNavn, DokumentTittel, SanityTyper } from '../../typer';

const bekreftelsesboks = {
  title: DokumentTittel.FORSIDE_BEKREFTELSESBOKS,
  name: DokumentNavn.FORSIDE_BEKREFTELSESBOKS,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Brødtekst',
      name: 'brodtekst',
      type: CustomSanityTyper.LOCALE_STRING,
    },
    {
      title: 'Erklæring',
      name: 'erklaering',
      type: CustomSanityTyper.LOCALE_STRING,
    },
    {
      title: 'Feilmelding',
      name: 'feilmelding',
      type: CustomSanityTyper.LOCALE_STRING,
    },
  ],
};

export default bekreftelsesboks;
