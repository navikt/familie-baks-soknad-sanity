import spørsmålDokumentBase from '../../spørsmålDokumentBase';
import { DokumentNavn, SpørsmålTemplate } from '../../typer';

const spørsmål: SpørsmålTemplate = {
  ...spørsmålDokumentBase,
  name: DokumentNavn.DIN_LIVSSITUASJON_SPØRSMÅL,
};

export default spørsmål;
