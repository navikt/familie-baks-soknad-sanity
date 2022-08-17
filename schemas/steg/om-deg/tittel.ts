import stegTittelDokument from '../../felles/stegTittelDokument';
import { DokumentNavn, dokumentTittel, StegDokument, Steg } from '../../typer';

const tittel: StegDokument = {
  ...stegTittelDokument,
  steg: Steg.OM_DEG,
  title: dokumentTittel.OM_DEG_TITTEL,
  name: DokumentNavn.OM_DEG_TITTEL,
};

export default tittel;
