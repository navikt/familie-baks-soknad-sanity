import localeBlockForStegDokument from '../felles/localeBlockForStegDokument';
import localeStringForStegDokument from '../felles/localeStringForStegDokument';
import { DokumentNavn, Steg } from '../typer';

const oppsummering = [
  localeBlockForStegDokument(Steg.OPPSUMMERING, DokumentNavn.OPPSUMMERING_TITTEL),
  localeBlockForStegDokument(Steg.OPPSUMMERING, DokumentNavn.OPPSUMMERING_GUIDE),
  localeStringForStegDokument(Steg.OPPSUMMERING, DokumentNavn.OPPSUMMERING_ANDRE_TEKSTER),
];

export default oppsummering;
