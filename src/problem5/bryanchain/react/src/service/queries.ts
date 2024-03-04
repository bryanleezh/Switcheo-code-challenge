import axios from "axios";
const url = "http://0.0.0.0:1317"

export async function getAllResources() {
    let api_url = url + "bryanchain/bryanchain/resource";
    try {
        const response = await axios.get(api_url);
        console.log("Get all resources",response);
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function getResourceById(id: number) {
    let api_url = url + "bryanchain/bryanchain/resource/" + id;
    try {
        const response = await axios.get(api_url);
        console.log("Get all resources",response);
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function createResource() {

}

export async function updateResource() {

}

export async function deleteResource() {

}