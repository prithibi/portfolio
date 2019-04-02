import css from 'styled-jsx/css'
import theme from '../theme'

const style = css.global`
    @media only screen {
        .only-print {
            display: none;
        }
    }

    @media only print {
        * {
            text-rendering: optimizeLegibility;
        }

        html {
            position: static;
            min-height: 100%;
            font-size: 70%;
            overflow: initial;

        }

        body {
            position: static;
            overflow: auto;
            color: ${theme.print.color};
        }

        .alt {
            color: ${theme.print.colorAlt};
        }

        .only-screen {
            display: none;
        }
    }
`

export default () => (
    <>
        <style jsx>{style}</style>
    </>
)
