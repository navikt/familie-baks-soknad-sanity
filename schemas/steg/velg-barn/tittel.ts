import stegTittelDokument from '../../felles/stegTittelDokument';
import { DokumentNavn, dokumentTittel, StegDokument, Steg } from '../../typer';

const tittel: StegDokument = {
  ...stegTittelDokument,
  steg: Steg.VELG_BARN,
  title: dokumentTittel.VELG_BARN_TITTEL,
  name: DokumentNavn.VELG_BARN_TITTEL,
};

export default tittel;
