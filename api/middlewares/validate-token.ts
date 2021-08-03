import { Request, Response, NextFunction } from 'express';

import { db } from 'models/db';

import { createToken, getAccessToken, checkTokenExpiration, getUIDFromToken } from 'utils/jwt';
import errorGenerator from 'utils/error-generator';
import errorHandler from 'utils/error-handler';

async function validateToken(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const refreshToken = req.cookies['_rt'];
    const accessToken = getAccessToken(req.headers.authorization);

    if (!accessToken || !refreshToken) {
      throw errorGenerator({
        message: 'No token',
        code: 'no-token',
      });
    }

    const isAccessTokenExpired = await checkTokenExpiration(accessToken);

    let newAccessToken = '';

    if (isAccessTokenExpired) {
      const isRefreshTokenExpired = await checkTokenExpiration(refreshToken);
      const uid = getUIDFromToken(refreshToken);
      console.log(isRefreshTokenExpired);

      const userSnapshot = await db.User.findOne({
        attributes: ['refresh_token'],
        where: {
          id: uid,
        },
      });

      const refreshTokenOnDB = userSnapshot?.getDataValue('refresh_token');

      if (refreshToken !== refreshTokenOnDB) {
        res.clearCookie('_rt');
        throw errorGenerator({
          code: 'auth/unauthorized-token',
          message: 'Unauthorized refresh token',
        });
      }

      if (isRefreshTokenExpired) {
        const newRefreshToken = createToken('refresh', { uid });
        console.log('new: ' + newRefreshToken);
        await db.User.update(
          {
            refresh_token: newRefreshToken,
          },
          {
            where: {
              id: uid,
            },
          },
        );
        res.cookie('_rt', newRefreshToken, { httpOnly: true });
      }

      newAccessToken = createToken('access', { uid });
    }

    console.log(newAccessToken);

    next();
  } catch (err) {
    console.log(err);
    const { statusCode, errorMessage } = errorHandler(err.code);
    res.status(statusCode).json({ errorMessage });
  }
}

export default validateToken;
