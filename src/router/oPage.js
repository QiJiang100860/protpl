module.exports = {
    desp: "项目辅助路由",
    routers: [
        {
            path: "/",
            redirect: 'login'
        },
        { path: '*', redirect: '/404', hidden: true }
    ]
}

