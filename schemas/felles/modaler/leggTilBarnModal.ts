import { DokumentNavn, Steg } from '../../typer';
import localeBlockForStegDokument from '../localeBlockForStegDokument';
import sporsmalDokument from '../sporsmalDokument';

const leggTilBarnModal = [
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_LEGG_TIL_BARN_TITTEL),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_LEGG_TIL_BARN_SPORSMAL),
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_LEGG_TIL_BARN_ANDRE_TEKSTER),
];
export default leggTilBarnModal;
