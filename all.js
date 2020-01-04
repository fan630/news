// search 
// function openDiv(search) {
//     var myDivID = "#" + search
//     window.location.href = myDivID;
// }


;(function(){
    // console.log(now)
    // console.log(before)
    //location.assign('./index.html?#search')
    //location.replace('./index.html?#search')
    let search = document.querySelector('.search')
    search.addEventListener('click', searchItem)

    window.addEventListener('keypress',(e)=>{
        if(e.keyCode === 13){
            searchItem()
        }
        return 
    })
    

    
    function searchItem() {
        let InputValue = document.querySelector('input[type="search"]').value
        document.getElementById('search').classList.add('active')

        console.log(InputValue)
        if(InputValue !== ""){
            const data = new Date()
            const year = new Date().getFullYear()
            const month = new Date().getMonth() + 1
            const date = new Date().getDate()
            const tenDaysAgo = parseFloat(date) - 10

            const now = `${year}-${month}-${date}`
            const before = `${year}-${month}-${tenDaysAgo}`
            const apiKey = '9d105860ae3349429b1cd625b17c8d2b'
            const url = `https://newsapi.org/v2/everything?q=${InputValue}&from=${now}&to=${before}&sortBy=popularity&?country=tw&apiKey=${apiKey}`

            fetch(url)
                // 不知道為什麼search功能有問題, 傳送是ok的
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    let output = ''
                    let searchList = Object.values(data.articles)
                    console.log(searchList)
                    searchList.forEach(search => {
                        output += `<div class="row">
                    <div class="col-4">
                        <div class="pic">
                            <a href="${search.url}" target="_blank">
                            <img src="${search.urlToImage}" title="拒絕開放外連" onload="this.style.opacity=1" onerror="this.src='https://www.walei.tw/love/at/2018/love702/images/qtitle.png'">
                            </a>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="card">
                                <div class="card-header d-flex">
                                    <div class="title mr-auto">${search.source.name}</div>
                                    <div class="time ml-auto">${search.publishedAt.replace('T', ' ').substring(0, `${search.publishedAt.length - 1}`)}</div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title author">${search.title}</h5>
                                    <p class="card-text">${search.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                    })
                    // const aryOutput = output.split('>')
                    // console.log(typeof(aryOutput))
                    // console.log(aryOutput)
                    document.querySelector('.searchItem').innerHTML = output
                    //document.location.href = '#search'
                    // window.location.assign(window.location.href='#search')
                })
            }else{
            alert('請輸入關鍵字!')
        }
    }
        
    })()
    
    
    // 科技
;(function(){

    const apiKey = '9d105860ae3349429b1cd625b17c8d2b'
    const url = `https://newsapi.org/v2/top-headlines?country=tw&category=technology&apiKey=${apiKey}`


    // news傳回來的資料... [{key:vale, key:value, key:array}]
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let output = '<h2>Technology</h2>'
            const dataList = Object.values(data.articles)
            console.log(dataList)
            dataList.forEach(item =>{
                output += `
                    <div class="row">
                        <div class="col-4">
                            <div class="pic">
                                <a href="${item.url}" target="_blank">
                                    <img src="${item.urlToImage}" title="拒絕開放外連" onload="this.style.opacity=1" onerror="this.src='https://www.walei.tw/love/at/2018/love702/images/qtitle.png'">
                                </a>           
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="card">
                                <div class="card-header d-flex">
                                    <div class="title mr-auto">${item.source.name}</div>
                                    <div class="time ml-auto">${item.publishedAt.replace('T', ' ').substring(0, `${item.publishedAt.length-1}`)}</div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title author">${item.title}</h5>
                                    <p class="card-text">${item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            })
            document.querySelector('.container').innerHTML = output
        })
}())

// 娛樂
; (function () {

    const apiKey = '9d105860ae3349429b1cd625b17c8d2b'
    const url = `https://newsapi.org/v2/top-headlines?country=tw&category=entertainment&apiKey=${apiKey}`

    // news傳回來的資料... [{key:vale, key:value, key:array}]
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let output = '<h2>娛樂新聞</h2>'
            const dataList = Object.values(data.articles)
            console.log(dataList)
            dataList.forEach(item => {
                output += `
                <div class="row">
                    <div class="col-4">
                     <div class="pic">
                        <a href="${item.url}" target="_blank">
                            <img src="${item.urlToImage}" title="拒絕開放外連" onload="this.style.opacity=1" onerror="this.src='https://www.walei.tw/love/at/2018/love702/images/qtitle.png'">
                        </a>
                     </div>
                    </div>
                    <div class="col-8">
                        <div class="card">
                            <div class="card-header d-flex">
                                <div class="title mr-auto">${item.source.name}</div>
                                <div class="time ml-auto">${item.publishedAt.replace('T', ' ').substring(0, `${item.publishedAt.length - 1}`)}</div>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title author">${item.title}</h5>
                                <p class="card-text">${item.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
            })
            document.querySelector('.entertainment').innerHTML = output
        })
}())

// 健康
; (function () {

const apiKey = '9d105860ae3349429b1cd625b17c8d2b'
const url = `https://newsapi.org/v2/top-headlines?country=tw&category=health&apiKey=${apiKey}`


// news傳回來的資料... [{key:vale, key:value, key:array}]
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let output = '<h2>生活健康</h2>'
            const dataList = Object.values(data.articles)
            console.log(dataList)
            dataList.forEach(item => {
                output += `
            <div class="row">
                <div class="col-4">
                    <div class="pic">
                        <a href="${item.url}" target="_blank">
                            <img src="${item.urlToImage}" title="拒絕開放外連"  onload="this.style.opacity=1" onerror="this.src='https://www.walei.tw/love/at/2018/love702/images/qtitle.png'">
                        </a>
                    </div>
                </div>
                <div class="col-8">
                    <div class="card">
                        <div class="card-header d-flex">
                            <div class="title mr-auto">${item.source.name}</div>
                            <div class="time ml-auto">${item.publishedAt.replace('T', ' ').substring(0, `${item.publishedAt.length - 1}`)}</div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title author">${item.title}</h5>
                            <p class="card-text">${item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
            })
            document.querySelector('.health').innerHTML = output
        })
}())

// 科學
; (function () {

    const apiKey = '9d105860ae3349429b1cd625b17c8d2b'
    const url = `https://newsapi.org/v2/top-headlines?country=tw&category=science&apiKey=${apiKey}`


    // news傳回來的資料... [{key:vale, key:value, key:array}]
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let output = '<h2>生活知識</h2>'
            const dataList = Object.values(data.articles)
            console.log(dataList)
            dataList.forEach(item => {
                output += `
        <div class="row">
            <div class="col-4">
            <div class="pic">
                <a href="${item.url}" target="_blank">
                    <img src="${item.urlToImage}" title="拒絕開放外連" onload="this.style.opacity=1" onerror="this.src='https://www.walei.tw/love/at/2018/love702/images/qtitle.png'">
                </a>
            </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-header d-flex">
                        <div class="title mr-auto">${item.source.name}</div>
                        <div class="time ml-auto">${item.publishedAt.replace('T', ' ').substring(0, `${item.publishedAt.length - 1}`)}</div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title author">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    `
            })
            document.querySelector('.science').innerHTML = output
        })
}())

// 體育
; (function () {

    const apiKey = '9d105860ae3349429b1cd625b17c8d2b'
    const url = `https://newsapi.org/v2/top-headlines?country=tw&category=sports&apiKey=${apiKey}`


    // news傳回來的資料... [{key:vale, key:value, key:array}]
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let output = '<h2>體育</h2>'
            const dataList = Object.values(data.articles)
            console.log(dataList)
            dataList.forEach(item => {
                output += `
    <div class="row">
        <div class="col-4">
        <div class="pic">
            <a href="${item.url}" target="_blank">
                <img src="${item.urlToImage}" title="拒絕開放外連"  onload="this.style.opacity=1" onerror="this.src='https://www.walei.tw/love/at/2018/love702/images/qtitle.png'">
            </a>
        </div>

        </div>
        <div class="col-8">
            <div class="card">
                <div class="card-header d-flex">
                    <div class="title mr-auto">${item.source.name}</div>
                    <div class="time ml-auto">${item.publishedAt.replace('T', ' ').substring(0, `${item.publishedAt.length - 1}`)}</div>
                </div>
                <div class="card-body">
                    <h5 class="card-title author">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        </div>
    </div>
`
            })
            document.querySelector('.sports').innerHTML = output
        })
}())

// 商業
; (function () {

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'text/plain; charset=ISO-8859-1');

    const apiKey = '9d105860ae3349429b1cd625b17c8d2b'
    const url = `https://newsapi.org/v2/top-headlines?country=tw&category=business&apiKey=${apiKey}`


    // news傳回來的資料... [{key:vale, key:value, key:array}]
    fetch(url, myHeaders)
        .then(res => res.json())
        .then(data => {
            let output = '<h2>商業</h2>'
            const dataList = Object.values(data.articles)
            console.log(dataList)
            dataList.forEach(item => {
                output += `
                    <div class="row">
                        <div class="col-4">
                            <div class="pic">
                            <a href="${item.url}" target="_blank">
                                <img src="${item.urlToImage}" title="拒絕開放外連" onload="this.style.opacity=1" onerror="this.src='https://www.walei.tw/love/at/2018/love702/images/qtitle.png'">
                                </a>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="card">
                                <div class="card-header d-flex">
                                    <div class="title mr-auto">${item.source.name}</div>
                                    <div class="time ml-auto">${item.publishedAt.replace('T', ' ').substring(0, `${item.publishedAt.length - 1}`)}</div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title author">${item.title}</h5>
                                    <p class="card-text">${item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
            })
            document.querySelector('.business').innerHTML = output
        })
}())


// secret code
;(function () {
    // 上, 上, 下, 下, 左, 右, 左, 右, b, a
    const secretCode = [78, 79, 82, 82, 73, 83]
    const input = []

    window.addEventListener('keyup', (e) => {
        //console.log(e.keyCode)
        input.push(e.keyCode)


        while (input.length > secretCode.length) {
            input.shift()
        }

        if (input.join(',') === secretCode.join(',')) {
            cornify_add()
        }
    })


}())

//實現換頁功能

;(function(){
    // 起始點是button
    const buttons = document.querySelectorAll('.nav-item')
    buttons.forEach(button => button.addEventListener('click', updateClick))

    function updateClick(){

        const tab = this.dataset.forTab
        const containerTab = document.querySelector(`.container[data-tab="${tab}"]`)
        
        //這樣只會對選到的buttom判斷一次
        // if(containerTab.classList.contains('active')){
        //     containerTab.classList.remove('active')
        // }else{
        //     containerTab.classList.add('active')
        // }

        //這邊應該要跑回圈判斷, 透過父層來跑
        const navbar = document.querySelectorAll('.nav-item')
        navbar.forEach(item => item.classList.remove('active'))

        const wrapper = document.querySelectorAll('.container')
        wrapper.forEach(container => container.classList.remove('active'))

        this.classList.add('active')
        containerTab.classList.add('active')

        window.location.hash = ''

    }
}())
