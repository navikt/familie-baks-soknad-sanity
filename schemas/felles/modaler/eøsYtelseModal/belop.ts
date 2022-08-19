import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const belop: Field[] = [
  {
    title: 'Beløp hver måned for x',
    name: 'belop',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn spørsmål om beløp'),
    fields: [
      {
        title: 'Spørsmål',
        name: 'sporsmal',
        type: CustomSanityTyper.LOCALE_BLOCK,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om beløp'),
      },
      {
        title: 'Feilmelding',
        name: 'feilmelding',
        type: CustomSanityTyper.LOCALE_BLOCK,
        description: '(obligatorisk)',
        validation: Rule =>
          Rule.required().error('Du må fylle inn en feilmelding for spørsmål om beløp'),
      },
      {
        title: 'Oppgi beløpet i lokal valuta',
        name: 'infotekst',
        type: CustomSanityTyper.LOCALE_STRING,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn infotekst om beløp'),
      },
    ],
  },
];

export default belop;
