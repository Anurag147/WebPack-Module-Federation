import faker from 'faker';

const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

    el.innerHTML = cartText;
}

    // Context/Situation #1
// We are running this in isolation
//We are using local index html file which deifinitely has above id of dev-products
//In this case render the app immediately
if(process.env.NODE_ENV==='development'){
    const el = document.querySelector('#dev-cart');
    if(el){
        mount(el);//mount the app when products is running in isolation
    }
}

// Context/Situation #2
// We are running this in production through the container app
//We are using container index html file which may not has above id of dev-products
//In this case do not render the app immediately

export {mount}; //export to the container in this case
