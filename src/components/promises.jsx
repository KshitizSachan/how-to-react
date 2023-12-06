import {useState} from 'react'

const PromisesAsyncAwait = () =>{
    const [flag1, setFlag1] = useState(false)
    const [flag2, setFlag2] = useState(false)

    const fetchFlag = () =>{
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                const temp="123"
                resolve(temp)
            }, 1000)
        })
    }

    const handlePromise = () =>{
        fetchFlag()
        .then((data) => {
            if(data == "123")
            setFlag1(true);
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    const handleAsyncAwait = async () =>{
        try {
            const data = await fetchFlag();
            if(data == "123")
            setFlag2(true);
        }catch(error) {
            console.log(error);
        }
        
    }

    return (
        <>
            <h3>Promise Usage</h3>
            <button onClick={handlePromise}>Click to start asyncronous task using promise</button>
            {flag1 && (
                <div>Code executed successfully using then and catch</div>
            )}
            <h3>Async Await Usage</h3>
            <button onClick={handleAsyncAwait}>Click to start asyncronous task using async await</button>
            {flag2 && (
                <div>Code executed successfully using then and catch</div>
            )}
        </>
    )
}

export default PromisesAsyncAwait;