import React from 'react';

import { CustomSanityTyper, EFlettefelt, SanityTyper } from '../typer';

const customBlock = {
  title: 'Custom block',
  name: CustomSanityTyper.CUSTOM_BLOCK,
  type: SanityTyper.ARRAY,
  of: [
    {
      type: SanityTyper.BLOCK,
      marks: {
        annotations: [
          {
            name: 'link',
            type: SanityTyper.OBJECT,
            title: 'Ekstern lenke',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                title: 'Åpne i ny tab',
                name: 'blank',
                type: 'boolean',
                initialValue: true,
              },
            ],
          },
          {
            name: 'flettefelt',
            type: SanityTyper.OBJECT,
            title: 'Flettefelt',
            icon: () => <span>F</span>,
            fields: [
              {
                name: 'flettefeltVerdi',
                type: SanityTyper.STRING,
                title: 'Flettefeltverdier',
                validation: Rule => Rule.required().error('Du må velge gyldig flettefelt!'),
                options: {
                  list: [
                    { title: 'Barnets navn', value: EFlettefelt.BARN_NAVN },
                    { title: 'Søkers navn', value: EFlettefelt.SØKER_NAVN },
                    { title: 'Ytelse', value: EFlettefelt.YTELSE },
                    { title: 'Ytelse i bestemt form', value: EFlettefelt.YTELSE_BESTEMT_FORM },
                    { title: 'i/utenfor', value: EFlettefelt.I_UTENFOR },
                    {
                      title: 'du / den andre forelderen / omsorgspersonen',
                      value: EFlettefelt.PERSONTYPE,
                    },
                    { title: 'Utlandet/Norge', value: EFlettefelt.UTLANDET_NORGE },
                    { title: 'Antall', value: EFlettefelt.ANTALL },
                    { title: 'Total antall', value: EFlettefelt.TOTAL_ANTALL },
                    { title: 'Klokkeslett', value: EFlettefelt.KLOKKESLETT },
                    { title: 'Dato', value: EFlettefelt.DATO },
                    { title: 'Land', value: EFlettefelt.LAND },
                  ],
                },
              },
            ],
          },
        ],
      },
    },
  ],
};

export default customBlock;
