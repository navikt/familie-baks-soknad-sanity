import stegTittelDokument from '../../felles/stegTittelDokument';
import { DokumentNavn, dokumentTittel, StegDokument, Steg } from '../../typer';

const tittel: StegDokument = {
  ...stegTittelDokument,
  steg: Steg.DIN_LIVSSITUASJON,
  title: dokumentTittel.DIN_LIVSSITUASJON_TITTEL,
  name: DokumentNavn.DIN_LIVSSITUASJON_TITTEL,
};

export default tittel;
