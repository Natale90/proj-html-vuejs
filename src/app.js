

function initVue(){

  new Vue ({

    el:'#app',

    data:{

      navbar:['Home','About','Service', 'Blog', 'Contact', 'Portfolio', 'Sign In'],

      whatDoweDo:[

        {
          img:'img/Group-247.png',
          title:'Data Analysis',
          prph:'When while the lovely valley teems with vapour around meand the meridian sun strikes the upper'

        },
        {
          img:'img/Group-538.png',
          title:'SEO Optimization',
          prph:'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper'
        },
        {
          img:'img/Group-566.png',
          title:'Security Data',
          prph:'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper'
        },
        {
          img:'img/Group-567.png',
          title:'Branding Strategy',
          prph:'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper'
        },
        
      ],

    },

    methods:{


    },

  });
}



function init(){
  initVue();
}

document.addEventListener('DOMContentLoaded', init);
