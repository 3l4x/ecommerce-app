import { Home, Register, Login, Checkout, NotFound } from '../views/index.js';


export const STORE_NAME = 'Ecommerce app'

/* ROUTES */
export const routes = [
    {
      path: '/',
      view: Home,
      layoutType: 'base',
    },
    {
      path: '/register',
      view: Register,
      layoutType: 'base',
    },
    {
      path: '/login',
      view: Login,
      layoutType: 'base',
    },
    {
      path: '/checkout',
      view: Checkout,
      layoutType: 'minimal',
    },
    {
      path: '/*',
      view: NotFound,
      layoutType: 'base',
    }
  ]
  /* ROUTES END */

/* HEADER */

export const pages = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'Login',
        url: '/login'
    },
    {
        name: 'Register',
        url: '/register'
    },
    {
        name: 'Checkout',
        url: '/checkout'
    },
    {
        name: 'Cart',
        url: '/cart'
    },
    {
        name: 'Shop',
        url: '/shop'
    },
];
export const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

/* HEADER END */



/* FOOTER */

export const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },

    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];

/* FOOTER END */


/* CHECKOUT */

export const steps = ['Shipping address', 'Payment details', 'Review your order'];

/* CHECKOUT END */