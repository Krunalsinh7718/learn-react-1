import {Account, Client, ID} from "appwrite";
import conf from "../conf/conf";



export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
        // console.log("client ",this.client);
        // this.account.get().then(data => console.log("data ",data))
        
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique() , email, password) // ID.unique() return unique id

            if(userAccount){
                //call another method
                return this.email(email, password);
            }else{
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
//             console.log("appwriteUrl", conf.appwriteUrl);
// console.log("appwriteProjectId", conf.appwriteProjectId);
// console.log("appwriteDatabaseID", conf.appwriteDatabaseID);
// console.log("appwriteCollectionId", conf.appwriteCollectionId);
// console.log("appwriteBucketId", conf.appwriteBucketId);
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ", error);
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions('current')
        } catch (error) {
            console.log("Appwrite service :: logout :: error ", error);
        }
    }

}

const authService = new AuthService();

export default authService;

