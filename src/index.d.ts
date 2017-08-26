import { IonicNativePlugin } from '@ionic-native/core';
import { APIDetails, Enrollment, ContentLanguage } from './index';

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
