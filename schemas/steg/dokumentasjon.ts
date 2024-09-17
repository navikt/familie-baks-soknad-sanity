import localeBlockForStegDokument from '../felles/localeBlockForStegDokument';
import localeStringForStegDokument from '../felles/localeStringForStegDokument';
import { DokumentNavn, Steg } from '../typer';

const dokumentasjon = [
  localeBlockForStegDokument(Steg.DOKUMENTASJON, DokumentNavn.DOKUMENTASJON_TITTEL),
  localeBlockForStegDokument(Steg.DOKUMENTASJON, DokumentNavn.DOKUMENTASJON_GUIDE),
  localeBlockForStegDokument(Steg.DOKUMENTASJON, DokumentNavn.DOKUMENTASJON_GUIDE_VEDLEGGSKRAV),
  localeBlockForStegDokument(
    Steg.DOKUMENTASJON,
    DokumentNavn.DOKUMENTASJON_GUIDE_INGEN_VEDLEGGSKRAV,
  ),
  localeBlockForStegDokument(Steg.DOKUMENTASJON, DokumentNavn.DOKUMENTASJON_INFO),
  localeBlockForStegDokument(
    Steg.DOKUMENTASJON,
    DokumentNavn.DOKUMENTASJON_SCANNING_GUIDE_TEKST_BLOKKER,
  ),
  localeStringForStegDokument(
    Steg.DOKUMENTASJON,
    DokumentNavn.DOKUMENTASJON_SCANNING_GUIDE_ENKLE_TEKSTER,
  ),
  localeStringForStegDokument(Steg.DOKUMENTASJON, DokumentNavn.DOKUMENTASJON_KNAPPER_OG_CHECKBOX),
  localeBlockForStegDokument(Steg.DOKUMENTASJON, DokumentNavn.DOKUMENTASJON_VEDLEGG_TITTEL),
  localeBlockForStegDokument(Steg.DOKUMENTASJON, DokumentNavn.DOKUMENTASJON_VEDLEGG_BESKRIVELSE),
];

export default dokumentasjon;
