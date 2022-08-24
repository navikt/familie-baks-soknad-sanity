import { CustomSanityTyper } from '../typer';

const sporsmalMedFeilmeldingString = [
  {
    name: 'sporsmal',
    title: 'Spørsmål',
    type: CustomSanityTyper.LOCALE_STRING,
    description: '(obligatorisk)',
    validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
  },
  {
    name: 'feilmelding',
    title: 'Feilmelding',
    description: '(obligatorisk)',
    type: CustomSanityTyper.LOCALE_STRING,
    validation: Rule => Rule.required().error('Du må fylle inn feilmelding'),
  },
];

export default sporsmalMedFeilmeldingString;
