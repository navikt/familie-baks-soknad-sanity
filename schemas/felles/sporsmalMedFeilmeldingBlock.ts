import { CustomSanityTyper, Field } from '../typer';

const sporsmalMedFeilmeldingBlock: Field[] = [
  {
    name: 'sporsmal',
    title: 'Spørsmål',
    type: CustomSanityTyper.LOCALE_BLOCK,
    description: '(obligatorisk)',
    validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
  },
  {
    name: 'feilmelding',
    title: 'Feilmelding',
    description: '(obligatorisk)',
    type: CustomSanityTyper.LOCALE_BLOCK,
    validation: Rule => Rule.required().error('Du må fylle inn feilmelding'),
  },
];

export default sporsmalMedFeilmeldingBlock;
