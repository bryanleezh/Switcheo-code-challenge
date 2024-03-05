/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Disclaimer from "../components/Disclaimer";
import IgntAssets from "../components/IgntAssets";
import IgntTransactions from "../components/IgntTransactions";
import IgntTransfer from "../components/IgntTransfer";
import React from "react";

export default function PortfolioView() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="p-3">
          <Disclaimer title="This is a development page!" description="For more information on the blockchain, head over to the 'Data' tab. Oh, and connect the wallet in order to connect the blockchain!" />
        </div>
        <div className="grid grid-cols-2">
          <div>
            <IgntAssets className="px-2.5 mb-10" displayLimit={3} />
            <IgntTransactions className="px-2.5" />
          </div>
          <IgntTransfer className="px-2.5 w-4/6 mx-auto" />
        </div>
      </div>
    </div>
  );
}
