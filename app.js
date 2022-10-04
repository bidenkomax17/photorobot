$(function ()
{
    let headClick=0;
    let eyesClick=0;
    let noseClick=0;
    let mouthClick=0;
    /*lightning1(4000);
    lightning2(5000);
    lightning3(7000);
     */
    changeLight("#container #lightning1", 4000);
    changeLight("#container #lightning2", 5000);
    changeLight("#container #lightning3", 7000);
    //head
    $("#head").on("click", function ()
    {
        headClick=changeFace($(this), headClick);
        /*if(headClick<9)
        {
            $(this).animate({left: "-=367px"}, 500);
            headClick+=1;
        }
        else
        {
            $(this).animate({left: 0}, 500);
            headClick=0;
        }

         */
    });
    //eyes
    $("#eyes").on("click", function ()
    {
        eyesClick=changeFace($(this), eyesClick);
        /*if(eyesClick<9)
        {
            $(this).animate({left: "-=367"}, 500);
            eyesClick+=1;
        }
        else
        {
            $(this).animate({left: 0}, 500);
            eyesClick=0;
        }
         */
    });
    //nose
    $("#nose").on("click", function ()
    {
        noseClick=changeFace($(this), noseClick);
        /*if(noseClick<9)
        {
            $(this).animate({left: "-=367"}, 500);
            noseClick+=1;
        }
        else
        {
            $(this).animate({left: 0}, 500);
            noseClick=0;
        }
         */
    });
    //mouth
    $("#mouth").on("click", function ()
    {
        mouthClick=changeFace($(this), mouthClick);
        /*if(mouthClick<9)
        {
            $(this).animate({left: "-=367"}, 500);
            mouthClick+=1;
        }
        else
        {
            $(this).animate({left: 0}, 500);
            mouthClick=0;
        }

         */
    })
    /*function lightning1(t)
    {
        $("#container #lightning1").fadeIn(250).fadeOut(250);
        setTimeout(function ()
        {
            lightning1(t);
        }, t);
    }
    function lightning2(t)
    {
        $("#container #lightning2").fadeIn(250).fadeOut(250);
        setTimeout(function ()
        {
            lightning2(t);
        }, t);
    }
    function lightning3(t)
    {
        $("#container #lightning3").fadeIn(250).fadeOut(250);
        setTimeout(function ()
        {
            lightning3(t);
        }, t);
    }
     */
    //написать универсальное функцию, которая будет вызываться при if/else при каждом клике по отдельности
    function changeFace (element, countClick)
    {
        if(countClick<9)
        {
            element.animate({left: "-=367px"}, 500)
            {
                countClick++;
            }
        }
        else
        {
            element.animate({left: "0px"}, 500)
            {
                countClick=0;
            }
        }
        return countClick;
    }
    function changeLight(img, t)
    {
        $(img).fadeIn(250).fadeOut(250);
        setTimeout(function ()
        {
            changeLight(img, t);
        }, t);
    }
});