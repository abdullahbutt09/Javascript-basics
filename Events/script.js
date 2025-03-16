// document.getElementById('owl').onclick = function(){
//         alert("owl clicked")
//     }

    //  attachEvent()
    // jQuery - on

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)

    // document.getElementById('owl').addEventListener('click' , (event) =>{
    //     event.stopPropagation();
    //     console.log("Clicked On Owl!");
    // })


    // document.querySelector('#images').addEventListener('click' ,function(event){
    //     console.log(event.target.id);
    // },false)

    // document.getElementById('google').addEventListener('click',function(e){
        // e.preventDefault(); // Will stop its default action if this statement occur then it dont go to google.
    //     e.stopPropagation()
    //     console.log("google clicked");
    // }, false)
   
    
    document.querySelector('#images').addEventListener('click', function(event){
        console.log(event.target.tagName);
        
        if(event.target.tagName === 'IMG'){
            const RemoveImg = event.target.parentNode;
            RemoveImg.remove();
            let date = new Date();
            console.log(date.toTimeString());
            
            // RemoveImg.parentNode.removeChild(RemoveImg); imp and good syntax
        }
    }) 