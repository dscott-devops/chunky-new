import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Header from "./Header";
import ReviewForm from "./ReviewForm";
import styled from "styled-components";
import Review from "./Review";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`;
const Main = styled.div`
  padding-left: 50px;
`;

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  const slug = useParams();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log(slug);
    const url = `/api/v1/airlines/${slug.slug}`;

    axios
      .get(url)
      .then((response) => {
        setAirline(response.data);
        setLoaded(true);
        console.log(response);
      })
      .catch((response) => console.log(response));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const csrfToken = document.querySelector("[name=csrf-token").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    //console.log('name:', e.target.name, 'value:', e.target.value)
    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));
    console.log("review:", review);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const airline_id = airline.data.id;
    axios
      .post("/api/v1/reviews", { review, airline_id })
      .then((response) => {
        const included = [...airline.included, response.data.data];
        setAirline({ ...airline, included });
        setReview({ title: "", description: "", score: 0 });

        console.log(response);
      })
      .catch((response) => {});
  };
  const setRating = (score, e) => {
    e.preventDefault();
    setReview({ ...review, score });
  };

  let reviews;
  if (loaded && airline.included) {
    reviews = airline.included.map((item, index) => {
      return <Review key={index} attributes={item.attributes} />;
    });
  }

  return (
    <Wrapper>
      {loaded && (
        <Fragment>
          <Column>
            <Main>
              <Header
                attributes={airline.data.attributes}
                reviews={airline.included}
              />

              {reviews}
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={airline.data.attributes}
              review={review}
            />
          </Column>
        </Fragment>
      )}
    </Wrapper>
  );
};

export default Airline;
