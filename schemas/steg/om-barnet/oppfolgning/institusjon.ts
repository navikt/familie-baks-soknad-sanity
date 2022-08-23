import sporsmalMedFeilmeldingString from '../../../felles/sporsmalMedFeilmeldingString';
import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../../typer';
import opplysningspaminnelse from './opplysningspaminnelse';

const institusjon: StegDokument = {
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_INSTITUSJON,
  name: DokumentNavn.OM_BARNET_INSTITUSJON,
  type: SanityTyper.DOCUMENT,
  fields: [
    opplysningspaminnelse,
    {
      name: 'institusjonIUtland',
      title: 'Institusjon er i utlandet checkbox',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule =>
        Rule.required().error('Du må fylle inn checkboxlabel for institusjon i utland'),
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn label'),
        },
      ],
    },
    {
      name: 'navn',
      title: 'Navn på institusjon',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingString],
    },
    {
      name: 'adresse',
      title: 'Adresse til institusjon',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingString],
    },
    {
      name: 'postnummer',
      title: 'Postnummer til institusjon',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingString],
    },
    {
      name: 'oppholdStartdato',
      title: 'Startdato for opphold',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingString],
    },
    {
      name: 'oppholdSluttdato',
      title: 'Sluttdato for opphold',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [
        ...sporsmalMedFeilmeldingString,
        {
          name: 'ukjentSluttdatoLabel',
          title: 'Label for ukjent sluttdato checkbox',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn label'),
        },
      ],
    },
  ],
};

export default institusjon;
