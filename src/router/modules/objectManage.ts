import {RouteRecordRaw} from 'vue-router'
import {RouterTransition} from '@/components/transition'
import {h} from 'vue'

const routeName = 'object'

const routes: Array<RouteRecordRaw> = [{
    path: '/object',
    name: routeName,
    redirect: '/object/terminal',
    component: h(RouterTransition, {notNeedKey: true}),
    meta: {
        title: '对象管理',
        icon: 'ApartmentOutlined'
    },
    children: [
        {
            path: 'terminal',
            name: `${routeName}-terminal`,
            meta: {
                title: '终端管理',
                icon: 'DesktopOutlined'
            },
            component: RouterTransition,
            children: [
                {
                    path: '',
                    name: `${routeName}-terminal-list`,
                    meta: {
                        title: '终端列表',
                        icon: 'HomeOutlined'
                    },
                    component: require('@/views/object/terminal/list.vue').default
                },
                {
                    path: ':pid',
                    name: `${routeName}-terminal-info`,
                    props: true,
                    meta: {
                        title: '终端详情',
                        icon: 'HomeOutlined',
                        hidden: true,
                    },
                    component: require('@/views/object/terminal/info.vue').default
                },
            ]
        },
        {
            path: 'department',
            name: `${routeName}-department`,
            meta: {
                title: '部门管理',
                icon: 'HomeOutlined'
            },
            component: RouterTransition,
            children: [
                {
                    path: '',
                    name: `${routeName}-department-list`,
                    meta: {
                        title: '部门列表',
                        icon: 'HomeOutlined'
                    },
                    component: require('@/views/object/department/list.vue').default
                },
                {
                    path: ':deptId',
                    name: `${routeName}-department-info`,
                    props: true,
                    meta: {
                        title: '部门详情',
                        hidden: true,
                        icon: 'HomeOutlined'
                    },
                    component: require('@/views/object/department/info.vue').default
                },
            ]
        },
        {
            path: 'role',
            name: `${routeName}-role`,
            meta: {
                title: '角色管理',
                icon: 'UserOutlined'
            },
            component: RouterTransition,
            children: [
                {
                    path: '',
                    name: `${routeName}-role-list`,
                    meta: {
                        title: '角色列表',
                        icon: 'HomeOutlined'
                    },
                    component: require('@/views/object/role/list.vue').default
                },
                {
                    path: ':uid',
                    name: `${routeName}-role-info`,
                    props: true,
                    meta: {
                        title: '角色详情',
                        hidden: true,
                        icon: 'HomeOutlined'
                    },
                    component: require('@/components/user/index.vue').default
                },
            ]
        }
    ]
}]

export default routes
