import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

// router.beforeEach((to, from, next) => {
// 	const onlyLoggedOut = to.matched.some((record) => record.meta.onlyLoggedOut)
// 	const isPublic = to.matched.some((record) => record.meta.public)
// 	const authenticated = localStorage.getItem('authcode')

// 	if (!isPublic && !authenticated) {
// 		return next({ name: 'main' })
// 	}
// 	if (onlyLoggedOut && authenticated) {
// 		return next({ name: 'real-state-development' })
// 	}

// 	return next()
// })

export default router
