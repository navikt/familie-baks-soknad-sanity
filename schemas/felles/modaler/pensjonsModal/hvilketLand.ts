import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const hvilketLand: Field[] = [
  {
    title: 'Hvilket land får x pensjon fra',
    name: 'land',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn spørsmål om pensjonsland'),
    fields: [
      {
        title: 'Hvilket land får x pensjon fra',
        name: 'farPensjonFraLand',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om pensjonsland'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_BLOCK,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om pensjonsland'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_BLOCK,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om pensjonsland'),
          },
        ],
      },
      {
        title: 'Hvilket land fikk x pensjon fra',
        name: 'fikkPensjonFraLand',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om pensjonsland'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_BLOCK,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om pensjonsland'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_BLOCK,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om pensjonsland'),
          },
        ],
      },
    ],
  },
];

export default hvilketLand;
