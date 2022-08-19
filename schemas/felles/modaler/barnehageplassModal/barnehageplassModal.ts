import {
  CustomSanityTyper,
  DokumentBase,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
} from '../../../typer';
import fellesFelterModal from '../fellesFelterModal';
import antallTimer from './antallTimer';
import beskrivelse from './beskrivelse';
import datoer from './datoer';
import offentligStotte from './offentligStotte';
import utlandet from './utlandet';

const barnehageplassModal: DokumentBase = {
  name: DokumentNavn.MODAL_BARNEHAGEPLASS,
  title: dokumentTittel.MODAL_BARNEHAGEPLASS,
  type: SanityTyper.DOCUMENT,
  fields: [
    ...fellesFelterModal,
    ...beskrivelse,
    ...utlandet,
    ...offentligStotte,
    ...datoer,
    ...antallTimer,
    {
      title: 'Legg til flere perioder spørsmål',
      name: 'flerePerioderSporsmal',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn spørsmål for flere perioder'),
    },
  ],
};

export default barnehageplassModal;
