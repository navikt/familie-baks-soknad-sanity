import {
  DokumentNavn,
  dokumentTittel,
  StegDokument,
  Steg,
  SanityTyper,
  CustomSanityTyper,
} from '../../typer';

const fellesVedleggFelter = {
  options: {
    collapsable: true,
    collapsed: true,
  },
  validation: rule => rule.required().error('Du må fylle inn vedlegg'),
  fields: [
    {
      title: 'Tittel',
      name: 'tittel',
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn tittel til vedlegget'),
    },
    {
      title: 'Beskrivelse',
      name: 'beskrivelse',
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(frivillig)',
    },
  ],
};

const vedlegg: StegDokument = {
  steg: Steg.DOKUMENTASJON,
  title: dokumentTittel.DOKUMENTASJON_VEDLEGG,
  name: DokumentNavn.DOKUMENTASJON_VEDLEGG,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Avtale om delt bosted',
      name: 'avtaleDeltBosted',
      type: SanityTyper.OBJECT,
      ...fellesVedleggFelter,
    },
    {
      title: 'Vedtak om oppholdstillatelse',
      name: 'vedtakOppholdstillatelse',
      type: SanityTyper.OBJECT,
      ...fellesVedleggFelter,
    },
    {
      title: 'Datobekreftelse ved adopsjon',
      name: 'datoAdopsjonBekreftelse',
      type: SanityTyper.OBJECT,
      ...fellesVedleggFelter,
    },
    {
      title: 'Bekreftelse fra barnevern',
      name: 'barnevernBekreftelse',
      type: SanityTyper.OBJECT,
      ...fellesVedleggFelter,
    },
    {
      title: 'Bekreftelse på at barn bor med søker',
      name: 'barnBorMedSokerBekreftelse',
      type: SanityTyper.OBJECT,
      ...fellesVedleggFelter,
    },
    {
      title: 'Dokumentasjon på separasjon, skilsmisse eller dødsfall',
      name: 'separasjonSkilsmisseDodsfall',
      type: SanityTyper.OBJECT,
      ...fellesVedleggFelter,
    },
    {
      title: 'Annen dokumentasjon',
      name: 'annenDokumentasjon',
      type: SanityTyper.OBJECT,
      ...fellesVedleggFelter,
    },
  ],
};

export default vedlegg;
