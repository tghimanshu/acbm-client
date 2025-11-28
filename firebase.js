import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// config
/**
 * Firebase configuration object.
 *
 * Contains the API keys and identifiers for connecting to the Firebase project.
 * Values are loaded from environment variables.
 *
 * @constant {Object}
 * @property {string} apiKey - The Firebase API key.
 * @property {string} authDomain - The Firebase Auth domain.
 * @property {string} projectId - The Firebase Project ID.
 * @property {string} storageBucket - The Firebase Storage bucket.
 * @property {string} messagingSenderId - The Firebase Messaging Sender ID.
 * @property {string} appId - The Firebase App ID.
 * @property {string} measurementId - The Firebase Measurement ID.
 */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
};

// Initialize Firebase
/**
 * The initialized Firebase application instance.
 * @type {FirebaseApp}
 */
const app = initializeApp(firebaseConfig);

// exported all firebase parts
/**
 * The Firebase Analytics instance.
 * @type {Analytics}
 */
export const analytics = getAnalytics(app);

/**
 * The Firebase Auth instance.
 * Use this for authentication operations.
 * @type {Auth}
 */
export const auth = getAuth(app);

/**
 * The Firebase Firestore instance.
 * Use this for database operations.
 * @type {Firestore}
 */
export const db = getFirestore(app);
