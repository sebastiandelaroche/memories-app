
import { GoogleSignin } from 'react-native-google-signin';

const url = 'https://www.googleapis.com/drive/v3'
const uploadUrl = 'https://www.googleapis.com/upload/drive/v3'

const handleError = response => {
  if (response.ok) {
    return response.json()
  }
  return response.json()
    .then((error) => {
      throw new Error(JSON.stringify(error))
    })
}

export class Google {

  static user = null;

  static async signIn() {

    try {

      // Validate google services.
      await GoogleSignin.hasPlayServices({ autoResolve: true });

      // Init configuration
      await GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive'],
        forceConsentPrompt: true
      });

      const user = Google.user = await GoogleSignin.signIn();
      return user;

    } catch (err) {
      throw err;
    }

  }

};

export class GoogleDrive {

  static token = '';

  set token(token) {
    GoogleDrive.token = token;
  }
  get token() {
    return GoogleDrive.token || (Google.user&&Google.user.accessToken);
  }

  confGetOptions() {
    const headers = new Headers()
    headers.append('Authorization', `Bearer ${this.token}`)
    return {
      method: 'GET', headers
    }
  }

  getFiles() {
    // const qParams = queryParams()
    const options = this.confGetOptions()
    return fetch(`${url}/files?fields=*`, options)
      .then(handleError)
      .then((body) => {
        if (body && body.files && body.files.length > 0) return body.files
        return null
      })
  }

}

export default {
  Google,
  GoogleDrive
}
