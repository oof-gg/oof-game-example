const connections=[];self.addEventListener("connect",(e=>{console.log("[SharedWorker] Connected to SharedWorker:",e);const o=e.ports[0];connections.push(o),console.log("[SharedWorker] New client connected. Total clients:",connections.length),o.onmessage=function(e){console.log("[SharedWorker] Worker received message:",e.data),connections.forEach((n=>{n!==o&&(console.log("[SharedWorker] Worker sending message:",e.data),n.postMessage(e.data))}))},o.start()}));