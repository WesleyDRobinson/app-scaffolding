import CustomModal from './custom-modal'
const {bind, wire} = HyperHTMLElement

class CustomSplash extends HyperHTMLElement {
    static get observedAttributes() {
        return ['timeout', 'entry', 'exit']
    }

    created() {
        this.entry = this.entry || 'fadeIn'
        this.exit = this.exit || 'fadeOut'
        this.className = 'flex flex-column pl2 near-white bg-dark-gray avenir animated ' + this.entry

        this.render()
    }

    render() {
        return this.html`
            <h2 class="ml2 pa3 gradientSquare mw6">a web platform app framework</h2>
            <div class="ml2 flex flex-wrap">
                <a href="/page/red" class="link ma2 ph4 pv3 bg-animate bg-red hover-bg-dark-red near-white hover-white">Red Page</a>
                <a href="/page/blue" class="link ma2 ph4 pv3 bg-animate bg-blue hover-bg-dark-blue near-white hover-white">Blue Page</a>
                <a href="/page/green" class="link ma2 ph4 pv3 bg-animate bg-green hover-bg-dark-green near-white hover-white">Green Page</a>
                <div class="pointer ma2 ph4 pv3 near-black bg-animate bg-gold hover-bg-light-yellow hover-black" onclick="${this}">Test the Toast</div>
            </div>
            
            <p class="ml2 mt4">a helpful web app starting point and a few web components</p>
            <custom-modal></custom-modal>

            <h3 class="ml2 mt4 mb0">some docs for the tools</h3>            
            <div id="featured-developer-tools" class="flex flex-wrap ml3"> 
                <a href="https://viperhtml.js.org/hyperhtml/documentation/#introduction" class="link dim pv2 ph3 ma2 br-pill ba bw1 b--blue blue bg-light-yellow">hyperHTML</a> 
                <a href="https://github.com/WebReflection/hyperHTML-Element" class="link dim pv2 ph3 ma2 br-pill ba bw1 b--blue blue bg-light-yellow">hyperHTMLElement</a> 
                <a href="http://tachyons.io" class="link dim pv2 ph3 ma2 br-pill ba bw1 b--blue blue bg-light-yellow">Tachyons</a> 
                <a href="https://daneden.github.io/animate.css/" class="link dim pv2 ph3 ma2 br-pill ba bw1 b--blue blue bg-light-yellow">animate.css</a> 
                <a href="https://visionmedia.github.io/page.js/" class="link dim pv2 ph3 ma2 br-pill ba bw1 b--blue blue bg-light-yellow">page.js</a>
                <a href="https://zeit.co/now" class="link dim pv2 ph3 ma2 br-pill ba bw1 b--blue blue bg-light-yellow">now</a>
            </div>
            <github-corner color="red"></github-corner>`
    }

    onclick() {
        const toaster = document.querySelector('custom-toaster')
        toaster.popToast('Congratulations! it toasted')
    }
}

CustomSplash.define('custom-splash')

// <!--github corner, thanks to https://github.com/tholman/github-corners-->
class GithubCorner extends HyperHTMLElement {
    static get observedAttributes() {
        return ['color']
    }
    created() {
        this.color = this.color || 'blue'
        this.render()
    }

    render() {
        const classList = `absolute top-0 right-0 bn ${this.color}`
        return this.html`
        <a href="https://www.github.com/WesleyDRobinson/app-scaffolding" class="github-corner" aria-label="View source on Github">
            <svg width="125" height="125" viewBox="0 0 250 250"
                 class="${classList}"
                 style="fill:#ffa3d7" aria-hidden="true">

                ${wire(null, 'svg')`    
                        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>`}
                ${wire(null, 'svg')` 
                        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                              fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>`}
                ${wire(null, 'svg')` 
                        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                              fill="currentColor" class="octo-body"></path>`}
            </svg>
        </a>`
    }
}

GithubCorner.define('github-corner')
