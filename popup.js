function RunPopUp(className,atribute,isLink){if(isLink==!0){$(document).on("click",`.${className}`,function(e){e.preventDefault();let href=$(this).attr(`${atribute}`);$('body').append(' <div class="Umy-popup">'+'<div class="Uclose">'+'<i class="fas fa-times"></i> </div>'+'<div class="Uicon">'+'<i class="fas fa-trash"></i>'+'</div>'+'<div class="Ucontent">'+'Are you sure delete this item?'+'</div>'+'<div class="Uaction"><a class="Uno" href="">Cancel</a>'+`<a href='${href}' class="Uyes" href="">Delete</a>`+'</div>'+'</div>');$(document).on("click",".Uaction .Uno",function(e){e.preventDefault();$(this).parent().parent().remove()});$(document).on("click",".Uclose",function(e){e.preventDefault();$(this).parent().remove()})})}}
