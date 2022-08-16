import fieldsBase from './fieldsBase';
import { SanityTyper, Steg } from './typer';

const fieldsBaseForSteg = (steg: Steg) => [
  ...fieldsBase,
  {
    title: 'Teknisk stegnavn',
    name: 'steg',
    type: SanityTyper.STRING,
    initialValue: steg,
    readOnly: true,
  },
];

export default fieldsBaseForSteg;
