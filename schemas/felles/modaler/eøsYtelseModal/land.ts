import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const land: Field[] = [
  {
    title: 'Hvilket land får x EØS ytelse fra',
    name: 'land',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn spørsmål om EØS ytelse'),
    fields: [
      {
        title: 'Hvilket land får x EØS ytelse fra',
        name: 'farEosYtelseFraLand',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om EØS ytelse land'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_BLOCK,
            validation: Rule =>
              Rule.required().error('Du må fylle inn spørsmål om EØS ytelse land'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_BLOCK,
            validation: Rule =>
              Rule.required().error(
                'Du må fylle inn en feilmelding for spørsmål om EØS ytelse land',
              ),
          },
        ],
      },
      {
        title: 'Hvilket land fikk x EØS ytelse fra',
        name: 'fikkEosYtelseFraLand',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om EØS ytelse land'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_BLOCK,
            validation: Rule =>
              Rule.required().error('Du må fylle inn spørsmål om EØS ytelse land'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_BLOCK,
            validation: Rule =>
              Rule.required().error(
                'Du må fylle inn en feilmelding for spørsmål om EØS ytelse land',
              ),
          },
        ],
      },
    ],
  },
];

export default land;
