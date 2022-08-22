import stegTittelDokument from '../../felles/stegTittelDokument';
import { DokumentNavn, dokumentTittel, StegDokument, Steg } from '../../typer';

const tittel: StegDokument = {
  ...stegTittelDokument,
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_TITTEL,
  name: DokumentNavn.OM_BARNET_TITTEL,
};

export default tittel;
