import { DokumentNavn, Steg } from '../../typer';
import localeblock from '../localeblock';
import sporsmalDokument from '../sporsmalDokument';

const leggTilBarnModal = [
  localeblock(Steg.FELLES, DokumentNavn.MODAL_LEGG_TIL_BARN_TITTEL),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_LEGG_TIL_BARN_SPORSMAL),
  localeblock(Steg.FELLES, DokumentNavn.MODAL_LEGG_TIL_BARN_ANDRE_TEKSTER),
];
export default leggTilBarnModal;
