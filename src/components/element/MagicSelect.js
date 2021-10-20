import React, { useEffect, useRef, useState } from 'react'

export default function MagicSelect({label, name, value, onChange, options}) {
    const [isLabel, setIsLabel] = useState(true);
    const ref = useRef(null);
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
            <label className={`${!isLabel ? "up" : ""}`} htmlFor={name} onClick={() => {setIsLabel(false);}}>{label}</label>
            <select name={name} ref={ref} id={name} value={value} onChange={(e) => onChange(e)} className="form-control" onFocus={() => setIsLabel(false)} onBlur={() => checkValue()}> 
                {options.map((option, index) =>     
                    <option key={`${option.country_code}${index}`} value={option.country_code}>{option.country_name}</option>
                )}
            </select>
        </div>
    )
}
