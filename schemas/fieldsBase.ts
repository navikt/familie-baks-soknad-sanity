import { apiNavnValideringer } from '../util/valideringer';
import { Field, SanityTyper, Ytelse } from './typer';

const fieldsBase: Field[] = [
  {
    name: 'visningsnavn',
    title: 'Visningsnavn',
    description: '(obligatorisk)',
    type: SanityTyper.STRING,
    validation: Rule => Rule.required().error('Dokumentet må ha et visningsnavn'),
  },
  {
    name: 'api_navn',
    title: 'Api navn',
    type: SanityTyper.STRING,
    description: 'Teknisk navn. Eksempel om-deg-bor-på-registrert-adresse (obligatorisk)',
    validation: Rule => apiNavnValideringer(Rule, SanityTyper.DOCUMENT),
  },
  {
    name: 'ytelse',
    title: 'Ytelse',
    type: SanityTyper.ARRAY,
    description: 'For hvilke ytelser gjelder teksten? Velg minst én. (obligatorisk)',
    validation: Rule => Rule.required().error('Dokumentet må høre til minst en ytelse'),
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
