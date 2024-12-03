import React from "react";
import style from "./Review.module.css";

export default function Review() {
  return (
    <div className={style.container}>
      <div className={style.ReviewHead}>
        <h1>Customer Reviews</h1>
        <div>
          <img src="/images/Back.png" alt="" className={style.direction} />
          <img src="/images/Back2.png" alt="" className={style.direction} />
        </div>
      </div>

      <div className={style.reviewCollection}>
        <div className={style.Reviewchat}>
          <div className={style.reviewTop}>
            <div className={style.oneBox}>
              <div className={style.profile}>
                <img
                  src="/images/reviewProfile.png"
                  alt=""
                  className={style.ReviewProfile}
                />
                <div className={style.reviewMiddle}>
                  <p>St Glx </p>
                  <p>South London</p>
                </div>
              </div>

              <div className={style.reviewTopEnd}>
                <img
                  src="/images/5Star.png"
                  alt=""
                  className={style.starRating}
                />
                <div className={style.timeStamp}>
                  <img src="/images/Time.png" alt="" className={style.clock} />
                  <p>24th September, 2023</p>
                </div>
              </div>
            </div>

            <p className={style.reviewText}>
              The positive aspect was undoubtedly the efficiency of the service.
              The queue moved quickly, the staff was friendly, and the food was
              up to the usual McDonald's standard – hot and satisfying.
            </p>
          </div>
        </div>
        <div className={style.Reviewchat}>
          <div className={style.reviewTop}>
            <div className={style.oneBox}>
              <div className={style.profile}>
                <img
                  src="/images/reviewProfile.png"
                  alt=""
                  className={style.ReviewProfile}
                />
                <div className={style.reviewMiddle}>
                  <p>St Glx </p>
                  <p>South London</p>
                </div>
              </div>

              <div className={style.reviewTopEnd}>
                <img
                  src="/images/5Star.png"
                  alt=""
                  className={style.starRating}
                />
                <div className={style.timeStamp}>
                  <img src="/images/Time.png" alt="" className={style.clock} />
                  <p>24th September, 2023</p>
                </div>
              </div>
            </div>

            <p className={style.reviewText}>
              The positive aspect was undoubtedly the efficiency of the service.
              The queue moved quickly, the staff was friendly, and the food was
              up to the usual McDonald's standard – hot and satisfying.
            </p>
          </div>
        </div>
        <div className={style.Reviewchat}>
          <div className={style.reviewTop}>
            <div className={style.oneBox}>
              <div className={style.profile}>
                <img
                  src="/images/reviewProfile.png"
                  alt=""
                  className={style.ReviewProfile}
                />
                <div className={style.reviewMiddle}>
                  <p>St Glx </p>
                  <p>South London</p>
                </div>
              </div>

              <div className={style.reviewTopEnd}>
                <img
                  src="/images/5Star.png"
                  alt=""
                  className={style.starRating}
                />
                <div className={style.timeStamp}>
                  <img src="/images/Time.png" alt="" className={style.clock} />
                  <p>24th September, 2023</p>
                </div>
              </div>
            </div>

            <p className={style.reviewText}>
              The positive aspect was undoubtedly the efficiency of the service.
              The queue moved quickly, the staff was friendly, and the food was
              up to the usual McDonald's standard – hot and satisfying.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
