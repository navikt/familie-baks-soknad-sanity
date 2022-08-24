import stegTittelDokument from '../../felles/stegTittelDokument';
import { DokumentNavn, dokumentTittel, StegDokument, Steg } from '../../typer';

const tittel: StegDokument = {
  ...stegTittelDokument,
  steg: Steg.KVITTERING,
  title: dokumentTittel.KVITTERING_TITTEL,
  name: DokumentNavn.KVITTERING_TITTEL,
};

export default tittel;
