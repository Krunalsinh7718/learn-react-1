import { Client, Account, Databases, ID, Storage } from "appwrite";
import conf from "../conf/conf.js";

export class OtherService {
    client = new Client();
    account;
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteProjectUrl)
            .setProject(conf.appwritePorjectId);

        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, slug, content, articleImageId, status, userId }) {
        try {
            return await this.databases.createDocument(
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
            return false;
        }
    }

    

    async getPost(id) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id);

        } catch (error) {
            console.log("Appwrite other service :: getPost :: error", error);
            return false;
        }
    }
    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite other service :: uploadFile :: error", error);
            return false;
        }
    }

    async getFile(fileId){
        try {
            return await storage.getFile(
                conf.appwriteBucketId, 
                fileId);
        } catch (error) {
            console.log("Appwrite other service :: getFile :: error", error);
            return false;
        }
    }


}

const service = new OtherService();
export default service;
