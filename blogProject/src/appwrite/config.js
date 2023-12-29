import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.VITE_APPWRITE_URL)
        .setProject(conf.VITE_APPWRITE_PROJECT_ID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.VITE_APPWRITE_BUCKET_ID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async CreatePost ({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.VITE_APPWRITE_DATABASE_ID,
                conf.VITE_APPWRITE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
            return false
        }
    }
}

const service = new Service();
export default service;