import sporsmalMedFeilmeldingBlock from '../../felles/sporsmalMedFeilmeldingBlock';
import { Field, SanityTyper } from '../../typer';

const slektsforhold: Field[] = [
  {
    name: 'slektsforhold',
    title: 'Slektsforhold',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
    fields: [...sporsmalMedFeilmeldingBlock],
  },
  {
    name: 'spesifisertRelasjon',
    title: 'Spesifisert relasjon',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
    fields: [...sporsmalMedFeilmeldingBlock],
  },
];

export default slektsforhold;
