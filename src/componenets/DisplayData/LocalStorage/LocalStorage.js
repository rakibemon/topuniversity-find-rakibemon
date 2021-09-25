let varsity_cart = {};
const exists = localStorage.getItem('varsity_cart');
const addToLocalStorage=(name)=>{
    console.log(name);
    if(!exists){
        varsity_cart[name]=1
    }
    else{
        varsity_cart = JSON.parse(exists)
        if(varsity_cart[name]){
            varsity_cart[name] = varsity_cart[name] + 1
        }
        else{
            varsity_cart[name]=1 
        }
    }
    localStorage.setItem('varsity_cart',JSON.stringify(varsity_cart))
}
export {addToLocalStorage}