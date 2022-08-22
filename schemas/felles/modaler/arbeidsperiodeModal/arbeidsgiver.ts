import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const hvilketLand: Field[] = [
  {
    title: 'Arbeidsgiver',
    name: 'arbeidsgiver',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn spørsmål om arbeidsgiver'),
    fields: [
      {
        title: 'Spørsmål',
        name: 'sporsmal',
        type: CustomSanityTyper.LOCALE_STRING,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om arbeidsgiver'),
      },
      {
        title: 'Feilmelding',
        name: 'feilmelding',
        type: CustomSanityTyper.LOCALE_STRING,
        description: '(obligatorisk)',
        validation: Rule =>
          Rule.required().error('Du må fylle inn en feilmelding for spørsmål om arbeidsgiver'),
      },
    ],
  },
];

export default hvilketLand;
