import {RouteRecordRaw} from 'vue-router'
import {RouterTransition} from '@/components/transition'

const routeName = 'system'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/system',
        name: routeName,
        redirect: '/system/watermark',
        component: RouterTransition,
        meta: {
            title: '系统管理',
            icon: 'SettingOutlined'
        },
        children: [
            {
                path: 'watermark',
                name: `${routeName}-watermark`,
                meta: {
                    title: '水印设置',
                    icon: 'FileProtectOutlined',
                    isGroup: true,
                },
                component: RouterTransition,
                children: [
                    {
                        path: 'filemark',
                        name: `${routeName}-watermark-filemark`,
                        meta: {
                            title: '打印水印',
                            icon: 'DesktopOutlined',
                            watermarkType: 'filemark'
                        },
                        component: require('@/views/system/watermark/watermark.vue').default
                    },
                    {
                        path: 'docmark',
                        name: `${routeName}-watermark-docmark`,
                        meta: {
                            title: '文档水印',
                            icon: 'DesktopOutlined',
                            watermarkType: 'docmark'
                        },
                        component: require('@/views/system/watermark/watermark.vue').default
                    }
                ]
            },
            {
                path: 'config',
                name: `${routeName}-config`,
                meta: {
                    title: '系统配置',
                    icon: 'ToolOutlined',
                },
                component: require('@/views/system/config/index.vue').default
            }
        ]
    }
]

export default routes
