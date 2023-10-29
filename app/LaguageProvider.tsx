'use client'
import React,{useState} from "react";
import languageContext from "@/context/languageContext";

export function LanguageProvider({children}:any){
    const [spanish, setSpanish] = useState(false)
    return(
        <languageContext.Provider value={{spanish, setSpanish}}>{children}</languageContext.Provider>
    )
}