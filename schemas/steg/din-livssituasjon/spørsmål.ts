import spørsmålBase from '../../spørsmålBase';
import { DokumentNavn, SpørsmålTemplate } from '../../typer';

const spørsmål: SpørsmålTemplate = {
  ...spørsmålBase,
  name: DokumentNavn.DIN_LIVSSITUASJON_SPØRSMÅL,
};

export default spørsmål;
