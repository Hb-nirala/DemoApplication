// Import necessary modules
import ReactNativeLocalization from 'react-native-localization';
import en from '../../../locales/en.json';
import fr from '../../../locales/fr.json';
import ar from '../../../locales/ar.json';

// Configure the library with language files
const localization = new ReactNativeLocalization({
    en, // English
    fr, // French
    ar, //Arabic
});
// Render your app
// ...
export default localization
