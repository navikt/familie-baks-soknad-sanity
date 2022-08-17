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
        title: 'Hvilket land flyttet x fra',
        name: 'landFlyttetFra',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om land'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om land'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om land'),
          },
        ],
      },
      {
        title: 'Hvilket land flyttet x til',
        name: 'landFlyttetTil',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om land'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om land'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om land'),
          },
        ],
      },
      {
        title: 'Hvilket land oppholder x seg i',
        name: 'landNavaerendeOpphold',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om land'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om land'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om land'),
          },
        ],
      },
      {
        title: 'Hvilket land oppholdt x seg i',
        name: 'landTidligereOpphold',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om land'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om land'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om land'),
          },
        ],
      },
    ],
  },
];

export default hvilketLand;
