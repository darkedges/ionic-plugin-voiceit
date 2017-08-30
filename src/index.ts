import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { APIDetails, ContentLanguage, Enrolment } from './interfaces'

@Plugin({
    pluginName: 'VoiceIt',
    plugin: 'cordova-plugin-voiceit',
    pluginRef: 'VoiceIt',
    repo: 'https://github.com/voiceittech/cordova-plugin-voiceit',
    platforms: ['Android', 'iOS', 'Browser']
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
    createEnrollment(options: ContentLanguage): Promise<any> {
        return;
    }

    @Cordova()
    deleteEnrollment(options: Enrolment): Promise<any> {
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
