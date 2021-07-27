import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import InfiniteScrollComponent from 'react-infinite-scroll-component';
import { commentsURL } from '../config/config';
import CommentBox from './CommentBox';

const InfiniteScrollList = () => {
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState([]);
  const [hasMore] = useState(true);

  const onFetch = useCallback((p) => async () => {
    try {
      const res = await axios.get(`${commentsURL}?_page=${p}&_limit=10`);
      setComments((prev) => prev.concat(res.data));
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    onFetch()(page);
  }, []);
  return (
    <>
      <InfiniteScrollStyle
        dataLength={comments?.length}
        next={onFetch(page)}
        loader={<></>}
        hasMore={hasMore}
        scrollThreshold="1000px"
      >
        {comments?.map((el) => <CommentBox key={el.id} comment={el} />)}
      </InfiniteScrollStyle>
    </>
  );
};

const InfiniteScrollStyle = styled(InfiniteScrollComponent)`
    position: relative;
    top: 33px;

    div {
        margin-bottom: 12px;
    }

    & > :first-child {
        margin-bottom: 14px;
    }
`;

export default InfiniteScrollList;
