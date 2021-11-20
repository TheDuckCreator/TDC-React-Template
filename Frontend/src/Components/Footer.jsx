import React from "react";
import dayjs from "dayjs";
export default function Footer() {
  return (
    <footer className='w-full bg-gray-100 pt-6 pb-9 mt-3 text-center justify-center '>
      <div className='content has-text-centered'>
        <p>
          &copy; {dayjs().format("YYYY")} <strong>The Duck Creator</strong> The
          website program is licensed{" "}
          <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>
            CC BY NC SA 4.0
          </a>
        </p>
      </div>
    </footer>
  );
}
