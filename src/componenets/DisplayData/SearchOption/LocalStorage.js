const addToLocalStorage=(name)=>{
    let varsity_cart = {};
    const exists = localStorage.getItem('varsity_cart');
    if(!exists){
        varsity_cart[name]=1
    }
    else{
        varsity_cart = JSON.parse(exists)
        varsity_cart[name] = 1
    }
    localStorage.setItem('varsity_cart',JSON.stringify(varsity_cart))
};
export {addToLocalStorage}