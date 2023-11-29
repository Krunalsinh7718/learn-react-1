function createHtmlElement(elementObj){
    const {type, props, content} = elementObj
    const element = document.createElement(type);
   
    for (const key in props) {
        if (Object.hasOwnProperty.call(props, key)) {
            element.setAttribute(key,  props[key]);
        }
    }

    element.innerText = content;

    return element;
}

function App(){
    const mainTitle = {
        type : 'h1',
        props: {
            class : "main-title",
            id : "mainTitle"
        },
        content : "Hello Javascript"
    }

    const textContent = {
        type : 'p',
        props: {
            class : "text-content",
            id : "mainText"
        },
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit." 
    }
    return [createHtmlElement(mainTitle), createHtmlElement(textContent)];
}

function CreateDom(){
    this.container = null;

    this.createRoot = function(container){
        this.container = container;
        return this;
    };

    this.render = function(components){
        if(Array.isArray(components)){
            components.forEach(e => this.container.appendChild(e))
        }else{
            this.container.appendChild(components);
        }
    }
}

const myDom = new CreateDom();

myDom.createRoot(document.querySelector("#root")).render(App());

