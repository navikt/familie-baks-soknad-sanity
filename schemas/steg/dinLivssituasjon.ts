import localeBlockForStegDokument from '../felles/localeBlockForStegDokument';
import sporsmalDokument from '../felles/sporsmalDokument';
import { DokumentNavn, Steg } from '../typer';

const dinLivssituasjon = [
  localeBlockForStegDokument(Steg.DIN_LIVSSITUASJON, DokumentNavn.DIN_LIVSSITUASJON_TITTEL),
  sporsmalDokument(Steg.DIN_LIVSSITUASJON, DokumentNavn.DIN_LIVSSITUASJON_SPORSMAL),
];

export default dinLivssituasjon;
