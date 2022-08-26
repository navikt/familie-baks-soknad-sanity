import localeblock from '../../felles/localeblock';
import { DokumentNavn, Steg } from '../../typer';
import spørsmål from './spørsmål';

const dinLivssituasjonDokumenter = [
  localeblock(Steg.DIN_LIVSSITUASJON, DokumentNavn.DIN_LIVSSITUASJON_TITTEL),
  spørsmål,
];

export default dinLivssituasjonDokumenter;
