const pics= document.querySelectorAll(".pic");
pics.forEach(item => {
    item.onclick = expand;
})
function removeexpand ()
{
    pics.forEach(item => {
        item.classList.remove("active");
    })
}
function expand(e)
{
    removeexpand();
    e.target.classList.add("active");

}