import React from 'react'

export function Loader() {
    return(
        <svg version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
        <circle fill="none" stroke="#e74c3c" strokeWidth="4" strokeMiterlimit="10" cx="50" cy="50" r="48"/>
        <line fill="none" strokeLinecap="round" stroke="#e74c3c" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
          <animateTransform
               attributeName="transform"
               dur="2s"
               type="rotate"
               from="0 50 50"
               to="360 50 50"
               repeatCount="indefinite" />
        </line>
        <line fill="none" strokeLinecap="round" stroke="#e74c3c" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
          <animateTransform
               attributeName="transform"
               dur="15s"
               type="rotate"
               from="0 50 50"
               to="360 50 50"
               repeatCount="indefinite" />
        </line>
        </svg>
    )
}

export function ActionDone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
      <path fill="#BBA279" fillRule="nonzero" d="M35 17.5C35 7.835 27.165 0 17.5 0S0 7.835 0 17.5 7.835 35 17.5 35 35 27.165 35 17.5zm-33.934 0c0-9.076 7.358-16.434 16.434-16.434S33.934 8.424 33.934 17.5 26.576 33.934 17.5 33.934 1.066 26.576 1.066 17.5zm14.679 4.254a.893.893 0 0 0 .801-.28l5.307-5.662a1.048 1.048 0 0 0-.004-1.41.892.892 0 0 0-1.322-.004l-4.647 4.96-2.112-2.255a.894.894 0 0 0-1.325.001 1.044 1.044 0 0 0 0 1.413l2.767 2.953c.15.16.34.255.535.284z" />
    </svg>
  )
}

// LOADER
export function Loader_circle() {
  return (
    <svg
      version="1.1"
      id="loader-1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 40 40"
      enableBackground="new 0 0 40 40"
      xmlSpace="preserve"
    >
      <path
        opacity="0.2"
        fill="#ced1d6"
        d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                                s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                                c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
      />
      <path
        fill="#bba279"
        d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                                C22.32,8.481,24.301,9.057,26.013,10.047z"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 20 20"
          to="360 20 20"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

export function Quote() {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img"
         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
         // className="svg-inline--fa fa-quote-left fa-w-16 fa-7x"
    >
      <path fill="currentColor"
            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
            className="" />
    </svg>
  )
}