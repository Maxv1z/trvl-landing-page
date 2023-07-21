import React from "react";

import "./mobile.style.scss";

const Mobile = () => {
  return (
    <div className="mobile">
      <section class="early">
        <article>
          <p class="example-right">
            Does not support small screens Does not support small screens Does not support small
            screens Does not support small screens
          </p>
        </article>
        <article>
          <p class="example-left">
            Does not support small screens Does not support small screens Does not support small
            screens Does not support small screens
          </p>

          <p class="example-right">
            Does not support small screens Does not support small screens Does not support small
            screens Does not support small screens
          </p>
        </article>
        <article>
          <marquee behavior="scroll" direction="right" className="right">
            Does not support small screens Does not support small screens Does not support small
            screens Does not support small screens
          </marquee>
          <marquee behavior="scroll" direction="left">
            Does not support small screens Does not support small screens Does not support small
            screens Does not support small screens
          </marquee>
        </article>
        <article>
          <p class="example-right">
            Does not support small screens Does not support small screens Does not support small
            screens Does not support small screens{" "}
          </p>
        </article>
        <article>
          <p class="example-left">
            Does not support small screens Does not support small screens Does not support small
            screens Does not support small screens
          </p>

          <p class="example-right">
            Does not support small screens Does not support small screens Does not support small
            screens Does not support small screens{" "}
          </p>
        </article>

        <article>
          <marquee behavior="scroll" direction="left">
            Does not support small screens Does not support small screens Does not support small
            screens Does not support small Does not support small Does not support small
          </marquee>
          <marquee behavior="scroll" direction="right" className="right">
            Does not support small screens Does not support small screens Does not support small
            screens
          </marquee>
        </article>
        <article>
          <p class="example-right">
            {" "}
            screens Does not support small screens Does not support small screens Does not support
            small screens Does not support small Does not support small
          </p>
        </article>
        <article>
          <p class="example-left">
            Does not support small Does not support small Does not support small Does not support
            small Does not support small Does not support small Does not support small Does not
            support small{" "}
          </p>
          <p class="example-right">
            Does not support small screens Does not support small screens Does not support small
            screens Does not support small screens Does not support small Does not support small
            Does not support small{" "}
          </p>
        </article>
      </section>
    </div>
  );
};

export default Mobile;
