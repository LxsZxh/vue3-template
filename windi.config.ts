import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        ArialMT: 'ArialMT',
        Helvetica: 'Helvetica',
        RajdhaniMedium: 'Rajdhani-Medium',
        Basicaline: 'Basicaline',
      },
    },
  },
  shortcuts: {
    'forwards-1000': '!animate-fill-forwards !animate-duration-1000',
    'forwards-1500': '!animate-fill-forwards !animate-duration-1500',
    'forwards-2000': '!animate-fill-forwards !animate-duration-2000',
    'bg-my-cover': 'bg-no-repeat bg-center bg-cover',
    'bg-my-contain': 'bg-no-repeat bg-center bg-contain',
  },
})
