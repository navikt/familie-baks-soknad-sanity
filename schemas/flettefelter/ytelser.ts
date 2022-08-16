import { CustomSanityTyper, DokumentNavn, dokumentTittel, SanityTyper } from '../typer';

const ytelser = {
  title: dokumentTittel.FLETTEFELT_YTELSER,
  name: DokumentNavn.FLETTEFELT_YTELSER,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Kontantstøtte',
      name: 'kontantstotte',
      type: CustomSanityTyper.LOCALE_STRING,
    },
    {
      title: 'Ordinær barnetrygd',
      name: 'ordinaerBarnetrygd',
      type: CustomSanityTyper.LOCALE_STRING,
    },
    {
      title: 'Utvidet barnetrygd',
      name: 'UtvidetBarnetrygd',
      type: CustomSanityTyper.LOCALE_STRING,
    },
  ],
};

export default ytelser;
