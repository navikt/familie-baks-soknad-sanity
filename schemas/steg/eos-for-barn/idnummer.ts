import sporsmalMedFeilmeldingBlock from '../../felles/sporsmalMedFeilmeldingBlock';
import { CustomSanityTyper, Field, SanityTyper } from '../../typer';

const idnummer: Field = {
  name: 'idnummer',
  title: 'Idnummer',
  type: SanityTyper.OBJECT,
  options: {
    collapsable: true,
    collapsed: true,
  },
  validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
  fields: [
    ...sporsmalMedFeilmeldingBlock,
    {
      name: 'ukjentLabel',
      title: 'Ukjent idnummer checkbox',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn label'),
    },
  ],
};

export default idnummer;
