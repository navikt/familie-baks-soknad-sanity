import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const farEosYtelseNa: Field[] = [
  {
    title: 'Får x ytelse fra et annet EU/EØS land nå',
    name: 'farEosYtelseNa',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn spørsmål om x får eøs ytelse nå'),
    fields: [
      {
        title: 'Spørsmål',
        name: 'sporsmal',
        type: CustomSanityTyper.LOCALE_BLOCK,
        description: '(obligatorisk)',
        validation: Rule =>
          Rule.required().error('Du må fylle inn spørsmål om x får eøs ytelse nå'),
      },
      {
        title: 'Feilmelding',
        name: 'feilmelding',
        type: CustomSanityTyper.LOCALE_BLOCK,
        description: '(obligatorisk)',
        validation: Rule =>
          Rule.required().error(
            'Du må fylle inn en feilmelding for spørsmål om x får eøs ytelse nå',
          ),
      },
    ],
  },
];

export default farEosYtelseNa;
