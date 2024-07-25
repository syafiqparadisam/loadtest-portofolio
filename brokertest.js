import { check } from "k6"
import http from "k6/http"

export const options = {
    stages: [
        { duration: "1d", target: 10000 },
        { duration: "10s", target: 0 }
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