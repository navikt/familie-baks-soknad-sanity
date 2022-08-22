import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const datoer: Field[] = [
  {
    title: 'Dato',
    name: 'dato',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn startdato'),
    fields: [
      {
        title: 'Når har x fått pensjon fra',
        name: 'farStartdato',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om dato'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_BLOCK,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om startdato'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_BLOCK,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om startdato'),
          },
        ],
      },
      {
        title: 'Når fikk x pensjon fra',
        name: 'fikkStartdato',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om dato'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_BLOCK,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om startdato'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_BLOCK,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om startdato'),
          },
        ],
      },
      {
        title: 'Når ble pensjonen avsluttet',
        name: 'narAvsluttetDato',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om dato'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_BLOCK,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om sluttdato'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_BLOCK,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om sluttdato'),
          },
        ],
      },
    ],
  },
];

export default datoer;