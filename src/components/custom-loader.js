class CustomLoader extends HyperHTMLElement {
    created() {
        this.className = `h-100 flex flex-column justify-center`
        this._interval = setInterval(() => {
            this.firstElementChild.classList.toggle('fadeIn')
            this.firstElementChild.classList.toggle('fadeOut')
        }, 1200)

        this.render()
    }

    disconnected() {
        if (this._interval) {
            clearInterval(this._interval)
        }
    }

    render() {
        return this.html`
            <div class="pa3 tc athelas tracked ttu near-black bg-white-60 fw3 f2 animated fadeIn">
              loading effect, please wait...
            </div>`
    }
}

CustomLoader.define('custom-loader')

export default CustomLoader
