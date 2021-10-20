import React, { useEffect, useState } from 'react'

export default function MagicInput({label, name, value, onChange}) {
    const [isLabel, setIsLabel] = useState(true);
    useEffect(() => {
        checkValue()
    }, [value])

    const checkValue = () => {
        if(value !== ""){
            setIsLabel(false)
          }else{
            setIsLabel(true)
        }
    }
    return (
        <div className="input-control">
            <label className={`${!isLabel ? "up" : ""}`} htmlFor={name} onClick={() => setIsLabel(false)}>{label}</label>
            <input type="text" name={name} id={name} value={value} onChange={(e) => onChange(e)} className="form-control" onFocus={() => setIsLabel(false)} onBlur={() => checkValue()}/>
        </div>
    )
}
