import spørsmålBase from '../../spørsmålBase';
import { DokumentNavn, SpørsmålTemplate } from '../../typer';

const spørsmål: SpørsmålTemplate = {
  ...spørsmålBase,
  name: DokumentNavn.OM_DEG_SPØRSMÅL,
};

export default spørsmål;
