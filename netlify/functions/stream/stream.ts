import { streamer } from "@netlify/functions";

function pause(count: number) {
    return new Promise(resolve => setTimeout(resolve, count))
}

export const handler = streamer(async (event, res) => {
    console.log("incoming")
    console.log("event", event)
    res.setHeader("x-test", "value")
    res.setHeader("content-type", "text/plain")
    res.write("first block")
    await pause(1000)
    res.write("second block")
    res.end()
})