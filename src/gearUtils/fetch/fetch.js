import ApiProvider from "../apiMsc";
import {fetchMethod} from "./fetchMethod";






export function fetchApi(url,method,body) {
    let headers = fetchMethod(method,body);

    return(
        fetch(ApiProvider.Add +url, headers)
            .then(res => res.json())


    )
}

