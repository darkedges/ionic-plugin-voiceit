/**
  * Developer Details for accessing the API
  */
  export interface APIDetails {
    developerID: string;
    userId: string;
    password: string;
  }

  /**
    * CreateEnrollment options
    */
  export interface ContentLanguage extends APIDetails {
    contentLanguage?: string;
  }

  /**
    * DeleteEnrollment options
    */
  export interface Enrollment extends APIDetails {
    enrollmentId: string;
  }
