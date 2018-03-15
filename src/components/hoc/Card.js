import React from 'react'

const Card = ({ children }) => {
    return <div>{children}</div>
}

export default Card

// Jak powinno wygladac
// <div class="card">
//   <header class="card-header">
//     <p class="card-header-title">
//       Component
//     </p>
//     <a href="#" class="card-header-icon" aria-label="more options">
//       <span class="icon">
//         <i class="fas fa-angle-down" aria-hidden="true"></i>
//       </span>
//     </a>
//   </header>
//   <div class="card-content">
//     <div class="content">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
//       <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
//       <br>
//       <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
//     </div>
//   </div>
// </div>