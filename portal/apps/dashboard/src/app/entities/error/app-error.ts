export class AppError extends Error {
  status: number | undefined;
  description = '';
  courtesyMessage = '';

  constructor(status: number | undefined, description: string, courtesyMessage: string = '') {
    super();
    this.status = status;
    this.description = description;
    this.courtesyMessage = courtesyMessage;
  }
}
