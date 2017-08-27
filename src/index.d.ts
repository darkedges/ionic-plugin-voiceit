import { IonicNativePlugin } from '@ionic-native/core';
export interface APIDetails {
    developerID: string;
    userId: string;
    password: string;
}
export interface ContentLanguage extends APIDetails {
    contentLanguage: string;
}
export interface Enrollment extends APIDetails {
    enrollmentId: string;
}
export declare class VoiceIt extends IonicNativePlugin {
    getUser(options: APIDetails): Promise<any>;
    deleteUser(options: APIDetails): Promise<any>;
    createUser(options: APIDetails): Promise<any>;
    getEnrollments(options: APIDetails): Promise<any>;
    createEnrollment(options: Enrollment): Promise<any>;
    deleteEnrollment(options: Enrollment): Promise<any>;
    authentication(options: ContentLanguage): Promise<any>;
    playback(): Promise<any>;
}
