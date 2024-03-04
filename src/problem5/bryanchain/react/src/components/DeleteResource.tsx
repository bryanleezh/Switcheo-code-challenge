import React, { FormEvent } from "react";
import { useState } from "react";
import { deleteResource } from "../service/queries";

export default function DeleteResource() {
    const [ id, setId ] = useState<string>("");
    const [ generatedCLI, setGeneratedCLI ] = useState<string>("");
    
    // Create new resource with following resource
    // useEffect(() => {
        // async function newResource() {
        //     try {
        //         const data = await deleteResource();
        //     } catch (error: any) {
        //         console.error(error.message);
        //     }
        // }
        // newResources();
    // }, []);

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const generatedString = `"bryanchaind tx bryanchain delete-resource ${id} --from bryan --chain-id bryanchain"`;
        setGeneratedCLI(generatedString);
    }
    return (
        <div>
            <h1 className="p-5"><b>Delete Resource</b></h1>
            <div className="flex flex-col justify-center p-4">
                <p>Unfortunately, when using deleteResource through querying, the deletion does not happen, however, using the CLI message would delete the resource.</p>
                <p>This form will generate the CLI command to input to delete the resource:</p>
                <div className="flex justify-center items-center mt-5">
                    <form onSubmit={handleSubmit} className="w-1/2 border border-spacing-2 border-black p-4 rounded-lg">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="id">Id: </label>
                            <input id="id" placeholder="Enter the resource id you would like to delete" value={id} onChange={(e) => setId(e.target.value)}/>
                        </div>
                        <button type="submit" className="mt-4 font-normal text-md rounded-lg bg-black border-black text-white-1000 hover:scale-105 px-5 h-12 border-2 flex justify-center items-center mx-auto">Generate</button>
                    </form>
                </div>
                {generatedCLI && (
                    <div className="mt-4">
                        <p>CLI Command: </p>
                        <p className="p-2 flex flex-col bg-black text-white-1000 items-center justify-center">{generatedCLI}</p>
                    </div>
                )}
            </div>
        </div>
    )
}