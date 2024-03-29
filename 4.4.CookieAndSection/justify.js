const http = require('http');
const fs =require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '')=>{
    return cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc,[k,v])=>{
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        },{});
}

const server = http.createServer(async (req,res)=>{
    const cookies = parseCookies(req.headers.cookie);
})
