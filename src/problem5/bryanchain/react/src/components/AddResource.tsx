import React, { FormEvent } from "react";
import { useEffect, useState } from "react";
import { createResource } from "../service/queries";

export default function AddResource() {
    const [ title, setTitle ] = useState<string>("");
    const [ body, setBody ] = useState<string>("");
    const [ generatedCLI, setGeneratedCLI ] = useState<string>("");
    
    // useEffect(() => {
        // async function newResource() {
        //     try {
        //         const data = await createResource();
        //     } catch (error: any) {
        //         console.error(error.message);
        //     }
        // }
        // newResources();
    // }, []);

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const generatedString = `"bryanchaind tx bryanchain create-resource '${title}' ${body} --from bryan --chain-id bryanchain"`;
        setGeneratedCLI(generatedString);
    }
    return (
        <div>
            <h1 className="p-5"><b>Create Resources</b></h1>
            <div className="flex flex-col justify-center p-4">
                <p>Unfortunately, when using createResource through querying, the creation does not happen, however, using the CLI message would create the resource.</p>
                <p>This form will generate the CLI command to input to create the resource:</p>
                <div className="flex justify-center items-center mt-5">
                    <form onSubmit={handleSubmit} className="border border-spacing-2 border-black p-4 rounded-lg">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="title">Title: </label>
                            <input id="title" placeholder="Enter your title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="body">Body: </label>
                            <input id="body" placeholder="Enter your text" value={body} onChange={(e) => setBody(e.target.value)}/>
                        </div>
                        <button type="submit" className="mt-2 font-normal text-md rounded-lg bg-black border-black text-white-1000 hover:scale-105 px-5 h-12 border-2">Generate</button>
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