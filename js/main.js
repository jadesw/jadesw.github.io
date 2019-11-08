var collapsed = true;

function openSidebar() {
    console.log("Opening Sidebar")
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.collapsed = false;
}

function closeSidebar() {
    console.log("Closing Sidebar")
    document.getElementById("mySidebar").style.width = "85px";
    document.getElementById("main").style.marginLeft = "85px";
    this.collapsed = true;
    
 }