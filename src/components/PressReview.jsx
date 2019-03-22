import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

import { useStateValue } from "../contexts/StateContext";

function PressReview() {
  const [{ translation }] = useStateValue();
  const [pressReviews, setPressReviews] = useState(null);
  useEffect(() => {
    axios(config.api.press)
      .then(res => {
        setPressReviews(res.data.press);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      {pressReviews !== null && pressReviews.length > 0 ? (
        <div className="container mx-auto -mt-10 px-6 py-8">
          <h1 className="mb-16">{translation.pressreview}</h1>
          {/* <p>
    {translation.pressreview_construction}
    </p> */}
          <table className="w-full text-left table-collapse">
            <thead>
              <tr>
                <th className="text-sm p-2 text-black bg-grey-lightest">
                  {translation.date}
                </th>
                <th className="text-sm p-2 text-black bg-grey-lightest">
                  {translation.pressreview}
                </th>
              </tr>
            </thead>
            <tbody className="align-baseline">
              {pressReviews !== null &&
                pressReviews.map((review, index) => (
                  <tr key={`key-press-${index}`}>
                    <td className="p-2 border-t border-grey-light text-sm">
                      {review.time}
                    </td>
                    <td className="p-2 border-t border-grey-light text-sm">
                      <a href={review.url}>{review.title}</a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="container mx-auto -mt-10 px-6 py-8">
          <h1 className="mb-16">No entries yet</h1>
        </div>
      )}
    </React.Fragment>
  );
}

export default PressReview;
