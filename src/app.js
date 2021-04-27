

function initVue(){

  new Vue ({

    el:'#app',

    data:{
      navbar:['Home','About','Service', 'Blog', 'Contact', 'Portfolio', 'Sign In'],
      // whatDoweDO:[
      //   {
      //     img:,
      //     title:
      //   }
      // ]

    },

    methods:{


    },

  });
}



function init(){
  initVue();
}

document.addEventListener('DOMContentLoaded', init);
