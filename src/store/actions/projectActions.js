// we use thunk so we can return a function not just an object
export const createProject = (project) =>{
    return(dispatch,getState,getFirebase,getFirestore)=>{
        // make async call to database
        dispatch({type:'CREATE_PROJECT',project});
    }
}