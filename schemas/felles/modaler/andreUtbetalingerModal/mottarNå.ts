import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const mottarNå: Field[] = [
  {
    title: 'Får x utbetaling nå',
    name: 'mottarNa',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn om x får utbetalinger nå'),
    fields: [
      {
        title: 'Spørsmål',
        name: 'sporsmal',
        type: CustomSanityTyper.LOCALE_BLOCK,
        description: '(obligatorisk)',
        validation: Rule =>
          Rule.required().error('Du må fylle inn spørsmål om x får utbetalinger nå'),
      },
      {
        title: 'Feilmelding',
        name: 'feilmelding',
        type: CustomSanityTyper.LOCALE_BLOCK,
        description: '(obligatorisk)',
        validation: Rule =>
          Rule.required().error(
            'Du må fylle inn en feilmelding for spørsmål om x får utbetalinger nå',
          ),
      },
    ],
  },
];

export default mottarNå;
