import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const hvilketLand: Field[] = [
  {
    title: 'Land',
    name: 'land',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn spørsmål om land'),
    fields: [
      {
        title: 'Hvilket land arbeider x i',
        name: 'arbeiderILand',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
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
      {
        title: 'Hvilket land arbeidet x i',
        name: 'arbeidetILand',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
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
    ],
  },
];

export default hvilketLand;
