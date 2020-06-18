// we use thunk so we can return a function not just an object
export const createProject = (project) =>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        // make async call to database
        const firestore = getFirestore();
        const profile=getState().firebase.profile;
        const authId=getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName:profile.firstName,
            authorLastName:profile.lastName,
            authorId:authId,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',project});
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err});
        })
    }
}