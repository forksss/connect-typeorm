export interface ISession {
  expiredAt: number;

  id: string;

  destroyedAt?: Date;

  json: { [key:string]: any };
}
