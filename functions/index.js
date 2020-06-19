const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello, ninja!");
});

const createNotification=(notification=>{
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc=>console.log('notification added ',doc));
})

// setting up a trigger
exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc=>{
    const project=doc.data();
    const notification={
        content:'added a new project',
        user:`${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
})

// trigger when user is created
exports.userJoined = functions.auth.user().onCreate(user=>{
    return admin.firestore().collection('users').doc(user.uid).get().then((doc)=>{
        const newUser=doc.data();
        const notification={
            content:'joined the party',
            user:`${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    })
})