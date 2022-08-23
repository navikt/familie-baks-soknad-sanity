import { CustomSanityTyper, SanityTyper, SpørsmålDokumentBase } from '../../../typer';
import fellesFelterModal from '../fellesFelterModal';
import arbeidsgiver from './arbeidsgiver';
import datoer from './datoer';
import hvilketLand from './hvilketLand';
import periodeAvsluttet from './periodeAvsluttet';

const arbeidsperiodeModal: SpørsmålDokumentBase = {
  type: SanityTyper.DOCUMENT,
  fields: [
    ...fellesFelterModal,
    ...periodeAvsluttet,
    ...hvilketLand,
    ...arbeidsgiver,
    ...datoer,
    {
      title: 'Legg til flere perioder spørsmål',
      name: 'flerePerioderSporsmal',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn spørsmål for flere perioder'),
    },
  ],
};

export default arbeidsperiodeModal;
