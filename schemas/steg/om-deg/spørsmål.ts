import sporsmalDokument from '../../sporsmalDokument';
import { DokumentNavn, dokumentTittel, Steg, StegDokument } from '../../typer';

const spørsmål: StegDokument = {
  ...sporsmalDokument,
  steg: Steg.OM_DEG,
  title: dokumentTittel.OM_DEG_SPORSMAL,
  name: DokumentNavn.OM_DEG_SPORSMAL,
};

export default spørsmål;
