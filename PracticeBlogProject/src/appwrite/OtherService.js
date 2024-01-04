import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";

export class OtherService {
    client = new Client();
    account;
    databases ;
    storage ;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteProjectUrl)
            .setProject(conf.appwritePorjectId);

        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, articleImageId, status, userId}){
        try {
            return await databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    articleImageId,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite other service :: createPost :: error", error);
            return false
        }
    }

    async uploadFile(){
        
const promise = storage.createFile(
    '[BUCKET_ID]',
    ID.unique(),
    document.getElementById('uploader').files[0]
);
    }
    

}

const service = new OtherService();
export default service;
