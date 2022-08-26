import localeblock from '../../felles/localeblock';
import { DokumentNavn, Steg } from '../../typer';

const kvitteringDokumenter = [
  localeblock(Steg.KVITTERING, DokumentNavn.KVITTERING_TITTEL),
  localeblock(Steg.KVITTERING, DokumentNavn.KVITTERING_ANDRE_TEKSTER),
];

export default kvitteringDokumenter;
