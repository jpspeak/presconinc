import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    'html, body': {
      minW: 'xs',
      minH: '100vh',
      color: 'blackAlpha.800'
    }
  }
}

const colors = {
  brand: {
    10: '#E5E8EE',
    50: '#E9F0FB',
    100: '#C2D5F5',
    200: '#9ABAEE',
    300: '#739EE8',
    400: '#4B83E2',
    500: '#2468DB',
    600: '#1D53AF',
    700: '#163E83',
    800: '#0E2A58',
    900: '#07152C'
  }
}
const components = {
  Button: {
    sizes: {
      md: { fontSize: 'sm' }
    }
  }
}

const semanticTokens = {
  colors: {
    primary: {
      default: '#0A1D3D'
    }
  }
}

const theme = extendTheme({ semanticTokens, styles, colors, components })

export default theme
