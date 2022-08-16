import { CustomSanityTyper, DokumentNavn, dokumentTittel, SanityTyper } from '../typer';

const ytelser = {
  title: dokumentTittel.FLETTEFELT_YTElSE,
  name: DokumentNavn.FLETTEFELT_YTElSE,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Api navn',
      name: 'api_navn',
      type: SanityTyper.STRING,
      description: 'Teknisk navn for å hente ut feltet i koden',
      initialValue: 'flettefelter',
      readOnly: true,
    },
    {
      title: 'Teknisk stegnavn',
      name: 'steg',
      type: SanityTyper.STRING,
      initialValue: Steg.FELLES,
      readOnly: true,
    },
    {
      title: 'Kontantstøtte',
      name: 'kontantstotte',
      type: CustomSanityTyper.LOCALE_STRING,
    },
    {
      title: 'Barnetrygd',
      name: 'barnetrygdOrdinaer',
      type: CustomSanityTyper.LOCALE_STRING,
    },
    {
      title: 'Barnetrygd',
      name: 'barnetrygdOrdinaer',
      type: CustomSanityTyper.LOCALE_STRING,
    },
  ],
};

export default ytelser;
