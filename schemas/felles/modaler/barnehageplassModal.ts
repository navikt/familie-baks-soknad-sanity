import { DokumentNavn, Steg } from '../../typer';
import localeBlockForStegDokument from '../localeBlockForStegDokument';
import localeStringForStegDokument from '../localeStringForStegDokument';
import sporsmalDokument from '../sporsmalDokument';

const barnehageplassModal = [
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_BARNEHAGEPLASS_TITTEL),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_BARNEHAGEPLASS_SPORSMAL),
  localeStringForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_BARNEHAGEPLASS_BESKRIVELSE_VALGALTERNATIVER,
  ),
];

export default barnehageplassModal;
