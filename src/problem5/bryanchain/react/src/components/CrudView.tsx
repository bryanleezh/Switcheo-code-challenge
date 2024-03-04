import React from "react";
import ViewAllResource from "./ViewAllResource";
import AddResource from "./AddResource";


export default function CrudView() {
    return (
        <div>
            <ViewAllResource />
            <AddResource />
        </div>
    )
}