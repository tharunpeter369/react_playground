import React, { useCallback, useMemo, useState } from 'react'

function UseCallBack() {
    let [mystate, setMystate] = useState(true)
    let arrayData = ["tharun", "thanusha", "mini", "peter"]

    const findLongestName = ((data) => {
        if (!data) return null;
        let longest = ""
        for (let i = 0; i < data.length; i++) {
            if (data[i].length > longest.length) {
                longest = data[i]
            }
        }
        console.log('this was computed');
        return longest
    })

    let result = useCallback(() => findLongestName(arrayData))

    return (
        <>
            <div>UseMemo</div>
            <h3>{result()}</h3>
            <h4>check rerederstat : </h4>
            <button onClick={() => setMystate(!mystate)}>change state</button>
        </>
    )
}

export default UseCallBack