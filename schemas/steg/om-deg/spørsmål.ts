import spørsmålDokumentBase from '../../spørsmålDokumentBase';
import { DokumentNavn, SpørsmålTemplate } from '../../typer';

const spørsmål: SpørsmålTemplate = {
  ...spørsmålDokumentBase,
  name: DokumentNavn.OM_DEG_SPØRSMÅL,
};

export default spørsmål;
