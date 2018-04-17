const {bind} = HyperHTMLElement

class CustomModal extends HyperHTMLElement {

    created() {
        this.className = 'db w5 mh2'
        this.render()
    }

    render() {
        return this.html`
            <div class="pointer glow pv2 br-pill ba bw1 b--dark-pink pink bg-near-white tc b tracked"
            onclick=${this}>activate modal</div>`
    }

    onclick() {
        const body = document.querySelector('body')
        const modal = document.createElement('modal-inner')
        body.appendChild(modal)
    }
}

CustomModal.define('custom-modal')

class ModalInner extends HyperHTMLElement {

    created() {
        this.className = "fixed z-999 left-0 top-0 w-100 vh-100 overflow-y-auto near-black bg-white-60 avenir animated fadeIn"
        this.render()
    }

    render() {
        return this.html`
            <div class="pointer dt fixed bottom-1 left-1 h3 w3 br-100 bg-black-90 tc" onclick=${this}><span class="dtc v-mid white-90 f4">X</span></div>
            
            <div class="pl4 pb5 center mw7 z-0 bg-washed-green">
                            <!--github corner, thanks to https://github.com/tholman/github-corners-->
                <a href="https://www.github.com/WesleyDRobinson/dice" class="github-corner" aria-label="View source on Github">
                    <svg width="125" height="125" viewBox="0 0 250 250"
                         class="absolute top-0 right-0 bn blue"
                         style="fill:#fff" aria-hidden="true">
                        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                              fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
                        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                              fill="currentColor" class="octo-body"></path>
                    </svg>
                </a>
                <div class="pb3 pr3 lh-copy center measure measure-wide-ns bg-light-gray">
                
                <h2 class="dib mv0 pa3 bg-washed-green f4 f3-ns lh-title dark-green">Thanks for checking out the modal!</h2>     
                <h2 id="how-do-i-use-distributed-chat" class="dib mb0 pa2 dark-green bg-washed-green athelas tj ttu lh-title">How do I use this?</h2>
                    <article class="pa2 lh-copy">                
                        <p>You could start replacing what you find here to build your own tool. <br>
                        Or consider it research for your own home-rolled framework.</p>
                        <p>The tools I've chosen make sense for me! Maybe you already agree with some; check out the others or replace the pieces you want.</p>
                        <p>You're doing it! Keep going!</p>
                    </article>               
                    
        
                <h2 id="how-is-distributed-chat-different" class="dib mv0 pa2 dark-green bg-washed-green athelas ttu">Have you built any serious projects with this?</h2>
                    <article class="lh-copy">
                    
                    <p class="pa2">Yes, I have.</p>
                    <ul class="list pl2">
                        <li class="mb2">🌐 <a href="//dc.now.sh" class="i f4">Distributed Chat</a>, an <a class="link orange hover-blue courier bg-white" href="https://ipfs.io">InterPlanetary File System (IPFS)</a> node runs in the browser, connects directly to other nodes allowing for realtime chat</li>
                        <li class="mb2">☠️<a href="//www.wesley.tech" class="i f4">wesley.tech</a>, do not mess with us or else</li>
                    </ul>
                    </article>
                    <p class="pa2">Be careful <span class="i"> This is an experiment.</span> <br> 
                    Security and anonymity are difficult topics. <br>
                    You should carefully evaluate your risks and exposure with any software.
                    </p>

                
            
                <h2 id="what-tools-does-distributed-chat-use" class="dib mb0 pa2 dark-green bg-washed-green athelas ttu">How is this built?</h2>
                    <article class="pa2">
                    <a class="link orange hover-blue" href="https://github.com/WesleyDRobinson/web-app-scaffold">Source on Github</a><br>
                    <a class="link orange hover-blue" href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a><br>
                    
                    <a class="link orange hover-blue" href="https://medium.com/@WebReflection/hyperhtml-a-virtual-dom-alternative-279db455ee0e">hyperHTML</a> and 
                    <a class="link orange hover-blue" href="https://github.com/WebReflection/hyperHTML-Element">hyperHTMLElement</a> for building web components<br>

                    <a class="link orange hover-blue" href="https://tachyons.io">tachyons</a> and 
                    <a class="link orange hover-blue" href="https://daneden.github.io/animate.css/">animate</a> CSS systems
                    
                    <p>recommend yarn package manager, Webpack module bundler (considering Parcel), npm scripts, zeit's now</p>
                    </article>
                
                <h2 id="is-distributed-chat-finished-can-i-contribute" class="dib mb0 pa2 dark-green bg-washed-green athelas ttu">Is this finished?</h2>
                    <article class="pa2">
                        <p>While it's usable today, there are definitely enhancements in the works!</p> 
                        <p>And if you find any vulnerabilities or mistakes in the readme, please let us know!</p>
                        <p>My immediate goal is to offer service worker. (v1.0 milestone) <br>
                        version 2.0 release milestones includes auth/ user tiers
                        </p>
                        <p>Please check back periodically for updates.</p>
                        <p><a class="link orange hover-blue" href="https://wesley.now.sh">And get in touch</a> if you'd like to suggest features or contribute to the project.</p>
                    </article>

            </div>
            </div>`
    }

    onclick() {
        this.classList.add('fadeOut')
        setTimeout(() => this.remove(), 1000)
    }
}

ModalInner.define('modal-inner')
