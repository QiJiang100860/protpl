// 项目通用配置
module.exports = {
    baseUrl: process.env.NODE_ENV == 'development' ? "http://local" : "http://online",
    frame: {
        // 左部菜单
        left: true,
        // 头部
        header: true,
        // 底部
        footer: true,
        // 菜单
        nav: true,
        // 页面定位
        breadcrumb: false
    },
    other: {

    }
}