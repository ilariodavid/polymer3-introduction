import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class MyElement extends PolymerElement{
	static get template() {
		return html`
			<button>
				<slot></slot>
			</button>
		`;		
	}
};

customElements.define('my-element', MyElement);


class MyElement2 extends PolymerElement {
	static get template() {
		return html`
			<h1>
				<slot name="header"></slot>
			</h1>
			<p>
				<slot name="paragrafo"></slot>
			</p>
		`;
	}
};

customElements.define('my-element2', MyElement2);
