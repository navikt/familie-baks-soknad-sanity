import {
  CustomSanityTyper,
  DokumentNavn,
  DokumentTittel,
  SanityTyper,
  StegDokument,
  StegTittel,
} from '../../typer';

const personopplysninger: StegDokument = {
  steg: StegTittel.OM_DEG,
  title: DokumentTittel.OM_DEG_PERSONOPPLYSNINGER,
  name: DokumentNavn.OM_DEG_PERSONOPPLYSNINGER,
  type: SanityTyper.DOCUMENT,
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
