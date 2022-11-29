const starterList = [
    {
        title: 'home',
        url: 'dashboard'
    },
    {
        title: 'projects',
        url: 'dashboard/myProjects'
    },
    {
        title: 'profile',
        url: 'dashboard/profile'
    },
]

const backerList = [
    {
        title: 'home',
        url: 'dashboard'
    },
    {
        title: 'investedProjects',
        url: 'dashboard/investedProjects'
    },
    {
        title: 'bookMark',
        url: 'dashboard/bookmark'
    },
    {
        title: 'profile',
        url: 'dashboard/profile'
    },
]

const getPagesList = (accountType)=>{
    switch(accountType){
        case 's':
            return starterList
        case 'b':
            return backerList
        default:
            return -1
    }

}

export default getPagesList