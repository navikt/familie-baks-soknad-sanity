import { DokumentNavn, Steg } from '../../typer';
import localeBlockForStegDokument from '../localeBlockForStegDokument';

const startPåNyttModal = [
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_START_PAA_NYTT_TITTEL),
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_START_PAA_NYTT_ANDRE_TEKSTER),
];

export default startPåNyttModal;
