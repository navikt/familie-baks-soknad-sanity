import { DokumentNavn, Steg } from '../../typer';
import localeblock from '../localeblock';
import localestring from '../localestring';
import sporsmalDokument from '../sporsmalDokument';

const barnehageplassModal = [
  localeblock(Steg.FELLES, DokumentNavn.MODAL_BARNEHAGEPLASS_TITTEL),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_BARNEHAGEPLASS_SPORSMAL),
  localestring(Steg.FELLES, DokumentNavn.MODAL_BARNEHAGEPLASS_BESKRIVELSE_VALGALTERNATIVER),
];

export default barnehageplassModal;
