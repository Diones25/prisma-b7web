import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_KEY as string
}

export const jwtStrategy = new JWTStrategy(options, async (payload, done) => {
  console.log('paylod', payload);

});