import localeBlockForStegDokument from '../felles/localeBlockForStegDokument';
import localeStringForStegDokument from '../felles/localeStringForStegDokument';
import sporsmalDokument from '../felles/sporsmalDokument';
import { DokumentNavn, Steg } from '../typer';

const dinLivssituasjon = [
  localeBlockForStegDokument(Steg.DIN_LIVSSITUASJON, DokumentNavn.DIN_LIVSSITUASJON_TITTEL),
  localeBlockForStegDokument(Steg.DIN_LIVSSITUASJON, DokumentNavn.DIN_LIVSSITUASJON_GUIDE),
  sporsmalDokument(Steg.DIN_LIVSSITUASJON, DokumentNavn.DIN_LIVSSITUASJON_SPORSMAL),
  localeStringForStegDokument(
    Steg.DIN_LIVSSITUASJON,
    DokumentNavn.DIN_LIVSSITUASJON_ARSAK_ALTERNATIVER,
  ),
];

export default dinLivssituasjon;
