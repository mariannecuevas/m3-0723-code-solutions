export default class ClientError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}
