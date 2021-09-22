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
    res.write(HTML)
    await pause(1000)
    res.write(updateBlock(`<p>Well hello there</p>`))
    await pause(1000)
    res.write(updateBlock(`<p>Still watching?</p>`))
    await pause(1000)    
    res.write(updateBlock(`<p>Did you know that React streaming is just a load of script tags with replaceChildren?</p>`))
    await pause(1000)
    res.write(updateBlock(`<em>Still pretty cool though, right?</em>`))
    await pause(1000)
    res.write(updateBlock(`Let's see how long we can do this for`))
    await pause(1000)
    for (let i = 0; i < 20; i++) {
        res.write(updateBlock(`<em>That's been ${i+6} seconds</em>`))
        await pause(1000)
        
    }
    res.write(updateBlock(`<p><strong>OK, bored now</strong></p>`))
    res.end()
})