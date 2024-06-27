import { DokumentNavn, Steg } from '../../typer';
import localeBlockForStegDokument from '../localeBlockForStegDokument';

const barnetrygdsperiodeModal = [
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_SOKER,
  ),
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_ANDRE_FORELDER,
  ),
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_OMSORGSPERSON,
  ),
];

export default barnetrygdsperiodeModal;
