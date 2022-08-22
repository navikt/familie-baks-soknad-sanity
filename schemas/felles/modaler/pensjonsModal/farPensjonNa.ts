import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const farPensjonNa: Field[] = [
  {
    title: 'Får pensjon nå',
    name: 'farPensjonNa',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn spørsmål om x får pensjon nå'),
    fields: [
      {
        title: 'Spørsmål',
        name: 'sporsmal',
        type: CustomSanityTyper.LOCALE_BLOCK,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om x får pensjon nå'),
      },
      {
        title: 'Feilmelding',
        name: 'feilmelding',
        type: CustomSanityTyper.LOCALE_BLOCK,
        description: '(obligatorisk)',
        validation: Rule =>
          Rule.required().error('Du må fylle inn en feilmelding for spørsmål om x får pensjon nå'),
      },
    ],
  },
];

export default farPensjonNa;
