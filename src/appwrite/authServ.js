import Environment from "../environment/Environment";
import { ID, Client, Account } from "appwrite";

export class AuthServe {
  authClient = new Client();
  authAccount;
  constructor() {
    this.authClient
      .setEndpoint(Environment.endpontUrl)
      .setProject(Environment.projectId);
    this.authAccount = new Account(this.authClient);
  }

  async createAccount({ email, username, password }) {
    try {
      const account = await this.authAccount.create(
        ID.unique(),
        email,
        username,
        password
      );
      if (account) {
        this.authLogin({ email, password });
      } else {
        return account;
      }
    } catch (err) {
      console.log("authServe :: createAccount :: ", err);
    }
  }

  async authLogin(credentials) {
    try {
      return await this.authAccount.createEmailPasswordSession(
        credentials.email,
        credentials.password
      );
    } catch (err) {
      console.log("authServe :: authLogin :: ", err);
    }
  }
}

const authserv = new AuthServe();
export default authserv;
