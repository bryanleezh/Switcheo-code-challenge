import React from "react";
import { Resource } from "../utils/types";
import { useEffect, useState } from "react";
import { getAllResources } from "../service/queries";

export default function ViewAllResource() {
    const [ resources, setResources ] = useState<Resource[]>([]);

    useEffect(() => {
        async function fetchResources() {
            try {
                const data = await getAllResources();
                setResources(data);
            } catch (error: any) {
                console.error(error.message);
            }
        }
        fetchResources();
    }, []);

    return (
        <div>
            <h1 className="p-4"><b>All Resources</b></h1>

            {resources.length > 0 ? (
                <ul>
                    {resources.map((resource: Resource) =>  
                        <li key={resource.id} className="p-5"> 
                            Title : {resource.title}
                            <br />
                            Body : {resource.body}
                        </li>
                    )}
                </ul>
            ) : ( 
                <div className="p-4">
                    <p>Resources are currently empty, if you have yet to start the chain, use 'ignite chain serve' to start! Otherwise, create a Resource and refresh the page!</p>
                </div>
            )}
        </div>
    )
}