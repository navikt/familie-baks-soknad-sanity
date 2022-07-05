import fieldsBase from './fieldsBase';
import { CustomSanityTyper, DokumentTittel, SanityTyper, SpørsmålBaseTemplate } from './typer';

const spørsmålDokumentBase: SpørsmålBaseTemplate = {
  title: DokumentTittel.SPØRSMÅL,
  type: SanityTyper.DOCUMENT,
  fields: [
    ...fieldsBase,
    {
      name: 'sporsmal',
      title: 'Spørsmål',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
    },
    {
      name: 'feilmelding',
      title: 'Feilmelding',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn feilmelding'),
    },
    {
      name: 'beskrivelse',
      title: 'Beskrivelse',
      description: '(frivillig)',
      type: CustomSanityTyper.LOCALE_STRING,
    },
    {
      name: 'alertOpplysning',
      title: 'Opplysning i alert',
      description: '(frivillig)',
      type: CustomSanityTyper.LOCALE_STRING,
    },
    {
      name: 'vedleggsnotis',
      title: 'Vedleggsnotis',
      description: '(frivillig)',
      type: CustomSanityTyper.LOCALE_STRING,
    },
  ],
};

export default spørsmålDokumentBase;
