import { SanityTyper, SpørsmålBaseTemplate } from './typer';

const spørsmålBase: SpørsmålBaseTemplate = {
  title: 'Spørsmål',
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Id',
      name: 'id',
      type: SanityTyper.STRING,
    },
    {
      title: 'Spørsmål',
      name: 'sporsmalstekst',
      type: SanityTyper.STRING,
    },
  ],
};

export default spørsmålBase;
