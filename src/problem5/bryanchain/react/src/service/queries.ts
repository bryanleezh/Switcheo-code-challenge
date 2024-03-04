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

export async function createResource(title: string, body: string) {
    const creator = "cosmos1ucjj85v02u4zj3ueny67xdw3glzxl5j0ygqrv8"
    let api_url = url + "bryanchain/bryanchain/resource/";
    const req_body = {
        creator: creator,
        title: title,
        body: body,
    }
    try {
        const response = await axios.post(api_url, req_body);
        console.log("Get all resources",response);
        return response.data;
    }catch (error: any) {
        throw new Error("Error fetching resources: " + error.message);
    }
}

export async function updateResource() {

}

export async function deleteResource() {

}