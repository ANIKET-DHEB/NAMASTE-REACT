import { useRouteError } from "react-router";

const Error = () =>{
    const err = useRouteError();
    console.log(err)
    return(
        <div>
            <h1>Opps!!!</h1>
            <h2>Something Went Wrong</h2>
            <h1>
                {err.status}:{err.statusText}
            </h1>
        </div>
    )
}

export default Error;