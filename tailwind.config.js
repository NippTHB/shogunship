/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: '0px',
  			md: '0px',
  			sm: '0px',
        DEFAULT: '0px',
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
        // Valley palette
        'v-sky': '#1A2B50',
        'v-beige': '#C4C1B1',
        'v-brass': '#C1A562',
        'v-brown': '#6A4A3A',
        'v-jade': '#69A18E',
        'v-mid': '#3D5A3E',
        'v-light': '#d4d1c1',
        'v-dark': '#0d1828',
  		},
  		fontFamily: {
  			heading: ['DotGothic16', 'sans-serif'],
  			body: ['Space Mono', 'monospace'],
  			display: ['DotGothic16', 'sans-serif'],
  			sans: ['Space Mono', 'monospace'],
  			mono: ['Space Mono', 'monospace'],
  		},
      boxShadow: {
        xs: '4px 4px 0px 0px hsl(var(--foreground))',
        sm: '6px 6px 0px 0px hsl(var(--foreground))',
      },
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
