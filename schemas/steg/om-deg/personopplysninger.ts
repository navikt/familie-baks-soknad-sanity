import { DokumentNavn, DokumentTittel } from '../../typer';

const personopplysninger = {
  title: DokumentTittel.OM_DEG_PERSONOPPLYSNINGER,
  name: DokumentNavn.OM_DEG_PERSONOPPLYSNINGER,
  type: 'document',
  fields: [
    {
      title: 'Navn',
      name: 'navn',
      type: 'string',
    },
  ],
};

export default personopplysninger;
