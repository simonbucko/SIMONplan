const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


const createNotification = (notification) => {
    return admin.firestore().collection('notifications').add(notification)
        .then(doc => console.log('notification added'))
}

exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc => {
    const project = doc.data();
    const notification = {
        content: "Added a new project",
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
})

exports.userJoined = functions.auth.user().onCreate(async user => {


    const doc = await admin.firestore().collection('users').doc(user.uid).get();
    console.log(doc.data());
    const newUser = doc.data();
    const notification = {
        content: 'Joined the application',
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
})
