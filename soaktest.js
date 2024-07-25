import { check } from "k6"
import http from "k6/http"

export const options = {
    stages: [
        {duration: "1m", target: 100},
        {duration: "1h", target: 300},
        {duration: "4m", target: 0}
    ]
}

export default function () {
    const url = __ENV.url
    const response = http.get(url)
    check(response, {
        "is status 200": r => r.status == 200
    })
    console.log(response)

}