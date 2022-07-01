import { CustomSanityTyper, DokumentNavn, DokumentTittel, SanityTyper } from './typer';

const navigasjon = {
  title: DokumentTittel.NAVIGASJON,
  name: DokumentNavn.NAVIGASJON,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Startknapp',
      name: 'start',
      type: CustomSanityTyper.LOCALE_STRING,
    },
    {
      title: 'Gå videre-knapp',
      name: 'ga_videre',
      type: CustomSanityTyper.LOCALE_STRING,
    },
    {
      title: 'Tilbakeknapp',
      name: 'tilbake',
      type: CustomSanityTyper.LOCALE_STRING,
    },
    {
      title: 'Avbryt søknad-knapp',
      name: 'avbryt',
      type: CustomSanityTyper.LOCALE_STRING,
    },
  ],
};

export default navigasjon;
