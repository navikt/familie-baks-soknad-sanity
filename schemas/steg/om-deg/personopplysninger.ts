import { CustomSanityTyper, DokumentNavn, DokumentTittel } from '../../typer';

const personopplysninger = {
  title: DokumentTittel.OM_DEG_PERSONOPPLYSNINGER,
  name: DokumentNavn.OM_DEG_PERSONOPPLYSNINGER,
  type: 'document',
  fields: [
    { title: 'Alert', name: 'alert', type: CustomSanityTyper.ALERT_BLOCK },
    {
      title: 'Ident',
      name: 'ident',
      type: 'localeString',
    },
    {
      title: 'Statsborgerskap',
      name: 'statsborgerskap',
      type: 'localeString',
    },
    {
      title: 'Sivilstatus',
      name: 'sivilstatus',
      type: 'localeString',
    },
    {
      title: 'Adresse',
      name: 'adresse',
      type: 'localeString',
    },
  ],
};

export default personopplysninger;
