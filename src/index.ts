import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
  * Developer Details for accessing the API
  */
export interface APIDetails {
    developerID: string,
    userId: string,
    password: string
}

/**
  * CreateEnrollment options
  */
  export interface ContentLanguage extends APIDetails {
    contentLanguage: string,
}

/**
  * DeleteEnrollment options
  */
  export interface Enrollment extends APIDetails {
    enrollmentId: string,
}

@Plugin({
    pluginName: 'VoiceIt',
    plugin: 'cordova-plugin-voiceit',
    pluginRef: 'VoiceIt',
    repo: 'https://github.com/voiceittech/cordova-plugin-voiceit',
    platforms: ['Android', 'iOS']
})
@Injectable()
export class VoiceIt extends IonicNativePlugin {
    @Cordova()
    getUser(options: APIDetails): Promise<any> {
        return;
    }

    @Cordova()
    deleteUser(options: APIDetails): Promise<any> {
        return;
    }

    @Cordova()
    createUser(options: APIDetails): Promise<any> {
        return;
    }

    @Cordova()
    getEnrollments(options: APIDetails): Promise<any> {
        return;
    }

    @Cordova()
    createEnrollment(options: Enrollment): Promise<any> {
        return;
    }

    @Cordova()
    deleteEnrollment(options: Enrollment): Promise<any> {
        return;
    }

    @Cordova()
    authentication(options: ContentLanguage): Promise<any> {
        return;
    }

    @Cordova()
    playback(): Promise<any> {
        return;
    }

}