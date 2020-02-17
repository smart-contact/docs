module.exports = {
    base: '/sc-docs/',
    dest: 'sc-docs',
    title:'SmartContact | Docs',
    head: [
        ['link', { rel: 'icon', href: 'https://avatars2.githubusercontent.com/u/59726209?s=200&v=4' }]
    ],
    description:'This is description',
    themeConfig: {
        logo: 'https://avatars2.githubusercontent.com/u/59726209?s=200&v=4',
        nav: [
            { text: 'Home', link: '/' },
        ],
        sidebar: [
            ['/progetti/', 'Progetti'],
            ['/sviluppo/', 'Sviluppo'],
            ['/repository/', 'Repository'],
        ],
        smoothScroll: true
    },
};
