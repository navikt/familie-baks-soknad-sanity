import localeBlockForStegDokument from '../felles/localeBlockForStegDokument';
import localeStringForStegDokument from '../felles/localeStringForStegDokument';
import { DokumentNavn, Steg } from '../typer';

const forside = [
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_VEILEDERHILSEN),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_TITTEL),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_SPRAKVELGER),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_PUNKTLISTE),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_BEKREFTELSESBOKS_BRODTEKST),
  localeStringForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_BEKREFTELSESBOKS_ANDRE_TEKSTER),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_PERSONOPPLYSNINGSLENKE),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_MELLOMLAGRET_ALERT),
];

export default forside;
