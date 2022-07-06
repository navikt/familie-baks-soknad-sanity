import { CustomSanityTyper, SanityTyper } from './typer';

const localeBlock = {
  title: 'Localized block',
  name: CustomSanityTyper.LOCALE_BLOCK,
  type: SanityTyper.OBJECT,
  fields: [
    { name: 'nb', title: 'Bokmål', type: CustomSanityTyper.CUSTOM_BLOCK },
    { name: 'nn', title: 'Nynorsk', type: CustomSanityTyper.CUSTOM_BLOCK },
    { name: 'en', title: 'Engelsk', type: CustomSanityTyper.CUSTOM_BLOCK },
  ],
};

export default localeBlock;
