import React from "react";
import { useStateValue } from "../contexts/StateContext";

function PressReview() {
  const [{ translation }] = useStateValue();

  return (
    <div className="container mx-auto -mt-10 px-6 py-8">
      <h1 class="mb-16">{translation.pressreview}</h1>
      {/* <p>
      {translation.pressreview_construction}
      </p> */}
      <table class="w-full text-left table-collapse">
        <thead>
          <tr>
            <th class="text-sm p-2 text-black bg-grey-lightest">
              {translation.date}
            </th>
            <th class="text-sm p-2 text-black bg-grey-lightest">
              {translation.pressreview}
            </th>
          </tr>
        </thead>
        <tbody class="align-baseline">
          {/* <% rows.forEach(function(row){ %>
              <% if (row.length > 0) { %>
              <tr>
                  <td class="p-2 border-t border-grey-light text-sm">
                      <%= row[0] %>
                  </td>
                  <td class="p-2 border-t border-grey-light text-sm">
                      <a href="<%= row[1] %>" target="_blank">
                          <%= row[2] %></a>
                  </td>
              </tr>
              <% }; %>
          <% }); %> */}
        </tbody>
      </table>
    </div>
  );
}

export default PressReview;
