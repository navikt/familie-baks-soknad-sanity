import localeBlockForStegDokument from '../felles/localeBlockForStegDokument';
import { DokumentNavn, Steg } from '../typer';

const kvittering = [
  localeBlockForStegDokument(Steg.KVITTERING, DokumentNavn.KVITTERING_TITTEL),
  localeBlockForStegDokument(Steg.KVITTERING, DokumentNavn.KVITTERING_ANDRE_TEKSTER),
];

export default kvittering;
