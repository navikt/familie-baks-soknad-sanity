import stegTittelDokument from '../../felles/stegTittelDokument';
import { DokumentNavn, dokumentTittel, StegDokument, Steg } from '../../typer';

const tittel: StegDokument = {
  ...stegTittelDokument,
  steg: Steg.EØS_FOR_BARN,
  title: dokumentTittel.EOS_FOR_BARN_TITTEL,
  name: DokumentNavn.EOS_FOR_BARN_TITTEL,
};

export default tittel;
