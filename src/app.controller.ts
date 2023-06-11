import { Controller, Post, Session } from '@nestjs/common';
import { SessionData } from 'express-session';

@Controller()
export class AppController {
  // create session
  @Post('sign-in')
  signIn(@Session() session: SessionData) {
    // creates a session
    session.email = 'test@gmail.com';
  }
}
