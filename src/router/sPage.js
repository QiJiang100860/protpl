const _import = file => () => import('@/views/' + file + '.vue')
module.exports = {
    desp: "单页面路由表",
    routers: [
        { path: '/login', name: 'login', component: _import('login/index') },
        { path: '/404', component: _import('errorPage/404'), hidden: true },
    ]
}

