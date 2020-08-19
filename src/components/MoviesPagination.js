import React from "react";
import { Pagination } from "react-bootstrap";
import PageItem from "react-bootstrap/PageItem";
// import { Pagination } from "react-bootstrap";

export default function MoviesPagination(props) {
   let active = 1;
   let pageLinks = [];
   for (let i = 1; i <= props.pages + 1; i++) {
      pageLinks.push(
         <PageItem
            active={i === active}
            key={i}
            onClick={() => props.nextPage(i)}
         >
            {i}
         </PageItem>
      );
   }

   return (
      <div>
         <Pagination size="sm">{pageLinks}</Pagination>
      </div>
   );
}
