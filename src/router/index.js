import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return new Promise((resolve) => {
          const element = document.querySelector(to.hash);

          if (element) {
            // Smoothly scroll to the element
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start', // You can adjust this as needed
            });

            // Wait for the scroll to finish before resolving
            setTimeout(() => {
              resolve({ el: to.hash });
            }, 500); // Adjust the delay to fit your needs
          } else {
            resolve({ el: to.hash });
          }
        });
      } else if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    },
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  return Router
})
