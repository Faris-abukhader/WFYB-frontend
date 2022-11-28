const backerList = [
    {
        title: 'Home',
        url: 'dashboard'
    },
    {
        title: 'Projects',
        url: 'dashboard/myProjects'
    },
    {
        title: 'Profile',
        url: 'dashboard/profile'
    },
]

const starterList = [
    {
        title: 'Home',
        url: 'dashboard'
    },
    {
        title: 'Invested projects',
        url: 'dashboard/investedProjects'
    },
    {
        title: 'BookMark',
        url: 'dashboard/bookmark'
    },
    {
        title: 'Profile',
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