const url = require('url');

const myURL = new URL('https://www.coupang.com/?src=1139000&spec=10799999&addtag=900&ctag=HOME&lptag=AF2317737&itime=20240206152833&pageType=HOME&pageValue=HOME&wPcid=17072009139651401803405&wRef=&wTime=20240206152833&redirect=landing&traceid=V0-183-879dd1202e5c73b2&mcid=e6c6704db4804bcaa3a66cd1bb1f8432&placementid=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=enliplecp13&impressionid=&campaigntype=&newssource=&contentkeyword=&subparam=');

console.log(myURL);
console.log(url.format(myURL));

console.log(myURL.searchParams)

console.log(myURL.searchParams.getAll('category'))
