function viewimage(selection)
{
    let option=selection;
    console.log(option.path[0]);
    let option_id=option.path[0].id;
    let option_src=option.path[0].src;

    let Model_view=document.getElementById('main_model').src=option_src;

}

function ToggleHide(hide)
{
    // alert('Hide');
    let option=hide.path;
    console.log(option[0]);
    let change_sign=option[0];
    console.log(option[3].querySelector('.toggleclass'));
    let data=option[3].querySelector('.toggleclass');
    if(data.style.display!='none')
    {
        change_sign.src='Images/plus.jpg';
        data.style.display='none';
    }
    else{
        change_sign.src='Images/subtract.png';
        data.style.display='block';
    }

}
// let model=document.queryCommandValue('')
function change_color(choice)
{
    // alert('Hi, there');

    let color=choice.path[0].value;
    // let modelmenu=choice.path[4].querySelector('#first_col');
    // console.log(modelmenu);
    let source='Images/';
    let hamburger_models=document.querySelectorAll('.d-block');
    // console.log(hamburger_models[1].src);

    for(let i=1;i<=5;i++)
    {
        let modelmenu=document.getElementById(`model_${i}`);
        // console.log(modelmenu);
        modelmenu.src=source+`${color}_model_${i}.webp`;

        hamburger_models[i-1].src=source+`${color}_model_${i}.webp`;
        
    }
    let main_model=document.querySelector('#main_model');
    main_model.src=source+`${color}_model_1.webp`;
}

function myFunction(){
    let list=document.querySelector('#hamburger_list');
    if(list.style.display=='block')
    {
        list.style.display='none';
    }
    else{
        
        list.style.display='block';
    }
}