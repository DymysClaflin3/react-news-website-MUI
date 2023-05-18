import { Stack, Pagination } from "@mui/material";
import { useState } from "react";
import NewsCard from "./news-card";
import styled from "styled-components";

const Centered = styled(Stack)`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

const ArticleViewer = ({ data }) => {
  const [page, setPage] = useState(1);
  const currentIndex = 2 * page - 2;
  const prev = data[currentIndex];
  const next = data[currentIndex + 1];

  const handleChange = (e, number) => {
    setPage(number);
  };

  const count = Math.round(data.length / 2);

  return (
    <Centered gap={2} justifyContent="center">
      <Stack direction="row" gap={4}>
        <NewsCard news={prev} />

        {next && <NewsCard news={next} />}
      </Stack>

      <Stack mt={2} justifyContent="center">
        <Pagination
          page={page}
          sx={{
            display: "contents",
            ".MuiPagination-ul": {
              justifyContent: "center",
            },
          }}
          onChange={handleChange}
          count={count}
          color="primary"
          boundaryCount={2}
        />
      </Stack>
    </Centered>
  );
};

export default ArticleViewer;
