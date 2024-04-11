class InlineNotification extends HTMLElement {
	constructor(...args) {
        super(...args);
    }
    static get observedAttributes() {
        return ['text'];
    }
    get text() {
        return this.getAttribute('text');
    }
    
    attributeChangedCallback(attrName, oldVal, newVal) {
        this.render();
    }
    render(){
    	var template = `<div data-notification class="inline-notification inline-notification--info" role="alert" style="">`
        template += `<div class="inline-notification__details" >`
        template += `<svg class="inline-notification__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">`
        template += `<path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm1-3V7H7v6h2zM8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>`
        template += `</svg>`
        template += `<div class="inline-notification__text-wrapper">`
        template += `<p class="inline-notification__text"> ${this.text}</p></div>`
	template += `</div>`;
        this.innerHTML = template;
    }
}

window.customElements.define('inline-notification', InlineNotification);