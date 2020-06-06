const initState={
    projects:[
        {id:1,title:'first project',content:'first project content'},
        {id:2,title:'second project',content:'second project content'},
        {id:3,title:'third project',content:'third project content'}
    ]
}
const projectReducer=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('create project',action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error',action.error);
            return state;
        default:
            return state
    }

}
export default projectReducer;