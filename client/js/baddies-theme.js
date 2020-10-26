Vue.component('baddies-header', {
    template: `
        <div id="navigation" class="f-row area-baddies">
            <ul class="nav text-aqua">
                <a href="/">
                    <li class="nav-item" :class="isActive('home')">Home</li>
                </a>
                <a href="https://www.warcraftlogs.com/guild/id/288" target="_blank">
                    <li class="nav-item" :class="isActive('logs')">Logs</li>
                </a>
                <a href="https://discordapp.com/invite/rP4Pt2A" target="_blank">
                    <li class="nav-item" :class="isActive('discord')">Discord</li>
                </a>
                <a href="/apply">
                    <li class="nav-item" :class="isActive('apply')">Apply</li>
                </a>
                <a href="/sales">
                    <li class="nav-item" :class="isActive('sales')">Sales</li>
                </a>
            </ul>
        </div>
    `,
    props: {
        active: {
            type: String
        }
    },
    methods: {
        isActive(string) {
            return (string === this.active) ? 'active' : '';
        }
    }
});