import localeBlockForStegDokument from '../felles/localeBlockForStegDokument';
import localeStringForStegDokument from '../felles/localeStringForStegDokument';
import sporsmalDokument from '../felles/sporsmalDokument';
import { DokumentNavn, Steg } from '../typer';

const eosForBarn = [
  localeBlockForStegDokument(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_TITTEL),
  sporsmalDokument(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_SPORSMAL_OM_BARN),
  sporsmalDokument(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_SPORSMAL_OM_ANDRE_FORELDER),
  sporsmalDokument(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_SPORSMAL_OM_OMSORGSPERSON),
  localeStringForStegDokument(
    Steg.EØS_FOR_BARN,
    DokumentNavn.EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER,
  ),
  localeStringForStegDokument(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_ANDRE_TEKSTER),
];

export default eosForBarn;
