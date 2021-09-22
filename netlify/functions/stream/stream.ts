import { streamer } from "@netlify/functions";
import { HTML, updateBlock } from "./templates";

function pause(count: number) {
    return new Promise(resolve => setTimeout(resolve, count))
}

export const handler = streamer(async (event, res) => {
    console.log("incoming")
    console.log("event", event)
    res.setHeader("x-test", "value")
    res.setHeader("content-type", "text/html")
    await pause(1000)

    res.write(HTML)
    await pause(1000)
    res.write(updateBlock(`<p>Well hello there</p>`))
    await pause(1000)
    res.write(updateBlock(`<p>Still watching?</p>`))
    await pause(1000)
    res.write(updateBlock(`<p><strong>And we're done</strong></p>`))
    res.end()
})