$(document).ready(async function(){
    let auth = await authorize("example@example.com", "123456");

    if(!auth.ok)
        console.log("Ошибка авторизации")

    initCompanyInfo();
    initTests();

})

async function initTests(){
    let testBlock = $("#hidden-test-block");
    $("#hidden-test-block").remove();
    testBlock.removeAttr("id");

    let blocksInfo = await getAllInfoBlocks();
    console.log(blocksInfo)

    if(blocksInfo.ok){
        for(let i = 0; i < blocksInfo.data.length; i++){

            let block = $("<div/>").addClass("test-block").html(testBlock.html());
            let description;
            block.find(".test-name").text(blocksInfo.data[i].name);
            if(blocksInfo.data[i].description.length > 72)
                description = (blocksInfo.data[i].description).substring(0, 73) + "...";
            else
                description = blocksInfo.data[i].description;
            block.children(".test-description").text(description);

            block.find(".edit-test").attr("href", "./index.html?id=" + blocksInfo.data[i].id);

            block.find(".delete-test").on("click", async function(){
                let deleteStatus = await deleteInfoBlock(blocksInfo.data[i].id);

                if(deleteStatus.ok){
                    block.remove();
                }
                else{
                    console.log("Ошибка при удалении " + blocksInfo.data[i].id + " блока")
                }
            })

            $("#new-test").after(block);
        }
        
        if($(".test-block").length % 3 === 1)
            $("#help-test-block").show();
    }
}

async function initCompanyInfo(){
    let companyInfo = await getCompany();

    if(companyInfo.ok){
        console.log(companyInfo)
        if(companyInfo.data.login !== null)
            $("#company-login").text(companyInfo.data.login);
        else
            $("#company-login").parent().hide();

        $("#company-mail").text(companyInfo.data.email);
        $("#company-adress").text(companyInfo.data.city);
        $("#company-name").text(companyInfo.data.name);
    }
}