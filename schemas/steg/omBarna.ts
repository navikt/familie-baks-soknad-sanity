import localeBlockForStegDokument from '../felles/localeBlockForStegDokument';
import sporsmalDokument from '../felles/sporsmalDokument';
import { DokumentNavn, Steg } from '../typer';

const omBarna = [
  localeBlockForStegDokument(Steg.OM_BARNA, DokumentNavn.OM_BARNA_TITTEL),
  sporsmalDokument(Steg.OM_BARNA, DokumentNavn.OM_BARNA_SPORSMAL),
];

export default omBarna;
