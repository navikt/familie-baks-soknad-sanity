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
    validation: Rule => Rule.required().error('Du må fylle startdato'),
    fields: [
      {
        title: 'Flyttet fra Norge dato',
        name: 'flyttetFraNorgeDato',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om dato'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om startdato'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om startdato'),
          },
        ],
      },
      {
        title: 'Flyttet til Norge dato',
        name: 'flyttetTilNorgeDato',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om dato'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om sluttdato'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om sluttdato'),
          },
        ],
      },
      {
        title: 'Opphold i utland startdato',
        name: 'oppholdUtlandStartdato',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om dato'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om startdato'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om startdato'),
          },
        ],
      },
      {
        title: 'Opphold i utland sluttdato fortid',
        name: 'oppholdUtlandFortidSluttdato',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om dato'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om sluttdato'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om sluttdato'),
          },
        ],
      },
      {
        title: 'Opphold i utland sluttdato framtid',
        name: 'oppholdUtlandFramtidSluttdato',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om dato'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om sluttdato'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om sluttdato'),
          },
        ],
      },
      {
        title: 'Vet ikke når opphold avsluttes',
        name: 'ukjentSluttdato',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om dato'),
        fields: [
          {
            title: 'Checkbox label',
            name: 'label',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn checkbox label'),
          },
        ],
      },
    ],
  },
];

export default datoer;
