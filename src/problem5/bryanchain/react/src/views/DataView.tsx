import CrudView from "../components/CrudView";
import IgntCrud from "../components/IgntCrud";
import React from "react";

export default function DataView() {
  return (
    <div>
      {/* Uncomment the following component to add a form for a `modelName` -*/}
      {/* <IgntCrud storeName="OrgRepoModule" itemName="modelName" />      */}
      <CrudView />
    </div>
  );
}
