export type MetaConfig = {
    url: string;
    sitename: string;
    description: string;
    image: string;
    type?: string
    title?: string
    date?: string
}

export type NavigationRoute = {
    href: string;
    text: string;
}

export type NavigationConfig = {
    routes: NavigationRoute[]
}

export type Configuration = {
    meta: MetaConfig,
    navigation: NavigationConfig,
}


const config: Configuration = {
    meta: {
        url: process.env.NEXT_PUBLIC_APP_URL || 'https://functionalsapiens.com',
        sitename: 'Software engineering for the next generation - S3R0S4PI3NS',
        description: `Clean code lover and sometimes software engineer`,
        image: `${process.env.NEXT_PUBLIC_APP_URL}/static/images/banner.png`,
        type: 'website',
        title: "The place for programmers that want to reach the next level"
    },
    navigation: {
        routes: [{
            href: '/',
            text: 'Home'
        },
        ]
    },

}

export default config;