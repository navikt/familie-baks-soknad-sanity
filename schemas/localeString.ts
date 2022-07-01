import { CustomSanityTyper, SanityTyper } from './typer';

const localeString = {
  title: 'Localized string',
  name: CustomSanityTyper.LOCALE_STRING,
  type: SanityTyper.OBJECT,
  fields: [
    {
      title: 'Bokmål',
      name: 'nb',
      type: SanityTyper.STRING,
    },
    {
      title: 'Nynorsk',
      name: 'nn',
      type: SanityTyper.STRING,
    },
    {
      title: 'Engelsk',
      name: 'en',
      type: SanityTyper.STRING,
    },
  ],
};

export default localeString;
