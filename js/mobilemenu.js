//獲取欄目小圖標
        const navIcon = document.getElementById('J-nav-icon');
        //獲取遮罩層
        const mask = document.getElementById('J_mask');
        //獲取垂直菜單
        const mobileNav = document.getElementById('J_mobile-nav');
        //獲取關閉按鈕
        const closeIcon = document.getElementById('J_close-icon');

        function showAndHide(){
            //綁定點擊事件
            navIcon.addEventListener('click', function () {
                //顯示遮罩層
                mask.style.display = 'block';
                //顯示垂直菜單
                mobileNav.style.display = 'block';
            });

            //點擊close關閉遮罩層跟垂直菜單
            closeIcon.addEventListener('click', function () {
                //關閉隱藏遮罩層
                mask.style.display = 'none';
                //關閉隱藏垂直菜單
                mobileNav.style.display = 'none';
            });
        };
        showAndHide();
        
        // 實現二級伸縮菜單
        // 作法:事件委託
        //獲取ul元素
        const mobileNavList = document.getElementById('J_mobile-nav-list');
        // 採用事件委託
        // 給ul添加點擊事件
        mobileNavList.addEventListener('click',function(e){
            //獲取觸發事件的元素
            const target = e.target;
            // 判斷觸發點擊事件的元素是不是h3
            if(target.tagName.toLowerCase() !== 'h3') return; //不是h3就結束

            //如果是h3標籤，則執行後面的程式碼
            //給h3標籤(js對象)添加一個屬性，用來記錄當前菜單狀態
            //flag=flase表示菜單是收起來的；flag=true表示菜單是打開的
            //沒有屬性時target.flag是undefined
            if(!target.flag){//如果沒有flag屬性，說明是第一次點擊
                //當前菜單的收縮的
                //更改菜單狀態
                target.flag = true; //把菜單狀態改成打開的
                //實現菜單展開效果
                //菜單展開的本質是動態計算li的高度
                const h3Height = target.offsetHeight; //獲取h3的高度
                const h3MarginBottom = parseInt(window.getComputedStyle(target).marginBottom); //獲取h3的外邊距
                //還要獲取二級菜單dl的高度
                const dlHeight = target.nextElementSibling.offsetHeight; //獲取h3後面的兄弟元素dl的高度
                //計算li的高度
                const liHeight = h3Height + h3MarginBottom + dlHeight;
                target.parentNode.style.height = liHeight + 'px'; //把計算好的高度賦值給li
                //parentNode獲取父元素
                //加入箭頭向下的樣式
                const arrowIcon = target.querySelector('.fa-angle-right');
                arrowIcon.classList.add('arrow-down');
            } else{
                target.flag = false; 
                //當前菜單是打開的，點擊後要收起來
                //實現菜單收起效果
                const h3Height = target.offsetHeight; //獲取h3的高度
                const h3MarginBottom = parseInt(window.getComputedStyle(target).marginBottom); //獲取h3的外邊距

                 const liHeight = h3Height + h3MarginBottom;
                target.parentNode.style.height = liHeight + 'px';
                
                //移除箭頭向下的樣式
                const arrowIcon = target.querySelector('.fa-angle-right');
                arrowIcon.classList.remove('arrow-down');
            }

        });