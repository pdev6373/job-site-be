import { Route, Post, Body, Tags } from 'tsoa';
import { UserModel } from '../models/User';
import { ISignUpInput } from '../schemas/auth';

@Tags('Auth')
@Route('auth')
export class AuthController {
  @Post('/sign-up')
  public async login(@Body() data: ISignUpInput) {
    const { email, password } = data;

    const user = new UserModel();
    user.email = email;
    user.password = password;
    await user.save();

    return {
      message: 'User saved successfully',
    };
  }
}
