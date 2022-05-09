window.addEventListener("DOMContentLoaded", ()=>{
    const input = document.querySelector("#text-field"),
            btn = document.querySelector(".btn"),
            dwnLoad = document.querySelector("#textarea"),
            copyLink = document.querySelector(".copy-link");
btn.addEventListener("click", genink)
function genink(ev){
    ev.preventDefault();
    const inputVal = input.value;
    if (!inputVal) {
        alert("Input field is empty");
    } else {
        if (inputVal.length < 10) {
            alert("Invalid Link");
            input.value = "";
        }else{
            let getDwnLink = inputVal.replace("", "").replace("", "");
            dwnLoad.value = getDwnLink;
            input.value = "";
        }
        //COPY FUNCTION
        function copyText(ev){
            if (dwnLoad.value = ""){
                return;
            }else{
                ev.select();
                document.execCommand("copy");
            }
        }
        //copy Download Link
        let copy_dwnLink = document.querySelector(".CopyDwnLink")
        .addEventListener("click", (e)=>{
            console.log('clicked');
            let copy_dwnLink = document.querySelector(".CopyDwnLink");
            let dwnLinkTexture = document.querySelector(".downloadlink");
            copy_dwnLink.textContent = "Copied!!";
            alert("link copied");
            setTimeout(()=>{
                copy_dwnLink.textContent = "Copy";  
            }, 2000)
            return copyText(dwnLinkTexture);
        })
        const audio1 = '<audio src=" ';
        const audio2 = '" controls></audio>';
        const audioVal = `${audio1}${inputVal}${audio2}`;
        let embedAudio1 = document.querySelector(".embedAudio");
        embedAudio1.value = audioVal;
        let copyAudio= document.querySelector(".copyAudio")
        .addEventListener("click", (e)=>{
            let copyAudio = document.querySelector(".copyAudio");
            let audioTexture = document.querySelector(".embedAudio");
            copyAudio.textContent = "Copied!!";
            alert("link copied");
            setTimeout(()=>{
                copyAudio.textContent = "Copy";  
            }, 2000)
            return copyText(audioTexture);
        })
        const video1 = '<video src="';
        const video2 = '" width="400px" height="400px" controls alt="">';
        const videoVal =  `${video1}${inputVal}${video2}`;
        let embedVideo = document.querySelector(".embedVideo");
        embedVideo.value = videoVal;
        let copyVideo= document.querySelector(".copyVideo")
        .addEventListener("click", (e)=>{
            let copyVideo = document.querySelector(".copyVideo");
            let VideoTexture = document.querySelector(".embedVideo");
            copyVideo.textContent = "Copied!!";
            alert("link copied");
            setTimeout(()=>{
                copyVideo.textContent = "Copy";  
            }, 2000)
            return copyText(VideoTexture);
        })
        const img1 = '<img src="';
        const img2 = '" width="400px" height="400px" alt="">';
        const imageVal =  `${img1}${inputVal}${img2}`;
        let embedImg = document.querySelector(".embedImage");
        embedImg.value = imageVal;
        let copyImage = document.querySelector(".copyImage")
        .addEventListener("click", (e)=>{
            let copyImage = document.querySelector(".copyImage");
            let imageTexture = document.querySelector(".embedImage");
            copyImage.textContent = "Copied!!";
            alert("link copied");
            setTimeout(()=>{
                copyImage.textContent = "Copy";  
            }, 2000)
            return copyText(imageTexture);
        })
    }   

}
})