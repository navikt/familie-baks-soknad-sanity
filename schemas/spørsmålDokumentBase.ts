import fieldsBase from './fieldsBase';
import { DokumentTittel, SanityTyper, SpørsmålBaseTemplate } from './typer';

const spørsmålDokumentBase: SpørsmålBaseTemplate = {
  title: DokumentTittel.SPØRSMÅL,
  type: SanityTyper.DOCUMENT,
  fields: [
    ...fieldsBase,
    {
      title: 'Spørsmål',
      name: 'sporsmalstekst',
      type: SanityTyper.STRING,
    },
  ],
};

export default spørsmålDokumentBase;
