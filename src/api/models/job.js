const job = [{
        url: 'job/coll',
        title: '收藏和取消收藏职位',
        method: 'post',
        name: 'jobColl'
    },
    {
        url: 'job/info',
        title: '查看职位详情',
        method: 'get',
        name: 'jobInfo'
    },
    {
        url: 'job/lists',
        title: '获取职位列表',
        method: 'get',
        name: 'jobList'
    },
    {
        url: 'job/typeList',
        title: '获取职位类型',
        method: 'get',
        name: 'jobType'
    }
]

export default job;