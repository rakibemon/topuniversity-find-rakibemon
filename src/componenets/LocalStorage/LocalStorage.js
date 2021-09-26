let varsity_cart = {};
const addToLocalStorage=(name)=>{
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
const getStoredCart = () =>{
    const exists = localStorage.getItem('varsity_cart');
    return exists ? JSON.parse(exists) : {}
};
const removeFromLocalStorage=(name)=>{
    const exists = localStorage.getItem('varsity_cart');
    if(exists){
        varsity_cart = JSON.parse(exists);
        delete varsity_cart[name]
    }
    localStorage.setItem('varsity_cart',JSON.stringify(varsity_cart))
};
export {addToLocalStorage,getStoredCart,removeFromLocalStorage}