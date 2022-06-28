import S from '@sanity/desk-tool/structure-builder'

export default () =>
    S.list()
        .title('Base')
        .items([
            S.listItem()
                .title('Forside')
                .child(S.list()
                    .title('Innhold')
                    .items([
                        S.listItem()
                            .title('Bekreftelsesboks')
                            .child(S.documentWithInitialValueTemplate('forside-bekreftelsesboks')),
                        S.listItem()
                            .title('Punktliste')
                            .child(S.documentWithInitialValueTemplate('forside-punktliste')),
                        ])),
            S.listItem()
                .title('Om Deg')
                .child(S.list()
                    .title('Innhold')
                    .items([
                        S.listItem()
                            .title('Personopplysninger')
                            .child(S.documentWithInitialValueTemplate('om-deg-personopplysninger')),
                    ]),
                )
        ])