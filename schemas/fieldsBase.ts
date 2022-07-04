import { apiNavnValideringer } from '../util/valideringer';
import { SanityTyper, Ytelse } from './typer';

const fieldsBase = [
  {
    title: 'Api navn',
    type: SanityTyper.STRING,
    name: 'api_navn',
    description: 'Teknisk navn. Eksempel om-deg-bor-på-registrert-adresse',
    validation: Rule => apiNavnValideringer(Rule, SanityTyper.DOCUMENT),
  },
  {
    title: 'Ytelse',
    type: SanityTyper.ARRAY,
    name: 'ytelse',
    description: 'For hvilke ytelser gjelder teksten?',
    validation: Rule => Rule.required().error('Dokumentet må høre til en ytelse'),
    options: {
      list: [
        { value: Ytelse.ORDINÆR_BARNETRYGD, title: 'Ordinær barnetrygd' },
        { value: Ytelse.UTVIDET_BARNETRYGD, title: 'Utvidet barnetrygd' },
        { value: Ytelse.KONTANTSTØTTE, title: 'Kontantstøtte' },
      ],
      layout: 'radio',
    },
    of: [
      {
        type: SanityTyper.STRING,
      },
    ],
  },
];
export default fieldsBase;
