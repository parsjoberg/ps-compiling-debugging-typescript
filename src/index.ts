import {Main} from "./app/Main";
import {defaultState} from "./defaultState";

const renderApp = ()=>{

    const rendered : string = new Main(defaultState).render();
    let app = document.getElementById("App");
    if(app)
        app.innerHTML = rendered;

}

renderApp();