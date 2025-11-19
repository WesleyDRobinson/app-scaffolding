const {wire} = HyperHTMLElement

class CustomToaster extends HyperHTMLElement {
    created() {
        this.className = 'fixed bottom-1 right-1 pa2'
        this.render()
    }
    popToast(message) {
        this.appendChild(wire()`<toast-announce exit="fadeOutRight">${message}</toast-announce>`)
    }
    render() {
        return this.html`<article id="toast-container"></article>`
    }
}

CustomToaster.define('custom-toaster')

class ToastAnnounce extends HyperHTMLElement {
    static get observedAttributes() {
        return ['timeout', 'entry', 'exit']
    }

    created() {
        this.timeout = this.timeout || 3300
        this.entry = this.entry || 'fadeInUp'
        this.exit = this.exit || 'fadeOutLeft'
        this.className = `db pa3 mt2 mw6 br1 bg-near-black gold hover-white tc lh-copy animated ${this.entry}`

        setTimeout(() => {
            this.classList.add(this.exit)
            setTimeout(() => this.remove(), 1000)
        }, this.timeout)

        this.render()
    }

    render() {
        return this.html`${this.textContent}`
    }
}

ToastAnnounce.define('toast-announce')

export default CustomToaster
