import axios from "axios";
// import { Resource } from "bryanchain-client-ts/lib/bryanchain.bryanchain/module";
import { Resource } from "../utils/types";
const url = "http://0.0.0.0:1317/"

export async function getAllResources(): Promise<Resource[]> {
    let api_url = url + "bryanchain/bryanchain/resource";
    try {
        const response = await axios.get(api_url);
        console.log("Get all resources",response.data.Resource);
        return response.data.Resource;
    } catch (error: any) {
        throw new Error("Error fetching resources: " + error.message);
    }
}

export async function getResourceById(id: number) : Promise<Resource>{
    let api_url = url + "bryanchain/bryanchain/resource/" + id;
    try {
        const response = await axios.get(api_url);
        console.log("Get all resources",response);
        return response.data;
    }catch (error: any) {
        throw new Error("Error fetching resources: " + error.message);
    }
}

export async function createResource() {

}

export async function updateResource() {

}

export async function deleteResource() {

}