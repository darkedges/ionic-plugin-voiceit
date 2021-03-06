import { IonicNativePlugin } from '@ionic-native/core';
import { APIDetails, ContentLanguage, Enrollment } from './interfaces'

export { APIDetails, ContentLanguage, Enrollment } from './interfaces'

export declare class VoiceIt extends IonicNativePlugin {
    getUser(options: APIDetails): Promise<any>;
    deleteUser(options: APIDetails): Promise<any>;
    createUser(options: APIDetails): Promise<any>;
    getEnrollments(options: APIDetails): Promise<any>;
    createEnrollment(options: ContentLanguage): Promise<any>;
    deleteEnrollment(options: Enrollment): Promise<any>;
    authentication(options: ContentLanguage): Promise<any>;
    playback(): Promise<any>;
}
