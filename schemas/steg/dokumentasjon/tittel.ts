import stegTittelDokument from '../../felles/stegTittelDokument';
import { DokumentNavn, dokumentTittel, StegDokument, Steg } from '../../typer';

const tittel: StegDokument = {
  ...stegTittelDokument,
  steg: Steg.DOKUMENTASJON,
  title: dokumentTittel.DOKUMENTASJON_TITTEL,
  name: DokumentNavn.DOKUMENTASJON_TITTEL,
};

export default tittel;
