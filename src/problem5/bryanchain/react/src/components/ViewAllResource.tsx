// import { Resource } from "bryanchain-client-ts/lib/bryanchain.bryanchain/module";
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
            <h1>All Resources</h1>
            <ul>
                {resources.map((resource: Resource) =>  
                    <li key={resource.id}> 
                        Title :{resource.title}
                        <br />
                        Body : {resource.body}
                    </li>
                )}
            </ul>
        </div>
    )
}