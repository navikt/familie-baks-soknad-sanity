import { DokumentNavn, DokumentTittel, SanityTyper } from '../../typer';

const punktliste = {
  title: DokumentTittel.FORSIDE_PUNKTLISTE,
  name: DokumentNavn.FORSIDE_PUNKTLISTE,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Tittel',
      name: 'tittel',
      type: 'string',
    },
  ],
};

export default punktliste;
