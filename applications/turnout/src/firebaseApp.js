import firebase from 'firebase'

const config = {
apiKey: "AIzaSyAu2kGFivU7GZpVi_Z9xAHGbBJKk1fpX78",
authDomain: "turnout-ad2f4.firebaseapp.com",
databaseURL: "https://turnout-ad2f4.firebaseio.com",
projectId: "turnout-ad2f4",
storageBucket: "turnout-ad2f4.appspot.com",
messagingSenderId: "910993772637"
};

export const firebaseApp = firebase.initializeApp(config)