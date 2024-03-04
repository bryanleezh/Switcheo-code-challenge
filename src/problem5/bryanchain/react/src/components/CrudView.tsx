import React from "react";
import ViewAllResource from "./ViewAllResource";
import AddResource from "./AddResource";
import DeleteResource from "./DeleteResource";
import UpdateResource from "./UpdateResource";


export default function CrudView() {
    return (
        <div>
            <ViewAllResource />
            <AddResource />
            <UpdateResource />
            <DeleteResource />
        </div>
    )
}