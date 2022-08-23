import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const hvilketLand: Field[] = [
  {
    title: 'Hvilket land får x utbetalinger fra',
    name: 'land',
    type: SanityTyper.OBJECT,
    description: '(obligatorisk)',
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn spørsmål om land'),
    fields: [
      {
        title: 'Spørsmål',
        name: 'sporsmal',
        type: CustomSanityTyper.LOCALE_BLOCK,
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om land'),
      },
      {
        title: 'Feilmelding',
        name: 'feilmelding',
        type: CustomSanityTyper.LOCALE_BLOCK,
        validation: Rule =>
          Rule.required().error('Du må fylle inn en feilmelding for spørsmål om land'),
      },
    ],
  },
];

export default hvilketLand;
