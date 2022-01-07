import Discord from './Discord.ts';
var title = 'Discord Latency Checker by https://github.com/Titan3301'
console.log(title);
function findstr(In:string,split:string,s:string):string {
    var IN = In.split(split);
    for (var i = 0; i < IN.length; i ++) {
        if (IN[i].includes(s)) {
            return IN[i];
        }
    }
    return '';
}
function filterNumbers(In:string){
    var out = '';
    var IN = In.split('');
    for( var i in IN) {
        if(!isNaN(Number(IN[i]))) out += IN[i];
    }
    return out;
}
async function Ping(addr:string) {
    var p = Deno.run({
        cmd:['ping' , addr, '-n', '1'],
        stdout:"piped"
    });
    var str = new TextDecoder();
    var s = str.decode(await p.output());
    var latency = Number(filterNumbers(findstr(s,'\x20','ms')))
    return latency;
}
function httpPing(addr:string , method:string) {
    return new Promise<number>((resolve , reject) => {
        var currentTime = new Date().getTime();
        fetch(addr , {
            method:method,
            headers:{
                'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
            }
        }).then(req => {
            var doneTime = new Date().getTime();
            resolve(doneTime-currentTime)
        })
    })
}
var handleHttp = (async function(url:string) {
    var methods = ['Get' , 'Put' , 'Post' , 'Delete' , 'Patch'];
    for (var i = 0; i < methods.length; i++) {
        var l = await httpPing(url , methods[i]);
        console.log(`[+] Http Api ${methods[i]}: ${l/1000}sec (${l}ms)`)
    }
})

var Main = (async function() {
    for (var i of Object.keys(Discord.endpoints.object)) {
        if (Discord.endpoints.object[i].startsWith('http')) {
            handleHttp(Discord.endpoints.object[i]);
        } else {
            var l = await Ping(Discord.endpoints.object[i])
            console.log(`[+] ${i}: ${l/1000}sec (${l}ms)`)
        }
    }
});
Main();
//make process don't close
var DO = () => {

}
setInterval(DO , 1000)