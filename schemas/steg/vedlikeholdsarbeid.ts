import localeBlockForStegDokument from '../felles/localeBlockForStegDokument';
import { DokumentNavn, Steg } from '../typer';

const vedlikeholdsarbeid = [
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.VEDLIKEHOLDSARBEID),
];

export default vedlikeholdsarbeid;
