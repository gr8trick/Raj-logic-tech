function showPageInIframe(){try{let e=new URLSearchParams(window.location.search),t=e.get("page");if(t){let n=`Page${t}`,o=document.querySelector(`#${n}`);if(o){let a=document.createElement("iframe");a.className="preview-iframe",a.onload=function(){let e=a.contentDocument||a.contentWindow.document;e.open(),e.write(`
                            <html>
                                <head>
                                    <style>
                                        body { margin: 0; }
                                    </style>
                                </head>
                                <body>
                                    ${o.innerHTML}
                                </body>
                            </html>
                        `),e.close()},document.body.appendChild(a)}}}catch(r){console.error("Error loading iframe preview:",r)}}document.addEventListener("DOMContentLoaded",showPageInIframe);
