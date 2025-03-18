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

  async createAccount({ email, name, password }) {
    try {
      console.log(password);
      const account = await this.authAccount.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (account) {
        return this.authLogin({ email, password });
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
  async getUserDetails() {
    try {
      const userdata = await this.authAccount.get();
      if (userdata) {
        return userdata;
      } else {
        return null;
      }
    } catch (error) {
      console.log("authServe :: getUserData :: ", error);
    }
  }

  async authLogout() {
    try {
      await this.authAccount.deleteSessions();
    } catch (error) {
      console.log("authServe :: authLogout :: ", error);
    }
  }
}

const authserv = new AuthServe();
export default authserv;
