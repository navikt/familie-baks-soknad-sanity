import localeblock from '../felles/localeblock';
import { DokumentNavn, Steg } from '../typer';

const kvittering = [
  localeblock(Steg.KVITTERING, DokumentNavn.KVITTERING_TITTEL),
  localeblock(Steg.KVITTERING, DokumentNavn.KVITTERING_ANDRE_TEKSTER),
];

export default kvittering;
