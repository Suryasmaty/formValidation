function formValidation()
{
    const name = document.getElementsById("name").value;


    if(name==="")
    {
        alert("name cannot be empty");
        return false;
    }

    return true;
}