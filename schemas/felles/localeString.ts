import { Rule } from '@sanity/types';

import { CustomSanityTyper, SanityTyper } from '../typer';

const localeString = {
  title: 'Localized string',
  name: CustomSanityTyper.LOCALE_STRING,
  type: SanityTyper.OBJECT,
  fields: [
    {
      title: 'Bokmål',
      name: 'nb',
      type: SanityTyper.STRING,
      validation: (rule: Rule) => rule.required().error('Du må fylle inn bokmål'),
    },
    {
      title: 'Nynorsk',
      name: 'nn',
      type: SanityTyper.STRING,
      validation: (rule: Rule) => rule.required().error('Du må fylle inn nynorsk'),
    },
    {
      title: 'Engelsk',
      name: 'en',
      type: SanityTyper.STRING,
      validation: (rule: Rule) => rule.required().error('Du må fylle inn engelsk'),
    },
  ],
};

export default localeString;
