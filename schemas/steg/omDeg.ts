import localeBlockForStegDokument from '../felles/localeBlockForStegDokument';
import localeStringForStegDokument from '../felles/localeStringForStegDokument';
import sporsmalDokument from '../felles/sporsmalDokument';
import { DokumentNavn, Steg } from '../typer';

const omDeg = [
  localeBlockForStegDokument(Steg.OM_DEG, DokumentNavn.OM_DEG_TITTEL),
  localeBlockForStegDokument(Steg.OM_DEG, DokumentNavn.OM_DEG_GUIDE),
  localeStringForStegDokument(Steg.OM_DEG, DokumentNavn.OM_DEG_PERSONOPPLYSNINGER),
  localeBlockForStegDokument(Steg.OM_DEG, DokumentNavn.OM_DEG_ANDRE_TEKSTER),
  sporsmalDokument(Steg.OM_DEG, DokumentNavn.OM_DEG_SPORSMAL),
];

export default omDeg;
