const {wire} = HyperHTMLElement

class CustomSpace extends HyperHTMLElement {
    created() {
        this.className = 'fixed top-0 left-0 w-100 vh-100 overflow-y-auto animated fadeIn'
        this.loading = true
        this.error = null
        this.apodData = null
        this.currentDate = new Date()

        this.fetchAPOD(this.formatDate(this.currentDate))
        this.render()
    }

    formatDate(date) {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    async fetchAPOD(date) {
        this.loading = true
        this.error = null
        this.render()

        try {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)

            if (!response.ok) {
                throw new Error(`API returned ${response.status}`)
            }

            const data = await response.json()
            this.apodData = data
            this.loading = false
            this.render()

            // Show toast notification
            const toaster = document.querySelector('custom-toaster')
            if (toaster) {
                toaster.popToast(`📅 ${data.date}: ${data.title}`)
            }
        } catch (err) {
            this.error = err.message
            this.loading = false
            this.render()

            const toaster = document.querySelector('custom-toaster')
            if (toaster) {
                toaster.popToast(`❌ Failed to load APOD: ${err.message}`)
            }
        }
    }

    navigateDay(direction) {
        const newDate = new Date(this.currentDate)
        newDate.setDate(newDate.getDate() + direction)

        // Don't go beyond today or before first APOD (June 16, 1995)
        const today = new Date()
        const firstAPOD = new Date('1995-06-16')

        if (newDate <= today && newDate >= firstAPOD) {
            this.currentDate = newDate
            this.fetchAPOD(this.formatDate(this.currentDate))
        }
    }

    randomDate() {
        const start = new Date('1995-06-16').getTime()
        const end = new Date().getTime()
        const randomTime = start + Math.random() * (end - start)
        this.currentDate = new Date(randomTime)
        this.fetchAPOD(this.formatDate(this.currentDate))
    }

    render() {
        if (this.loading) {
            return this.html`
                <div class="flex items-center justify-center vh-100 bg-near-black">
                    <div class="tc">
                        <div class="pa3 f2 white-70 tracked ttu animated pulse infinite">
                            🌌 Loading cosmos...
                        </div>
                    </div>
                </div>`
        }

        if (this.error) {
            return this.html`
                <div class="flex flex-column items-center justify-center vh-100 bg-dark-red near-white pa4">
                    <div class="f1 mb4">❌</div>
                    <h2 class="f3 mb3">Houston, we have a problem</h2>
                    <p class="f5 measure tc mb4">${this.error}</p>
                    <button
                        class="pointer ph4 pv3 br3 bg-white-20 white ba b--white-40 hover-bg-white-30 f5 tracked ttu"
                        onclick=${() => this.fetchAPOD(this.formatDate(this.currentDate))}>
                        Retry
                    </button>
                </div>`
        }

        if (!this.apodData) {
            return this.html`<div class="vh-100 bg-near-black"></div>`
        }

        const data = this.apodData
        const isVideo = data.media_type === 'video'

        return this.html`
            <!-- Background Image or Video -->
            ${isVideo ? wire(this, ':video')`
                <div class="fixed top-0 left-0 w-100 vh-100 overflow-hidden z-0">
                    <iframe
                        src="${data.url}"
                        class="w-100 vh-100"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen>
                    </iframe>
                </div>
            ` : wire(this, ':image')`
                <div class="fixed top-0 left-0 w-100 vh-100 z-0"
                     style="background: url('${data.hdurl || data.url}') center/cover no-repeat;">
                </div>
            `}

            <!-- Dark overlay for readability -->
            <div class="fixed top-0 left-0 w-100 vh-100 bg-black-50 z-1"></div>

            <!-- Content -->
            <div class="relative z-2 flex flex-column justify-between min-vh-100 pa3 pa4-ns animated fadeIn">

                <!-- Top navigation -->
                <div class="flex justify-between items-start">
                    <a href="/"
                       class="link dim ph3 pv2 br-pill bg-white-20 white ba b--white-40 hover-bg-white-30 f6 tracked ttu">
                        ← Home
                    </a>
                    <div class="flex gap2">
                        <button
                            onclick=${() => this.navigateDay(-1)}
                            class="pointer mh1 ph3 pv2 br-pill bg-white-20 white ba b--white-40 hover-bg-white-30 f6 tracked ttu">
                            ← Prev
                        </button>
                        <button
                            onclick=${() => this.randomDate()}
                            class="pointer mh1 ph3 pv2 br-pill bg-gold white ba b--yellow hover-bg-light-yellow hover-black f6 tracked ttu">
                            🎲 Random
                        </button>
                        <button
                            onclick=${() => this.navigateDay(1)}
                            class="pointer mh1 ph3 pv2 br-pill bg-white-20 white ba b--white-40 hover-bg-white-30 f6 tracked ttu">
                            Next →
                        </button>
                    </div>
                </div>

                <!-- Title and info -->
                <div class="mw7 center">
                    <h1 class="f2 f1-ns lh-title white mb2 animated fadeInUp">
                        ${data.title}
                    </h1>
                    <p class="f5 f4-ns white-80 tracked ttu mb3 animated fadeInUp" style="animation-delay: 0.1s">
                        📅 ${data.date} ${data.copyright ? `| 📷 ${data.copyright}` : ''}
                    </p>
                    <div class="ba b--white-40 pa3 pa4-ns br3 bg-black-40 backdrop-blur animated fadeInUp"
                         style="animation-delay: 0.2s; backdrop-filter: blur(10px);">
                        <p class="white-90 lh-copy measure-wide f6 f5-ns ma0">
                            ${data.explanation}
                        </p>
                    </div>
                </div>

                <!-- Bottom spacer -->
                <div class="h2"></div>
            </div>
        `
    }
}

CustomSpace.define('custom-space')

export default CustomSpace
