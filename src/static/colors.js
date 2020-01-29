export const theme = {
    colors: {
        primary: '#5755d9',
        secondary: '#f1f1fc',
        dark: '#454d5d',
        light: '#f8f9fa',
        sliver: '#C0C0C0',
        gray: '#676767',
        red: 'rgba(256, 0, 0, 0.5)',
        lightGray: '#D3D3D3',
        whiteSmoke: '   #F5F5F5',
        grey_blue: '#c2bcf2',
        yellow_green: '#4CC075',
        lightest_blue: '#65caec',
        lighter_blue: '#29B8E4',//used
        light_blue: '#69C3F6',//used
        blue: '#3fb8ee',
        dark_blue: '#003366',//used
        darkest_blue: '#13406e',
        purple: '#8f87e0',
        dark_purple: '#9c89f2',//used
        grey: '#becbd8',
        light_grey_opacity: 'rgba(190, 203, 216, 0.3)',
        light_grey: '#D0D3E2',//used
        dark_grey_blue: '#496d8e',
        light_green: '#7ad0ab',
        green: '#4CC075',//used
        water_green: 'rgb(49, 185, 201)',
        white: '#ffffff',//used
        ash: '#eaeaea',//used
        black: '#2f2f2f',
    },
    
    whiteOpacity: {
        one: 'rgba(255, 255, 255, 0.1)',
        three: 'rgba(255, 255, 255, 0.3)',
        five: 'rgba(255, 255, 255, 0.5)',
        seven: 'rgba(255, 255, 255, 0.7)',
        nine: 'rgba(255, 255, 255, 0.9)'
    },

    blueOpacity: {
        one: 'rgba(0, 51, 102, 0.1)',
        three: 'rgba(0, 51, 102, 0.3)',
        five: 'rgba(0, 51, 102, 0.5)',
        seven: 'rgba(0, 51, 102, 0.8)',
        nine: 'rgba(0, 51, 102, 0.9)'
    },

    fontSize: {
        hg: '32px',
        md: '24px',
        sm: '18px',
        tn: '14px',
    },
}

export const getFontSize = size => props => props.theme.fontSize[size]
export const getColor = color => props => props.theme.color[color]

