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
        title: 'Startet i barnehagen dato',
        name: 'startetIBarnehagenDato',
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
        title: 'Starter i barnehagen dato',
        name: 'starterIBarnehagenDato',
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
        title: 'Sluttet i barnehagen dato',
        name: 'SluttetIBarnehagenDato',
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
        title: 'Slutter i barnehagen dato',
        name: 'slutterIBarnehagenDato',
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
        title: 'Vet ikke når barnet slutter i barnehagen',
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
