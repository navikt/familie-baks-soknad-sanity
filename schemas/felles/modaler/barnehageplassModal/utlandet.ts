import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const utlandet: Field[] = [
  {
    title: 'Utlandet',
    name: 'utlandet',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn spørsmål om spørsmål'),
    fields: [
      {
        title: 'Har x barnehageplass i utlandet',
        name: 'harBarnehageplassUtlandet',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om barnehageplass'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error('Du må fylle inn spørsmål om barnhageplass i utlandet'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error(
                'Du må fylle inn en feilmelding for spørsmål om barnehageplass i utlandet',
              ),
          },
        ],
      },
      {
        title: 'Har x hatt barnehageplass i utlandet',
        name: 'harHattBarnehageplassUtlandet',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule =>
          Rule.required().error('Du må fylle inn spørsmål om har hatt barnehageplass i utlandet'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error(
                'Du må fylle inn spørsmål om har hatt barnhageplass i utlandet',
              ),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error(
                'Du må fylle inn en feilmelding for spørsmål om har hatt barnehageplass i utlandet',
              ),
          },
        ],
      },
      {
        title: 'Har x fått tildelt barnehageplass i utlandet',
        name: 'fattTildeltBarnehageplassUtlandet',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule =>
          Rule.required().error('Du må fylle inn spørsmål om tildelt barnehageplass i utlandet'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error('Du må fylle inn spørsmål om tildelt barnhageplass i utlandet'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error(
                'Du må fylle inn en feilmelding for spørsmål om tildelt barnehageplass i utlandet',
              ),
          },
        ],
      },
      {
        title: 'Hvilket land er barnehagen i',
        name: 'hvilketLand',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om hvilket land'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om hvilket land'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om hvilket land'),
          },
        ],
      },
    ],
  },
];

export default utlandet;
