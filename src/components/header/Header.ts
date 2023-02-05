import Component from "../Component/Component.js";

export default class Header extends Component{
  #logo: string;
  constructor(
    text: string,
    parentElement: HTMLElement,
    classCss: string = '',
  ){
    super(parentElement,'header', classCss);
    this.#logo= text;
  }

  render():void{
    super.render();
    this.element.innerHTML =`<h1><img src="/public/pokemon-logo.svg" alt="pokemon" ></h1>`;
  };

}
