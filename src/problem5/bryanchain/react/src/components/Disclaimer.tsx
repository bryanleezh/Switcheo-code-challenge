import React from "react";
import { DisclaimerProps } from "../utils/types";

export default function Disclaimer( { title, description } : DisclaimerProps ) {
    return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="max-w-screen-lg mx-auto grid gap-4">
                <div className="grid gap-1.5">
                    <h4 className="font-semibold text-red-700">{title}</h4>
                    <p className="text-sm text-red-600">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}