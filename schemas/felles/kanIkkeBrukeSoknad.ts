import { DokumentNavn, Steg } from '../typer';

import localeBlockForStegDokument from './localeBlockForStegDokument';

const kanIkkeBrukeSoknad = [
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.KAN_IKKE_BRUKE_SOKNAD),
];

export default kanIkkeBrukeSoknad;
