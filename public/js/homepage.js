// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Collapse from 'react-bootstrap/Collapse';

// function Example() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <Button
//         onClick={() => setOpen(!open)}
//         aria-controls="example-collapse-text"
//         aria-expanded={open}
//       >
//         click
//       </Button>
//       <Collapse in={open}>
//         <div id="example-collapse-text">
//           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
//           terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
//           labore wes anderson cred nesciunt sapiente ea proident.
//         </div>
//       </Collapse>
//     </>
//   );
// }

// render(<Example />);

//FUTURE DEVELOPMENT: Ability to read more (expand) review on homepage.

// var h = $("#review-text")[0].scrollHeight;

// (function ($) {
//   $.fn.clickToggle = function (func1, func2) {
//     var funcs = [func1, func2];
//     this.data("toggleclicked", 0);
//     this.click(function () {
//       var data = $(this).data();
//       var tc = data.toggleclicked;
//       $.proxy(funcs[tc], this)();
//       data.toggleclicked = (tc + 1) % 2;
//     });
//     return this;
//   };
// })(jQuery);

// $("#more").clickToggle(
//   function () {
//     // alert("First handler: " + $(this).text());
//     $("#review-text").animate({
//       height: h,
//     });
//     $(this).text("less...");
//   },
//   function () {
//     // alert("Second handler: " + $(this).text());
//     $("#review-text").animate({
//       height: "60px",
//     });
//     $(this).text("... Read more");
//   }
// );
