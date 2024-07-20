export class ResAllUsersDto {
  constructor(userId: number, name: string, email: string) {
    this.userId = userId;
    this.name = name;
    this.email = email;
  }

  userId: number;
  name: string;
  email: string;
}
