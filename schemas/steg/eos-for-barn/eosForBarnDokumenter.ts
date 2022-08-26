import localestring from '../../felles/localestring';
import { DokumentNavn, Steg } from '../../typer';
import andreForelder from './andreForelder';
import barn from './barn';
import omsorgsperson from './omsorgsperson';
import slektsforhold from './slektsforholdValgalternativer';

const eosForBarnDokumenter = [
  localestring(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_TITTEL),
  barn,
  andreForelder,
  omsorgsperson,
  slektsforhold,
];

export default eosForBarnDokumenter;
