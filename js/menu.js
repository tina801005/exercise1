function stickyMenu () { //定義函數
    //獲取top元素
    const _top = document.getElementById('J-top');
    //監聽滾動事件
    window.addEventListener('scroll', function(){
        //獲取滾動高度
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //滾動高度大於1時，添加sticky類名，否則移除
        if(scrollTop > 1){
            _top.classList.add('sticky'); 
        }else{
            _top.classList.remove('sticky');
        }
    });    
}; //函數結束
stickyMenu(); //調用函數