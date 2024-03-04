import React from "react";
import ViewAllResource from "./ViewAllResource";
import AddResource from "./AddResource";
import DeleteResource from "./DeleteResource";


export default function CrudView() {
    return (
        <div>
            <ViewAllResource />
            <AddResource />
            <DeleteResource />
        </div>
    )
}