import * as TE from 'fp-ts/lib/TaskEither';
import * as E from "fp-ts/lib/Either";

export type Response<T> = E.Either<never, T>;

class HttpsClass {
  get = (path: string): Promise<Response<any>> => TE.right({ loggedIn: true })();
}

export const Https = new HttpsClass();
// pipe(
//   taskEither(fetch(`${path}`)),
//   TE.chain(res => taskEither(res.json())),
//   TE.fold(
//     err => TE.left(`Error fetching data!\nerror = ${err}`),
//     data => TE.right(data)
//   ) 
// )