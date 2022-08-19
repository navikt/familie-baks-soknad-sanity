import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const offentligStotte: Field[] = [
  {
    title: 'Mottar barnehagen offentlig støtte',
    name: 'offentligStotte',
    type: SanityTyper.OBJECT,
    description: '(obligatorisk)',
    validation: Rule => Rule.required().error('Du må fylle inn spørsmål om offentlig støtte'),
    fields: [
      {
        title: 'Spørsmål',
        name: 'sporsmal',
        type: CustomSanityTyper.LOCALE_STRING,
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om offentlig støtte'),
      },
      {
        title: 'Feilmelding',
        name: 'feilmelding',
        type: CustomSanityTyper.LOCALE_STRING,
        validation: Rule =>
          Rule.required().error('Du må fylle inn en feilmelding for spørsmål om offentlig støtte'),
      },
    ],
  },
];

export default offentligStotte;
