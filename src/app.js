

function initVue(){

  new Vue ({

    el:'#app',

    data:{

      pointerActive:'pointer',
      active: 0,
      chat: false,


      navbar:[

        {
          url:'#',
          name:'Home',
        },
        {
          url:'#',
          name:'About',
        },
        {
          url:'#',
          name:'Service',
        },
        {
          url:'#',
          name:'Blog',
        },
        {
          url:'#',
          name:'Contact',
        },
        {
          url:'#',
          name:'Portfolio',
        },
        {
          url:'#',
          name:'Sign In',
        },

      ],

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

      slider:[
        [
          {
            img:'img/8wa60okr-1-790x576.jpg',
            slideTitle:'Bastket of Flower on table',
            slideSub:'Brand Strategy'
          },
          {
            img:'img/DRY-1-790x576.jpg',
            slideTitle:'Purinky Products',
            slideSub:'Digital Experience'
          },
          {
            img:'img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
            slideTitle:'Satisfy Poster',
            slideSub:'Branding Strategy'
          },
        ],


        [
          {
            img:'img/DRY-1-790x576.jpg',
            slideTitle:'Purinky Products',
            slideSub:'Digital Experience'
          },
          {
            img:'img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
            slideTitle:'Satisfy Poster',
            slideSub:'Branding Strategy'
          },
          {
            img:'img/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg',
            slideTitle:'Mock-up Template',
            slideSub:'Ecommerce'
          },
        ],

        [
          {
            img:'img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
            slideTitle:'Satisfy Poster',
            slideSub:'Branding Strategy'
          },
          {
            img:'img/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg',
            slideTitle:'Mock-up Template',
            slideSub:'Ecommerce'
          },
          {
            img:'img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
            slideTitle:'Landing Page',
            slideSub:'Digital Experience'
          },
        ],

        [
          {
            img:'img/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg',
            slideTitle:'Mock-up Template',
            slideSub:'Ecommerce'
          },
          {
            img:'img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
            slideTitle:'Landing Page',
            slideSub:'Digital Experience'
          },
          {
            img:'img/8wa60okr-1-790x576.jpg',
            slideTitle:'Bastket of Flower on table',
            slideSub:'Brand Strategy'
          },
        ],

        [
          {
            img:'img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
            slideTitle:'Landing Page',
            slideSub:'Digital Experience'
          },
          {
            img:'img/8wa60okr-1-790x576.jpg',
            slideTitle:'Bastket of Flower on table',
            slideSub:'Brand Strategy'
          },
          {
            img:'img/DRY-1-790x576.jpg',
            slideTitle:'Purinky Products',
            slideSub:'Digital Experience'
          }
        ],


      ],

      posterList:[
        {
          liLeft:'Creative ',
          liRight:' Design Enabled'
        },
        {
          liLeft:'Vibrant ',
          liRight:' Color Usage',
        },
        {
          liLeft:'Eye ',
          liRight:' Catching Design',
        },
        {
          liLeft:'Extreme ',
          liRight:' Typography',
        },
        {
          liLeft:'Exceptional ',
          liRight:' Design',
        }
      ],

      testimonials:[

        {
          photo:'img/szabo-viktor-1266895-unsplash-1024x1024.png',
          vote: 3,
          reviwe: 'When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand.',
          name:'Michkel Angel',
          role:'Marketing Management'
        },

        {
          photo:'img/philipe-cavalcante-539505-unsplash-1024x1024.png',
          vote: 4,
          reviwe: 'When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand.',
          name:'Anghel Mikel',
          role:'Sale Strategis'
        },

        {
          photo:'img/fabio-spinelli-695744-unsplash-1024x1024.png',
          vote: 2,
          reviwe: 'When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand.',
          name:'Gennara Bitondo',
          role:'Panettiere'
        },

      ],

      clients:[

        'img/client-1-1.png',
        'img/client-5.png',
        'img/clienty-2.png',
        'img/clienty-3.png',
        'img/clienty-4.png',
      ],


      quickLinks:[

        {
          url:'#',
          name:'Service',
        },

        {
          url:'#',
          name:'Contact',
        },
        {
          url:'#',
          name:'Blog',
        }

      ],

      resources:[

        {
          url:'#',
          name:'Art design',
        },
        {
          url:'#',
          name:'Computer',
        },
        {
          url:'#',
          name:'IT news',
        },
        {
          url:'#',
          name:'NetWorking',
        },
        {
          url:'#',
          name:'Web Security',
        },

      ],

      //chatWindow's Data
      people:[

        'img/philipe-cavalcante-539505-unsplash-1024x1024.png',
        'img/fabio-spinelli-695744-unsplash-1024x1024.png',
        'img/szabo-viktor-1266895-unsplash-1024x1024.png',
        'img/philipe-cavalcante-539505-unsplash-1024x1024.png',
        'img/fabio-spinelli-695744-unsplash-1024x1024.png',
        'img/szabo-viktor-1266895-unsplash-1024x1024.png',
      ],

    },
    //end of Data


    methods:{

      slideNext: function(){

        if(this.active === ( this.slider.length - 1)){

          this.active = 0;
        } else {

          this.active++;
        }

      },

      slidePrev: function (){

        if(this.active === 0){

          this.active = this.slider.length - 1;
        } else {

          this.active--;
        }
      },

      showChat: function(){

        this.chat = !this.chat;
      },

    },

  });
}



function init(){
  initVue();
}

document.addEventListener('DOMContentLoaded', init);
