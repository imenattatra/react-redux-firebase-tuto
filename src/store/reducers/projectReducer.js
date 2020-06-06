const initState={
    project:[
        {id:1,title:'first project',content:'first project content'},
        {id:2,title:'second project',content:'second project content'},
        {id:3,title:'third project',content:'third project content'}
    ]
}
const projectReducer=(state=initState,action)=>{
    return state
}
export default projectReducer;