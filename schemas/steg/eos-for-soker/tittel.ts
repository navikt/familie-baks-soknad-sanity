import stegTittelDokument from '../../felles/stegTittelDokument';
import { DokumentNavn, dokumentTittel, StegDokument, Steg } from '../../typer';

const tittel: StegDokument = {
  ...stegTittelDokument,
  steg: Steg.EØS_FOR_SØKER,
  title: dokumentTittel.EOS_FOR_SOKER_TITTEL,
  name: DokumentNavn.EOS_FOR_SOKER_TITTEL,
};

export default tittel;
