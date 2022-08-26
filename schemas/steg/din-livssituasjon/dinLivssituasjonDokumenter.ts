import localeblock from '../../felles/localeblock';
import sporsmalDokument from '../../felles/sporsmalDokument';
import { DokumentNavn, Steg } from '../../typer';

const dinLivssituasjonDokumenter = [
  localeblock(Steg.DIN_LIVSSITUASJON, DokumentNavn.DIN_LIVSSITUASJON_TITTEL),
  sporsmalDokument(Steg.DIN_LIVSSITUASJON, DokumentNavn.DIN_LIVSSITUASJON_SPORSMAL),
];

export default dinLivssituasjonDokumenter;
