import { Home, Register, Login, Checkout, NotFound, Products,Cart } from '../views/index.js';


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
      path: '/cart',
      view: Cart,
      layoutType: 'base',
    },
    {
      path: '/products',
      view: Products,
      layoutType: 'base',
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
        url: '/products'
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