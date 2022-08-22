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
    validation: Rule => Rule.required().error('Du må fylle inn spørsmål om dato'),
    fields: [
      {
        title: 'Når startet arbeidsperioden',
        name: 'startdato',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om startdato'),
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
        title: 'Når avsluttes arbeidsperioden',
        name: 'fremtidSluttdato',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om sluttdato'),
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
        title: 'Når ble arbeidsperioden avsluttet',
        name: 'fortidSluttdato',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om sluttdato'),
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
        title: 'Vet ikke når arbeidsperiode avsluttes',
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
