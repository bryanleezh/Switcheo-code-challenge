import React from "react";
import ViewAllResource from "./ViewAllResource";
import AddResource from "./AddResource";
import DeleteResource from "./DeleteResource";
import UpdateResource from "./UpdateResource";
import Disclaimer from "./Disclaimer";


export default function CrudView() {
    return (
        <div>
            <div className="p-3">
                <Disclaimer 
                    title="Important: Your App binary would differ when running on a different machine!" 
                    description="Please check your app binary directory before running any of the CLI commands generated below."
                />
            </div>
            <ViewAllResource />
            <AddResource />
            <UpdateResource />
            <DeleteResource />
        </div>
    )
}