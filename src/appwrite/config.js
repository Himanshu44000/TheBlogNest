import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    Client = new Client();
    databases;
    bucket;

    // This class is used to interact with Appwrite's databases and storage services.
    constructor() {
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            

        this.databases = new Databases(this.Client);
        this.bucket = new Storage(this.Client);
    }

    async createPost({ title, slug, content, featuredimage, status, userid, username }) {         
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredimage,
                    status,
                    userid,
                    username
                }
            );

    
        } catch (error) {
            console.error("Error creating post:", error);
        }

    }

    async updatePost(slug, { title, content, featuredimage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // Using slug as the document ID
                {
                    title,
                    content,
                    featuredimage,
                    status
                }
            );
        } catch (error) {
            console.error("Error updating post:", error);
        }
    }

    async deletePost(slug) {
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug 
            );
            return true;
        } catch (error) {
            console.error("Error deleting post:", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug 
            );
        } catch (error) {
            console.error("Error fetching post:", error);
            return false;
        }
    }

     async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }


    // File upload service  
 
   /*
 
 async uploadFile(file) {
    try {
        const uploaded = await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        );
        console.log("✅ File uploaded:", uploaded);
        return uploaded;
    } catch (error) {
        console.error(" Error uploading file:", error.message);
        throw new Error("File upload failed"); // force catch in calling func
    }
}


    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.error("Error deleting file:", error);
            return false;
        }
    }
     
    */
    

}
    

const service = new Service();

export default service;