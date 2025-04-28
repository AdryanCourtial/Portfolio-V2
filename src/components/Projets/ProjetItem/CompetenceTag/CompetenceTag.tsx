"use client";

import "./CompetenceTag.css"
import React from "react"

interface Props {
    children: string
}

const CompetenceTag: React.FC<Props> = ({ children }) => {
    return (
        <div className="text-white text-sm p-1 px-2 rounded-2xl competence">
            {children}
        </div>
    )
}

export default CompetenceTag