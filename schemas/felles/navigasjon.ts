import {
  CustomSanityTyper,
  DokumentBase,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
} from '../typer';

const navigasjon: DokumentBase = {
  title: dokumentTittel.NAVIGASJON,
  name: DokumentNavn.NAVIGASJON,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Startknapp',
      name: 'start',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn startknapp-tekst'),
    },
    {
      title: 'Gå videre-knapp',
      name: 'gaVidere',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn gå-videreknapp-tekst'),
    },
    {
      title: 'Tilbakeknapp',
      name: 'tilbake',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn tilbakeknapp-tekst'),
    },
    {
      title: 'Avbryt søknad-knapp',
      name: 'avbryt',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn avbrytknapp-tekst'),
    },
  ],
};

export default navigasjon;
