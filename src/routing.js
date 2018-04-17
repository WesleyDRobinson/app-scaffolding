import CustomLoader from './components/custom-loader'
import CustomSplash from './components/custom-splash'

const {bind} = HyperHTMLElement
const appShell = document.getElementById('app-shell')
const toaster = document.querySelector('custom-toaster')

page('*', middleWare)
page('/page/:color', loadPage1)
page('/', main)
page()

function middleWare(ctx, next) {
    if (ctx.init) {
        // show loader
        return next()
    } else {
        bind(appShell)`<custom-loader></custom-loader>`
        setTimeout(next, 1000)
    }
}

function loadPage1(ctx) {
    ctx.state.color = ctx.params.color || 'gray'

    // use web components or simply construct html right here
    const div = document.createElement('div')
    div.className = `vh-100 pa4 near-white bg-${ctx.state.color}`

    bind(div)`<h1 class="lh-title">${ctx.state.color} Page</h1>
                <p class="ml3 pa3 lh-copy measure-wide near-white bg-black-30">Write HTML and get JS variable insertion \`\${ variableAccess }\` for free!</p>
                <span class="dib pointer ml3 mt3 pv2 ph3 br2 br-pill bg-animate bg-light-yellow ba b--light-blue hover-bg-yellow f4 tracked ttu blue" onclick=page('/')>go home</span>`

    appShell.innerHTML = ''
    appShell.appendChild(div)
}

function main() {
    // bind custom-splash element to app-shell
    bind(appShell)`<custom-splash></custom-splash>`
}
