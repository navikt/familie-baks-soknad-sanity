import { apiNavnValideringer } from '../../util/valideringer';
import { DokumentNavn, SanityTyper, Steg, Ytelse } from '../typer';

const fieldsBase = (steg: Steg, name: DokumentNavn) => [
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
    description: 'Teknisk navn. Eksempel borPaRegistrertAdresse (obligatorisk)',
    validation: Rule => apiNavnValideringer(Rule, SanityTyper.DOCUMENT, name),
    readOnly: true, // kommenter ut denne linjen dersom man ønsker å endre api_navn
  },
  {
    name: 'ytelse',
    title: 'Ytelse',
    type: SanityTyper.ARRAY,
    description: 'For hvilke ytelser gjelder teksten? Velg minst én. (obligatorisk)',
    validation: Rule => Rule.required().error('Dokumentet må høre til minst en ytelse'),
    options: {
      list: [
        { value: Ytelse.BARNETRYGD, title: 'Barnetrygd' },
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
  {
    title: 'Teknisk stegnavn',
    name: 'steg',
    type: SanityTyper.STRING,
    initialValue: steg,
    readOnly: true,
  },
];

export default fieldsBase;
