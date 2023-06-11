import 'express-session';

declare module 'express-session' {
  export interface SessionData {
    email: string;
    // add more properties to extend session data
  }
}
