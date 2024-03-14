import localeBlockForStegDokument from '../felles/localeBlockForStegDokument';
import localeStringForStegDokument from '../felles/localeStringForStegDokument';
import sporsmalDokument from '../felles/sporsmalDokument';
import { DokumentNavn, Steg } from '../typer';

const forside = [
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_VEILEDERHILSEN),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_VEILEDERINTRO),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_VEILEDER_HEI),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_TITTEL),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_TITTEL_BARNETRYGD),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_SPRAKVELGER),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_PUNKTLISTE),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_INFO_PLIKTER_TITTEL),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_INFO_PLIKTER),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_INFO_PERSONOPPLYSNINGER_TITTEL),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_INFO_PERSONOPPLYSNINGER),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_BEKREFTELSESBOKS_BRODTEKST),
  localeStringForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_BEKREFTELSESBOKS_ANDRE_TEKSTER),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_PERSONOPPLYSNINGSLENKE),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_MELLOMLAGRET_ALERT),
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_UTVIDET_BARNETRYGD_ALERT),
  sporsmalDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_SPORSMAL),
];

export default forside;
