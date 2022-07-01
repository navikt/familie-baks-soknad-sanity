import spørsmålBase from '../../spørsmålBase';
import { SpørsmålTemplate, Steg } from '../../typer';

const spørsmål: SpørsmålTemplate = {
  ...spørsmålBase,
  name: `sporsmal_${Steg.DIN_LIVSSITUASJON}`,
};

export default spørsmål;
