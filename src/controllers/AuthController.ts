import { Route, Post, Body, Tags, Get } from 'tsoa';
import { User, UserModel } from '../models/User';
import { ISignUpInput } from '../schemas/auth';

@Tags('Auth')
@Route('auth')
export class AuthController {
  @Post('/sign-up')
  public async login(@Body() data: ISignUpInput) {
    const { email, password, latitude, longitude } = data;

    const user = new UserModel();
    user.email = email;
    user.password = password;
    user.longitude = longitude;
    user.latitude = latitude;
    await user.save();

    return {
      message: 'User saved successfully',
    };
  }

  @Get('/users')
  public async users() {
    const users = UserModel.find().lean();
    return {
      message: 'User saved successfully',
      data: users as unknown as User[],
    };
  }
}
