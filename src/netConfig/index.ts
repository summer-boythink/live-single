interface ConfigInter {
    baseurl:string,
    channelKey:number,
    RtmpPort:number,
    FlvPort:number
}

const config:ConfigInter = {
    baseurl:"127.0.0.1",
    channelKey:8090,
    RtmpPort:1935,
    FlvPort:7001
}

export default config