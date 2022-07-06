import sporsmalDokument from '../../sporsmalDokument';
import { DokumentNavn, dokumentTittel, Steg, StegDokument } from '../../typer';

const spørsmål: StegDokument = {
  ...sporsmalDokument,
  steg: Steg.DIN_LIVSSITUASJON,
  title: dokumentTittel.DIN_LIVSSITUASJON_SPORSMAL,
  name: DokumentNavn.DIN_LIVSSITUASJON_SPORSMAL,
};

export default spørsmål;
