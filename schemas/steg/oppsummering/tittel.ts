import stegTittelDokument from '../../felles/stegTittelDokument';
import { DokumentNavn, dokumentTittel, StegDokument, Steg } from '../../typer';

const tittel: StegDokument = {
  ...stegTittelDokument,
  steg: Steg.OPPSUMMERING,
  title: dokumentTittel.OPPSUMMERING_TITTEL,
  name: DokumentNavn.OPPSUMMERING_TITTEL,
};

export default tittel;
