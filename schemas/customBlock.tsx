import React from 'react';

import { rgba } from 'polished';

import { CustomSanityTyper, EFlettefelt, SanityTyper, Ytelse } from './typer';

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
            name: 'lenke',
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
            blockEditor: {
              icon: () => <span>F</span>,
              render: props => (
                <span
                  style={{
                    backgroundColor: rgba(30, 133, 209, 0.2),
                    color: 'black',
                    cursor: 'pointer',
                  }}
                >
                  {props.flettefeltVerdi}
                </span>
              ),
            },
            fields: [
              {
                name: 'flettefeltVerdi',
                type: SanityTyper.STRING,
                title: 'Flettefeltverdier',
                options: {
                  list: [
                    { title: 'Barnets navn', value: EFlettefelt.BARNETS_NAVN },
                    { title: 'Ytelse', value: EFlettefelt.YTELSE },
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
