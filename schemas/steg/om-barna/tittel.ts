import stegTittelDokument from '../../felles/stegTittelDokument';
import { DokumentNavn, dokumentTittel, StegDokument, Steg } from '../../typer';

const tittel: StegDokument = {
  ...stegTittelDokument,
  steg: Steg.OM_BARNA,
  title: dokumentTittel.OM_BARNA_TITTEL,
  name: DokumentNavn.OM_BARNA_TITTEL,
};

export default tittel;
