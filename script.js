console.log("running");
document.querySelector('.cancel').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cancel').style.display='none';
        
    }
    else{

        document.querySelector('.ham').style.display='none';
        setTimeout(() => { 

            document.querySelector('.cancel').style.display='inline';
        },400);

    }

})