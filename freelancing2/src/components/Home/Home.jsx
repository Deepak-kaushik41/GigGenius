import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="grid items-center justify-center gap-4 grid-cols-2 grid-rows-1 w-full h-72">
        <div>
          <h1 className="m-4">
            <span className="flex justify-center text-6xl relative font-semibold">
              How work
            </span>
            <br />
            <span className="flex justify-center text-6xl font-semibold">
              should work
            </span>
          </h1>
          <p className="flex justify-center text-gray-500 text-xl ">
            Forget the old rules. You can have the best people.
            <br />
            Right now. Right here.
          </p>
        </div>
        <div className=" max-w-1/2 max-h-screen flex justify-center items-center">
          <img
            className="w-80 h-60"
            src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_440,h_300,f_auto,q_auto,dpr_2.0/brontes/hero/searching-talent@1x.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className=" w-1/2 flex justify-center">
        <Link to="/login"><button className="relative top-3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none ">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Get started
          </span>
        </button>
        </Link>
      </div>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-full h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-white">
            <svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </div>
        </div>  
          <div className="grid gap-6 ">
            <h2 className=" flex justify-center">
              <span className="text-3xl">Trusted By</span>
            </h2>
        
              <div data-qa="logo-items" className="flex gap-4 w-full">
                <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/microsoft.svg" data-qa="microsoft" data-src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/microsoft.svg" alt="Microsoft worked with Upwork to collaborate on an integrated solution that helps enterprises work with freelancers at scale powered by Microsoft 365 and Upwork Enterprise." className="w-full h-10" />

                <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/airbnb.svg" data-qa="airbnb" data-src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/airbnb.svg" alt="Airbnb works with Upwork to post more than 10,000 projects on Upwork." className="w-full h-10" />

              <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/bissell.svg" data-qa="bissell" data-src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/bissell.svg" alt="Bissell works with Upwork as a staffing alternative to their hiring process." className="w-full h-10" />

             
              <svg className="w-full h-8  " viewBox="0 0 75 20" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M74.613 3.458c-.265-.297-.62-.448-1.1-.448-.48 0-.846.159-1.101.487-.255.317-.387.793-.387 1.417v4.524c-.59-.636-1.203-1.092-1.825-1.399a4.568 4.568 0 0 0-1.356-.397 6.917 6.917 0 0 0-.937-.06c-1.559 0-2.822.536-3.791 1.608-.958 1.072-1.438 2.56-1.438 4.472 0 .904.123 1.747.367 2.52.246.772.59 1.448 1.06 2.022a4.975 4.975 0 0 0 1.67 1.33 4.766 4.766 0 0 0 2.089.465c.345 0 .672-.029.977-.088.205-.03.397-.08.592-.14a5.086 5.086 0 0 0 1.335-.674 7.8 7.8 0 0 0 1.253-1.15v.297c0 .565.143.992.418 1.3.286.297.643.455 1.07.455.438 0 .794-.149 1.07-.435.273-.298.417-.734.417-1.318V4.758c.004-.567-.128-1.004-.383-1.3zm-3.169 12.477c-.275.575-.643 1.002-1.09 1.28-.46.279-.96.416-1.51.416h-.01a2.79 2.79 0 0 1-1.509-.435c-.459-.298-.825-.734-1.089-1.309-.264-.585-.396-1.29-.396-2.123 0-.784.121-1.477.377-2.062.245-.596.601-1.052 1.05-1.368.46-.328.97-.477 1.548-.477h.03c.541 0 1.04.158 1.499.465.459.308.825.756 1.1 1.34.275.585.408 1.29.408 2.102 0 .872-.133 1.597-.408 2.171zm-9.896.13c-.194-.168-.459-.258-.785-.258-.296 0-.52.07-.683.199-.398.356-.713.644-.96.852-.242.199-.52.397-.813.584a3.27 3.27 0 0 1-.896.399 3.798 3.798 0 0 1-1.03.128c-.081 0-.163 0-.235-.01a2.829 2.829 0 0 1-1.303-.397c-.47-.267-.836-.662-1.122-1.179-.275-.536-.418-1.15-.427-1.845h6.145c.825 0 1.466-.12 1.915-.337.46-.239.683-.735.683-1.498 0-.833-.224-1.646-.662-2.45-.438-.795-1.09-1.449-1.976-1.953-.878-.506-1.927-.754-3.16-.754h-.091c-.907.01-1.743.16-2.486.437a5.54 5.54 0 0 0-1.969 1.269 5.677 5.677 0 0 0-1.2 1.994 7.49 7.49 0 0 0-.42 2.518c0 1.925.562 3.432 1.682 4.552 1.06 1.062 2.527 1.618 4.391 1.677.103.01.213.01.327.01.876 0 1.66-.11 2.342-.337.683-.228 1.244-.507 1.694-.843.446-.347.783-.704 1.007-1.07.224-.367.337-.695.337-.963 0-.31-.1-.557-.305-.725zm-7.336-5.605c.5-.526 1.141-.784 1.926-.784h.012c.814 0 1.477.258 1.976.773.5.517.795 1.3.867 2.35h-5.698c.101-1.03.408-1.814.917-2.339zm-6.045 5.346c-.305 0-.529.07-.692.198-.387.357-.713.645-.958.853-.245.198-.51.397-.806.584-.294.179-.591.318-.906.398a3.742 3.742 0 0 1-1.03.128c-.08 0-.162 0-.234-.01a2.841 2.841 0 0 1-1.304-.396 2.932 2.932 0 0 1-1.11-1.18c-.286-.535-.429-1.15-.44-1.844h6.155c.815 0 1.456-.12 1.915-.338.448-.238.674-.734.674-1.497 0-.834-.215-1.647-.653-2.45-.438-.795-1.1-1.45-1.976-1.954-.878-.505-1.937-.753-3.158-.753h-.103c-.906.01-1.731.16-2.486.437a5.383 5.383 0 0 0-1.957 1.268 5.54 5.54 0 0 0-1.212 1.994 7.451 7.451 0 0 0-.42 2.518c0 1.925.572 3.432 1.692 4.552 1.06 1.063 2.517 1.618 4.382 1.677.112.01.212.01.326.01.886 0 1.661-.109 2.343-.336.682-.229 1.244-.507 1.691-.843.46-.348.785-.704 1.01-1.07.223-.367.337-.695.337-.964 0-.307-.103-.555-.296-.723-.202-.17-.469-.26-.784-.26zm-6.562-5.346c.499-.526 1.142-.784 1.927-.784h.011c.814 0 1.477.258 1.976.773.509.517.795 1.3.877 2.35h-5.707c.112-1.03.419-1.814.916-2.339zM6.547 17.969v-7.301c.212.02.417.029.631.029a5.514 5.514 0 0 0 2.792-.744v8.014c0 .685-.163 1.19-.48 1.528-.315.336-.733.504-1.242.504-.5 0-.897-.168-1.223-.515-.315-.336-.478-.842-.478-1.515zm29.6-14.51c-.265-.298-.631-.449-1.09-.449-.48 0-.846.159-1.102.487-.264.317-.387.793-.387 1.417v4.524c-.59-.636-1.2-1.092-1.824-1.399a4.644 4.644 0 0 0-1.354-.397 6.901 6.901 0 0 0-.938-.06c-1.559 0-2.833.536-3.79 1.608-.959 1.072-1.438 2.56-1.438 4.472 0 .904.123 1.747.356 2.52a6.03 6.03 0 0 0 1.072 2.022 4.96 4.96 0 0 0 1.67 1.33 4.766 4.766 0 0 0 2.089.465c.336 0 .662-.029.977-.088.205-.03.398-.08.592-.14a5.086 5.086 0 0 0 1.335-.674c.417-.298.827-.685 1.252-1.15v.297c0 .565.144.992.419 1.3.275.297.643.455 1.07.455.417 0 .785-.149 1.06-.435.275-.298.406-.734.406-1.318V4.758c.001-.567-.12-1.004-.374-1.3zm-3.16 12.476c-.274.575-.642 1.002-1.1 1.28-.448.279-.959.416-1.497.416h-.01c-.55 0-1.05-.149-1.508-.435-.468-.298-.825-.734-1.09-1.309-.264-.585-.397-1.29-.397-2.123 0-.784.123-1.477.366-2.062.254-.596.601-1.052 1.06-1.368.448-.328.968-.477 1.539-.477h.04c.54 0 1.039.158 1.488.465.469.308.835.756 1.11 1.34.264.585.408 1.29.408 2.102 0 .872-.144 1.597-.408 2.171zM14.995 9.25v.378c.56-.715 1.161-1.23 1.814-1.568.662-.326 1.416-.496 2.272-.496.826 0 1.57.18 2.22.526a3.35 3.35 0 0 1 1.457 1.488c.215.376.348.784.408 1.221.061.426.091.981.091 1.656v5.685c0 .614-.153 1.08-.438 1.387-.284.317-.662.475-1.12.475-.47 0-.846-.158-1.142-.484-.296-.319-.439-.783-.439-1.378v-5.093c0-1.011-.143-1.784-.428-2.32-.285-.534-.867-.803-1.72-.803-.562 0-1.07.168-1.53.486a2.826 2.826 0 0 0-1.018 1.35c-.153.455-.224 1.298-.224 2.56v3.818c0 .624-.152 1.08-.447 1.399-.296.307-.672.465-1.142.465-.459 0-.827-.158-1.121-.484-.296-.319-.438-.783-.438-1.378V9.3c0-.584.133-1.02.398-1.3.254-.286.61-.436 1.07-.436.275 0 .52.06.743.189.224.128.406.317.54.574.132.258.194.567.194.923zM6.566.473c2.12-.744 4.535-.704 6.348.822.337.307.723.695.876 1.15.184.577-.641-.06-.754-.139-.592-.377-1.182-.694-1.844-.912-3.566-1.07-6.94.864-9.038 3.87C1.278 6.59.707 7.99.24 9.526c-.052.168-.092.387-.184.535-.093.17-.04-.455-.04-.476.07-.635.203-1.25.368-1.864.967-3.273 3.106-6 6.183-7.25zm4.106 5.881a2.517 2.517 0 0 1-5.032 0 2.517 2.517 0 1 1 5.032 0z" fill="#003A9B"></path></svg>
            </div>
          </div>
          <div class="inline-flex items-center justify-center w-full">
        <hr class="w-full h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-white">
            <svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </div>
        </div>

        <div>

        </div>

          {/* //.............................REVIEWS STARTS HERE..................................... */}

          

<div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
            <p class="my-4">If you care for your time, I hands down would go with this."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Bonnie Green</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
            <p class="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Roberta Casas</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
            <p class="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Jese Leos</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
            <p class="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Joseph McFall</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">CTO at Google</div>
            </div>
        </figcaption>    
    </figure>
</div>

          {/* //................................CARD STARTS HERE.................................... */}

          <div className="max-w-full flex flex-row gap-8 justify-between">
      <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
        <a href="#">
          <img
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700"
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg"
            alt="not found"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              Let's show up your creativity in our websites. 
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            src="https://cdn.educba.com/academy/wp-content/uploads/2021/10/Data-Scientist-Jobs.jpg.webp"
            alt="not found"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              Hey! Data Scientist we jobs for you..
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={"https://etimg.etb2bimg.com/photo/99959880.cms"}
            alt="not found"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black hover:transition: transform .4s ease-out">
              Find AI related jobs
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    
<form class="max-w-lg mx-auto">
    <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
        </div>
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

        </>
        );
};

        export default Home;
