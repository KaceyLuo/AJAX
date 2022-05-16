let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1
        }
    };
    request.send();
};
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/5.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(typeof request.response);
            console.log(request.response);
            const bool = JSON.parse(request.response);
            console.log(typeof bool);
            console.log(bool);
        }
    };
    request.send()
};
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML;
                //使用dom API填写内容
                const text = dom.getElementsByTagName("warning")[0].textContent;
                console.log(text.trim());//trim消除周围的空格回车
            } else {
                alert('加载XML失败')
            }
        };
    }
    request.send();
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    // request.onload = () => {
    //     //创建div
    //     const div = document.createElement('div')
    //     //填写div内容
    //     div.innerHTML = request.response
    //     //插入到index.html的body内
    //     document.body.appendChild(div)
    // }
    // //onerror有些错误事件不会监听改用onreadystatechange
    // request.onerror = () => {
    //     console.log('HTML请求失败')
    // }
    request.onreadystatechange = () => {
        //下载完成 但不知道是成功还是失败
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建div
                const div = document.createElement('div')
                //填写div内容
                div.innerHTML = request.response
                //插入到index.html的body内
                document.body.appendChild(div)
            } else {
                alert('加载HTML失败')
            }
        }
    };
    request.open('GET', '/3.html');
    request.send();//readState=2
};

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    // request.onload = () => {
    //     console.log(request.response)

    //     //创建script标签
    //     const script = document.createElement('script')
    //     //填写script内容
    //     script.innerHTML = request.response
    //     //插到index.html的body内
    //     document.body.appendChild(script)
    // }
    // request.onerror = () => {
    //     console.log('JS失败了')
    // }
    request.onreadystatechange = () => {
        console.log(request.readyState)
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建script标签
                const script = document.createElement('script')
                //填写script内容
                script.innerHTML = request.response
                //插到index.html的body内
                document.body.appendChild(script)
            } else {
                alert('加载JS失败')
            }

        }
    };
    request.open('GET', '/2.js');
    request.send();
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()

    // request.onload = () => {
    //     console.log(request.response)
    //     //创建style标签
    //     const style = document.createElement('style')
    //     //填写style内容
    //     style.innerHTML = request.response
    //     //插到index.html的head里面
    //     document.head.appendChild(style)
    // };
    // request.onerror = () => {
    //     console.log('失败了');
    // };
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建style标签
                const style = document.createElement('style')
                //填写style内容
                style.innerHTML = request.response
                //插到index.html的head里面
                document.head.appendChild(style)
            } else {
                alert('加载css失败')
            }
        }
    }

    request.open('GET', '/style.css');
    request.send();
}
