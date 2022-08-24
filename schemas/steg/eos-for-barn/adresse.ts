import sporsmalMedFeilmeldingBlock from '../../felles/sporsmalMedFeilmeldingBlock';
import { CustomSanityTyper, Field, SanityTyper } from '../../typer';

const adresse: Field = {
  name: 'adresse',
  title: 'Adresse',
  type: SanityTyper.OBJECT,
  options: {
    collapsable: true,
    collapsed: true,
  },
  validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
  fields: [
    ...sporsmalMedFeilmeldingBlock,
    {
      name: 'hjelpetekst',
      title: 'Hjelpetekst "full adresse"',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '"Full adresse"-tekst (obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn hjelpetekst'),
    },
    {
      name: 'ukjentLabel',
      title: 'Ukjent adresse checkbox',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn label'),
    },
  ],
};

export default adresse;
